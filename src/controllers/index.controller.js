const indexController = {};
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service:'Gmail',
    auth:{
        user:'testulacit@gmail.com',
        pass: 'ulacit123'
    }
});
indexController.renderIndex = (req, res) => {
    res.render('index');
};

indexController.renderAbout = (req, res) => {
    res.render('about');
};

indexController.renderContact = (req,res) =>{
    res.render('contact');
}

indexController.send = (req,res)=>{
    const {email} = req.body;
    const options = {
        from: 'testulacit@gmail.com',
        to: email,
        subject: "Payment Plan Info",
        text: "This is a placeholder email for a Payment Plan Info Request\nThank you for shopping at DJA Motors!.",
    }
    transporter.sendMail(options, function(error,info){
        if(error){
            req.flash('error_msg','Something went wrong.')
            return;
        }else{
            console.log("Sent:"+info.response)
            req.flash('success_msg','The Email has been sent.')
        }
    res.redirect('/catalogue');
});
}

module.exports = indexController;
