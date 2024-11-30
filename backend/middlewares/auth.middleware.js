import { Driver } from "../models/driver.model.js";
import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";

export const authMiddleware = async (req, res, next) => {
    console.log(req.cookies);
    try {
        
        const token = req?.headers?.authorization?.split(" ")[1] || req?.cookies?.jwt;
        if (!token) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decodedToken._id);

        if (!user) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        req.user = user;
        next();
    } catch (error) {
        console.log(error);
    }
}

export const driverAuthMiddleware = async (req, res, next) => {
    try {
        
        const token = req?.headers?.authorization?.split(" ")[1] || req?.cookies?.jwt;
        if (!token) {
            return res.status(401).json({ message: "Unauthorized" });
        }
    
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        const driver = await Driver.findById(decodedToken._id);
    
        if (!driver) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        req.driver = driver;
        next();
    } catch (error) {
        console.log(error);
    }
}