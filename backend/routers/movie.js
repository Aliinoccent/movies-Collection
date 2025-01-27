const express=require('express');
const validation= require('../validation/movie.js');
const upload=require('../multerConfig.js')
const{ authentication}=require('../controllers/signin_up.controller.js')

const router=express.Router();
const {addMovie,getAll,updateMovie,deleteMovie}=require('../controllers/movie.controller.js');
const { valid } = require('joi');
router.post('/',authentication,validation,upload.single('image'),addMovie);
router.get('/',getAll);
router.put('/update/:id',validation,updateMovie);
router.delete('/:id',validation,deleteMovie);
module.exports=router;