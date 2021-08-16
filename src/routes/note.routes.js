const {Router} = require('express');
const router = Router();
const { createNewNote, renderNotes, deleteNote, send} = require('../controllers/note.controller');
const {isAuthenticated} = require('../helpers/auth');

router.post('/notes/new-note',isAuthenticated,createNewNote,send);

router.get('/notes',isAuthenticated,renderNotes);

router.delete('/notes/delete/:id',isAuthenticated, deleteNote); 

module.exports = router;