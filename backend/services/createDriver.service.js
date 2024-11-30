import { Driver } from "../models/driver.model.js";

export const createDriver = async ({
  firstName,
  lastName,
  email,
  password,
  vehicleType,
  vehicleNumber,
}) => {
  if (!firstName || !lastName || !email || !password) {
    console.log("Missing required fields");
  }
  const createdDriver = await Driver.create({
    fullName: {
      firstName,
      lastName,
    },
    email,
    password,
    vehicleType,
    vehicleNumber,
  });
  return createdDriver;
};
