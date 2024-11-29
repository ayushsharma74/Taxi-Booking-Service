import {User} from "../models/user.model.js";

export const createUser = async ({firstName, lastName, email, password}) => {

    if (!firstName || !lastName || !email || !password) {
        console.log("Missing required fields");
    }

    const createdUser = await User.create({
        fullName: {
            firstName,
            lastName
        },
        email,
        password
    });

    return createdUser;
};