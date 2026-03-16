const Router=require('express')
const router=Router();

const {handleSignInDetails,handleSignUpDetails,handleSignin,handleSignup}=require('../controllers/userController')


router.get('/signin',handleSignin);

router.get('/signup',handleSignup);

router.post('/signin',handleSignInDetails);

router.post('/signup',handleSignUpDetails);

module.exports=router;