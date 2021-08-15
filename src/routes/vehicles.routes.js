const {Router} = require('express');
const router = Router();
const {
    renderVehicleForm, 
    createNewVehicle, 
    renderVehicles, 
    renderEditForm,
    updateVehicle,
    deleteVehicle,
    renderCatalogue,
    renderMore
} = require('../controllers/vehicles.controllers');

const {isAuthenticated} = require('../helpers/auth');

// Administrator routes, insert new vehicle
router.get('/vehicles/add', isAuthenticated, renderVehicleForm);
router.post('/vehicles/new-vehicle', isAuthenticated, createNewVehicle );
// Administrator routes, update vehicle
router.get('/vehicles/edit/:id', isAuthenticated, renderEditForm);
router.put('/vehicles/edit/:id', isAuthenticated, updateVehicle);
// Administrator routes, delete vehicle
router.delete('/vehicles/delete/:id', isAuthenticated, deleteVehicle);

// User routes, get all vehicles catalogue
router.get('/vehicles', isAuthenticated, renderVehicles);

router.get('/Catalogue',renderCatalogue);
router.get('/Catalogue/vehicle/:id',renderMore);


module.exports = router;