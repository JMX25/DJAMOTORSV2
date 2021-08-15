const vehicleController = {};

const Vehicle = require('../models/Vehicles')

vehicleController.renderVehicleForm = (req, res) => {
    res.render('vehicles/addVehicle', { layout: 'adminMain' });
};

vehicleController.createNewVehicle = async (req, res) => {
    const {brand,model,color,price,description,url} = req.body;
    const newVehicle = new Vehicle({brand, model, color, price,description,url});
    await newVehicle.save();
    req.flash('success_msg','Vehicle Added Succesfully!');
    res.redirect('/vehicles');
};

vehicleController.renderVehicles = async (req, res) => {
    const vehicles = await Vehicle.find();
    res.render('vehicles/allVehicles', {layout:'adminMain', vehicles});
};

vehicleController.renderCatalogue = async (req, res) => {
    const vehicles = await Vehicle.find();
    res.render('vehicles/Catalogue', {vehicles});
};

vehicleController.renderEditForm = async (req, res) => {
    const vehicle = await Vehicle.findById(req.params.id);
    res.render('vehicles/editVehicle',{layout:'adminMain', vehicle});
};

vehicleController.updateVehicle = async (req, res) => {
    const {brand,model,color,price,description,url} = req.body;
    await Vehicle.findByIdAndUpdate(req.params.id, {brand, model, color, price,description,url});
    req.flash('success_msg','Vehicle Updated Succesfully!');
    res.redirect('/vehicles');
};

vehicleController.deleteVehicle = async (req, res) => {
    await Vehicle.findByIdAndDelete(req.params.id);
    req.flash('success_msg','Vehicle Deleted Succesfully!');
    res.redirect('/vehicles');
};

module.exports = vehicleController;