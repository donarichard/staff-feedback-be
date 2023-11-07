import express from 'express';
import customers from './customers';

const router = express.Router();

customers(router);

export default router;
