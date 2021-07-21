
const router = require('express').Router();

const auth = require('./auth');
const { registration: userRegistration, authenticate: userAuth, logout: userLogout } = require('../admin');
const { listProducts, listAllProducts, registration: productRegistration } = require('../product');

//ADMIN
router.post('/public/users/registration', userRegistration.fetchUserData, userRegistration.saveToMongo, userRegistration.response);
router.post('/public/users/login', userAuth.fetchLoginDetails, userAuth.searchInMongo, userAuth.verifyUser, userAuth.createToken, userAuth.storeTokenInRedis, userAuth.addTokenToCookie);
router.get('/private/users/logout', auth, userLogout.deleteTokens);

//PRODUCTS
router.post('/private/products/view', auth, listProducts.getQuery, listProducts.fetchFromMongo, listProducts.response);
router.get('/private/products/view-all', auth, listAllProducts.fetchFromMongo, listAllProducts.response);
router.post('/private/products/addproducts', auth, productRegistration.fetchProductData, productRegistration.saveToMongo, productRegistration.response);
module.exports = router;