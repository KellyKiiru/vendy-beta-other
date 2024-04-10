//router


const { Router } = require('express');
const { createCustomer, customerLogin, getACustomer, getACustomerByToken } = require('../controllers/customers.api.js');
const protectRoutes= require('../middlewares/authMiddleware');



const router = Router();

router.post('/create-customer', createCustomer);
router.post('/customer-login', customerLogin);
router.get('/get-customer/:id', protectRoutes, getACustomer);
router.get('/getByToken',  getACustomerByToken);


module.exports = router;