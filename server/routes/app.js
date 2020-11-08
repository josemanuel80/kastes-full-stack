import express from 'express';
import {listOfFilms} from '../controlers/app.js';
import {postFilm, updateFilm,deleteFilm,listById} from '../controlers/app.js'

const router=express.Router();

router.get('/film',listOfFilms);
router.get('/film/:id',listById);
router.post('/film',postFilm);
router.put('/film/:id',updateFilm);
router.delete('/film/:id',deleteFilm);

export default router;