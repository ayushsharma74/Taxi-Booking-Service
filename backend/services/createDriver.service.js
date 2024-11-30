import { Driver } from "../models/driver.model.js";

export const createDriver = async ({firstName, lastName, email, password}) => {
    if (!firstName || !lastName || !email || !password) {
        console.log("Missing required fields");
    }
    const createdDriver = await Driver.create({firstName, lastName, email, password})
    return createdDriver;
}