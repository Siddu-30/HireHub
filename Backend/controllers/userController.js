const {user} =require('../models/user');

function handleSignin(req,res){
    return res.json('signin');
}

function handleSignup(req,res){
    return res.json('signup');
}

async function handleSignUpDetails(req,res){
    try {
    const {username,email,password,role}=req.body;

    await user.create({
        username,
        password,
        email,
        role
    });
    res.status(201).json({
        message:'User registered succesfully',
    });
    }
    catch(error){
        res.status(500).json({
            message:"error.message",
        });
    }
}

async function handleSignInDetails(req,res){

    const {email,password}=req.body;

    try{
        const token=await user.matchPasswordAndGenerateToken(email,password);
        return res.cookie('token',token,{
            httpOnly:true,
            secure:false,
            sameSite:"strict"}).redirect('/');
    }
    catch(error){
        return res.redirect('signin',{
            error:"Incorrect Email or Password",
        });
    }
}

module.exports={
    handleSignInDetails,
    handleSignUpDetails,
    handleSignin,
    handleSignup
}