const express=require('express');
const validation= require('../validation/movie.js');
const upload=require('../multerConfig.js')
const{ authentication}=require('../controllers/signin_up.controller.js')

const router=express.Router();
const {addMovie,getAll,updateMovie}=require('../controllers/movie.controller.js')
router.post('/',authentication,validation,upload.single('image'),addMovie);
router.get('/',getAll);
router.put('/update/:id',validation,updateMovie);
module.exports=router;