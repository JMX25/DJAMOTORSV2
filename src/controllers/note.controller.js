const noteController = {};
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service:'Gmail',
    auth:{
        user:'testulacit@gmail.com',
        pass: 'ulacit123'
    }
});

const Note = require('../models/Notes');

noteController.createNewNote = async (req,res) => {
    console.log(req.body)
    const {name,email,message,subject} = req.body;
    const newNote = new Note({name,email,message,subject});
    await newNote.save();
    
    const options = {
        from: 'testulacit@gmail.com',
        to: email,
        subject: `Thanks for your Interest ${name}`,
        text: "Your request has been received and is now being proccesed.\nThank you for shopping at DJA Motors!.",
    }

    transporter.sendMail(options, function(error,info){
        if(error){
            req.flash('error_msg','Something went wrong.')
            return;
        }else{
            console.log("Sent:"+info.response)
            req.flash('success_msg','Note Created Succesfully');
        }
    res.redirect('/');
    });
};

noteController.renderNotes = async (req,res) => {
    const notes = await Note.find();
    res.render('notes/allNotes',{layout:'adminMain', notes});
};

noteController.deleteNote = async (req,res) => {
    await Note.findByIdAndDelete(req.params.id);
    req.flash('success_msg','Note Deleted Succesfully');
    res.redirect('/notes')
};

noteController.send = (req,res)=>{

}

module.exports = noteController;