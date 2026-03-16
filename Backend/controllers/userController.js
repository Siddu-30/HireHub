const {user} =require('../models/user');

function handleSignin(req,res){
    return res.json('signin');
}

function handleSignup(req,res){
    return res.json('signup');
}

async function handleSignUpDetails(req,res){
    const {username,email,password}=req.body;

    await user.create({
        username,
        password,
        email
    });
    res.redirect('signin');
}

async function handleSignInDetails(req,res){

    const {email,password}=req.body;

    try{
        const token=await user.matchPasswordAndGenerateToken(email,password);
        return res.cookie('token',token).redirect('/');
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