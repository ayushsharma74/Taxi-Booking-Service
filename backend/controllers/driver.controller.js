import { Driver } from "../models/driver.model.js";
import { createDriver } from "../services/createDriver.service.js";

export const registerDriver = async (req, res) => {
    const { fullName: { firstName, lastName }, email, password } = req.body;

    const isAlreadyExists = await Driver.findOne({ email });

    if (isAlreadyExists) {
        return res.status(409).json({ message: "Driver already exists" });
    }

    const createdDriver = await createDriver({ firstName, lastName, email, password });
    const token = await createdDriver.generateAuthToken();

    return res.status(201).json({createdDriver, token})
}

export const loginDriver = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    const driver = await Driver.findOne({ email }).select("+password");

    if (!driver) {
        return res.status(401).json({ message: "Driver not found" });
    }

    const isPasswordMatch = await driver.comparePassword(password);

    if (!isPasswordMatch) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = await driver.generateAuthToken();

    res.cookie("jwt", token, { httpOnly: true });
    return res.status(200).json({ driver, token });
}

