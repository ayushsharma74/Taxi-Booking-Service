import { User } from "../models/user.model.js"
import { createUser } from "../services/createUser.service.js"
import {validationResult} from "express-validator"
const registerUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    console.log(req.body);
    
    const { fullName: { firstName, lastName }, email, password } = req.body;

    const createdUser = await createUser({ firstName, lastName, email, password });
    const token = await createdUser.generateAuthToken();

    return res.status(201).json({createdUser, token});
}

const loginUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
        return res.status(401).json({ message: "User not found" });
    }

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = await user.generateAuthToken();
    res.cookie("jwt", token, { httpOnly: true });

    return res.status(200).json({ user, token });
}

export{
    registerUser,
    loginUser
}