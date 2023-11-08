import { Router } from 'express';
import { celebrate, Joi, errors, Segments } from 'celebrate';
import { addCustomer, getCustomerList } from '../services/customer.services';

/**
 * This is common router which will navigate the api request as per the
 * routes provided in the request url
 * @param {app} app app instance
 * @returns {router} router instance
 */
export default app => {
	const router = Router();

	app.use('/customer', router);

	/**
	 * Route to fetch a list of all customers
	 */
	router.route('/').get(
		/**
		 * #swagger.tags = ['Customers']
		 * #swagger.path = '/customer'
		 * #swagger.auto = false
		 */
		/*  #swagger.parameters['limit'] = {
                in: 'query',
                type: 'number',
                default:10
          } 
           #swagger.parameters['offset'] = {
                in: 'query',
                type: 'number',
                default:0
          } 
        */
		celebrate({
			[Segments.QUERY]: Joi.object().keys({
				limit: Joi.number().default(10),
				offset: Joi.number().default(0)
			})
		}),
		getCustomerList
	);

	/**
	 * Route to create a new customer
	 */
	router.route('/').post(
		/**
		 * #swagger.auto = false
		 * #swagger.tags = ['Customers']
		 * #swagger.path = '/customer'
		 * #swagger.method = 'post'
		 */
		/*  #swagger.parameters['body'] = {
           in: 'body',
           required: true,
           schema: {
               email: "jhondoe@email.com",
               firstName: "Jhon",
               lastName: "Doe",
               phone: 9876543211,
           }
          } 
        */
		celebrate({
			[Segments.BODY]: Joi.object().keys({
				email: Joi.string().required(),
				firstName: Joi.string().required(),
				lastName: Joi.string().required(),
				phone: Joi.number().required()
			})
		}),
		addCustomer
	);

	app.use(errors());
};
