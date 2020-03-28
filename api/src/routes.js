const { Router } = require('express');

const UserController = require('./controllers/UserController');
const LoginController = require('./controllers/LoginController');
const PurchaseController = require('./controllers/PurchaseController');
const UserPurchaseController = require('./controllers/UserPurchaseController');

const authMiddleware = require('./middlewares/auth');

const routes = Router();

routes.post('/login', LoginController.store);

routes.post('/users', UserController.store);
routes.get('/users/:id', UserController.show);

routes.get('/purchases/:id', PurchaseController.show);

routes.use(authMiddleware);

routes.get('/users/:id/purchases', UserPurchaseController.index);

routes.post('/purchases', PurchaseController.store);

module.exports = routes;
