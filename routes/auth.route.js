//POST localhost:8080/ecomm/api/v1/auth/signup
const authController = require('../controllers/auth.controller');
const authMiddleware = require('../middlewares/auth.mw');

module.exports = (app) => {
    app.post("/ecomm/api/v1/auth/signup", [authMiddleware.verifySignUpBody], authController.signup);
}