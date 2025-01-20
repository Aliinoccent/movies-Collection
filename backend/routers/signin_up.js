const express=require('express');
const router=express();

const{ signUp,login,authentication}=require('../controllers/signin_up.controller')
const {getAllUser,getById}=require('../controllers/user.controller');
router.post('/',signUp);
router.post('/login',login);
router.get('/',authentication,getAllUser);
router.get('/:id',authentication,getById);

module.exports=router;