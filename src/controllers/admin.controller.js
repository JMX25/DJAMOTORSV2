const adminController = {};
const Admin = require('../models/Admin');
const passport = require('passport');
adminController.renderDashboard = (req, res) => {
    res.render('index', { layout: 'adminMain' });
};

adminController.renderSignupForm = (req,res) => {
    res.render('admins/signup',{ layout: 'adminMain' });
};
adminController.signup = async (req,res) => {
    const {name,email,password,confirm_password} = req.body;
    const errors = [];
    if (password != confirm_password){
        errors.push({text: "Passwords do not match."});
    }
    if (password.length < 4){
        errors.push({text:'Passwords must be at least 4 characters long.'});
    }

    if (errors.length > 0){
       res.render('admins/signup',{ layout: 'adminMain' ,errors,name,email})
    }
    else{
       const emailAdmin = await Admin.findOne({email});
       if (emailAdmin){
           req.flash('error_msg', 'That email is already taken.');
           res.redirect('/admins/signup');
       }else{
           const newAdmin = new Admin({name,email,password});
           newAdmin.password = await newAdmin.encryptPassword(password);
           await newAdmin.save();
           req.flash('success_msg','Registered Succesfully!')
           res.redirect('/admins/signin');
        }
    }
};

adminController.renderSigninForm = (req,res) =>{
    res.render('admins/signin');
};

adminController.signin = passport.authenticate('local',{
    failureRedirect: '/admins/signin',
    successRedirect: '/vehicles',
    failureFlash: true
});

adminController.logout = (req,res) => {
    req.logout();
    req.flash('success_msg','You logged out.');
    res.redirect('/admins/signin');
};

module.exports = adminController;
