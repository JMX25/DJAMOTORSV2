const {Router} = require('express');
const router = Router();
const {renderDashboard, renderSignupForm, signup, renderSigninForm, signin, logout} = require('../controllers/admin.controller');

router.get('/admins', renderDashboard );

router.get('/admins/signup',renderSignupForm);
router.post('/admins/signup',signup);

router.get('/admins/signin',renderSigninForm);
router.post('/admins/signin',signin);

router.get('/admins/logout',logout);

module.exports = router;