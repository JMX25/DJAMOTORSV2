const {Router} = require('express');
const router = Router();
const {renderDashboard, renderSignupForm, signup, renderSigninForm, signin, logout} = require('../controllers/admin.controller');
const {isAuthenticated} = require('../helpers/auth');

router.get('/admins', isAuthenticated, renderDashboard );

router.get('/admins/signup', isAuthenticated, renderSignupForm);
router.post('/admins/signup',isAuthenticated, signup);

router.get('/admins/signin',renderSigninForm);
router.post('/admins/signin',signin);

router.get('/admins/logout',logout);

module.exports = router;