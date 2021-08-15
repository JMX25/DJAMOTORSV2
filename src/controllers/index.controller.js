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
    const {name,email,subject,body} = req.body;

    const options = {
        from: 'testulacit@gmail.com',
        to: email,
        subject: subject,
        text: body
    }

    transporter.sendMail(options, function(error,info){
        if(error){
            req.flash('error_msg','Something went wrong.')
            return;
        }else{
            console.log("Sent:"+info.response)
            req.flash('success_msg','The Email has been sent.')
        }
    res.redirect('/Contact');
});
}

module.exports = indexController;
