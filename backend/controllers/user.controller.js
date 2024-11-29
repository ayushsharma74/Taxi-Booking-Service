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
    // const hashedPassword = await User.hashPassword(password);

    const createdUser = await createUser({ firstName, lastName, email, password });
    const token = await createdUser.generateAuthToken();

    return res.status(201).json({createdUser, token});
}

export{
    registerUser
}