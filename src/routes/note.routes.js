const {Router} = require('express');
const router = Router();
const { createNewNote, renderNotes, deleteNote, send} = require('../controllers/note.controller');

router.post('/notes/new-note',createNewNote,send);

router.get('/notes',renderNotes);

router.delete('/notes/delete/:id', deleteNote); 

module.exports = router;