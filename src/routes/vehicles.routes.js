const {Router} = require('express');
const router = Router();
const {
    renderVehicleForm, 
    createNewVehicle, 
    renderVehicles, 
    renderEditForm,
    updateVehicle,
    deleteVehicle,
    renderCatalogue
} = require('../controllers/vehicles.controllers');

// Administrator routes, insert new vehicle
router.get('/vehicles/add', renderVehicleForm);
router.post('/vehicles/new-vehicle', createNewVehicle );
// Administrator routes, update vehicle
router.get('/vehicles/edit/:id', renderEditForm);
router.put('/vehicles/edit/:id', updateVehicle);
// Administrator routes, delete vehicle
router.delete('/vehicles/delete/:id', deleteVehicle);

// User routes, get all vehicles catalogue
router.get('/vehicles', renderVehicles);

router.get('/Catalogue',renderCatalogue);


module.exports = router;