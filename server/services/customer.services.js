import { createUser, getCustomers } from '../db/controllers/Customer.controller';
import { FORBIDDEN, CREATED, NOT_FOUND, OK } from 'http-status-codes';
/**
 * Functionality used to create a new user to the database
 * @param {*} req request
 * @param {*} res response
 * @param {*} next middleware
 * @returns {Object} new user data
 */
export const addCustomer = async (req, res, next) => {
	try {
		const formattedData = { ...req.body };
		const { newUser } = await createUser(formattedData);
		if (!newUser._id) {
			return res.status(FORBIDDEN).send({ message: 'Something went wrong' });
		}
		return res.status(CREATED).send({ user: newUser });
	} catch (error) {
		next(error);
		return 'Error';
	}
};

/**
 * Functionality used to fetch all the available users from the database
 * @param {*} req request
 * @param {*} res response
 * @param {*} next middleware
 * @returns {Array} users list
 */
export const getCustomerList = async (req, res, next) => {
	try {
		const { limit, offset } = req.query;
		const { customers, total } = await getCustomers(limit, offset);
		if (!(customers && customers.length)) {
			return res.status(NOT_FOUND).send({ message: 'No customers found' });
		}
		return res.status(OK).send({
			status: true,
			pagination: {
				offset,
				limit,
				total
			},
			customers
		});
	} catch (error) {
		next(error);
	}
};
