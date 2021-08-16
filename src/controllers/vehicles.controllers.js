const vehicleController = {};

const Vehicle = require('../models/Vehicles')

vehicleController.renderVehicleForm = (req, res) => {
    res.render('vehicles/addVehicle', { layout: 'adminMain' });
};

vehicleController.createNewVehicle = async (req, res) => {
    const {brand,model,color,price,description,url,vcc,capacity} = req.body;
    const newVehicle = new Vehicle({brand, model, color, price,description,url,vcc,capacity});
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

vehicleController.renderMore = async (req,res) => {
    const years = [1,5,10];
    const rates = [0.20,0.15,0.08];
    const results =[];
    const vehicle = await Vehicle.findById(req.params.id);

    const Sprice = (vehicle.price).replaceAll(',','');
    const numPrice = Sprice.substring(1);

    const amount = parseInt(numPrice);

    for(let i = 0; i<years.length; i++){
        const yearcalc = years[i];
        const calculatedPayment =  yearcalc * 12;
        
        const ratecalc = rates[i]/12;

        const x = Math.pow(1 + ratecalc, calculatedPayment);
        const monthly = (amount * x * ratecalc)/(x-1);
        
        const mPayment = monthly.toFixed(2);
        const tPayment = (monthly * calculatedPayment).toFixed(2);
        const tInterest = ((monthly * calculatedPayment) - amount).toFixed(2);
        const rate = rates[i]*100;
        results.push({mPayment,tPayment,tInterest,yearcalc,rate})
    }
    
    res.render('vehicles/more',{vehicle,results});
}

vehicleController.renderEditForm = async (req, res) => {
    const vehicle = await Vehicle.findById(req.params.id);
    res.render('vehicles/editVehicle',{layout:'adminMain', vehicle});
};

vehicleController.updateVehicle = async (req, res) => {
    const {brand,model,color,price,description,url,vcc,capacity} = req.body;
    await Vehicle.findByIdAndUpdate(req.params.id, {brand, model, color, price,description,url,vcc,capacity});
    req.flash('success_msg','Vehicle Updated Succesfully!');
    res.redirect('/vehicles');
};

vehicleController.deleteVehicle = async (req, res) => {
    await Vehicle.findByIdAndDelete(req.params.id);
    req.flash('success_msg','Vehicle Deleted Succesfully!');
    res.redirect('/vehicles');
};


module.exports = vehicleController;