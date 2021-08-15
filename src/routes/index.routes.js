const {Router} = require('express');
const router = Router();
const {renderIndex, renderAbout, renderContact, send} = require('../controllers/index.controller');

router.get('/', renderIndex );

router.get('/about', renderAbout);

router.get('/contact',renderContact);
router.post('/Contact/mail', send);

module.exports = router;