import logger from "../../config/logger";
import CustomerModel from "../models/Customer.model";

/**
 * Functionality used to create the new customer to the database
 * @param {*} newUser customer object
 * @returns {Object} newly created user data with the token
 */
export const createUser = async (newUser) => {
    try {
        // Check if the user exists
        const userExist = await CustomerModel.findOne({
            email: newUser.email
        });
        if (userExist) {
            throw `User with email ${newUser.email} already exists`;
        }
        const user = new CustomerModel(newUser);
        const savedUser = await user.save();
        return {
            newUser: savedUser,
        };
    } catch (err) {
        logger.error(`Error while creating user ${err}`);
        throw err;
    }
};


/**
 * Functionality used to create the new customer to the database
 * @param {*} newUser customer object
 * @returns {Object} newly created user data with the token
 */
export const getCustomers = async (limit=10, offset=0) => {
    try {
        const total = await CustomerModel.find({}).count()
       const customers =  await CustomerModel.find({}).limit(limit).skip(offset)
       return {
        customers,
        total
       }
    } catch (error) {
        throw error
    }
}