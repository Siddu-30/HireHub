const user =require('../models/user');

function handleSignin(req,res){
    return res.json('signin');
}

function handleSignup(req,res){
    return res.json('signup');
}

async function handleSignUpDetails(req,res){
    try {
        console.log("BODY:", req.body);
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
            message:error.message,
        });
    }
}

async function handleSignInDetails(req,res){

    const {email,password}=req.body;

    try{
        const token=await user.matchPasswordAndGenerateToken(email,password);
        const foundUser = await user.findOne({ email }).select('-password');

    return res.cookie('token', token, {
      httpOnly: true,
      secure: false,
      sameSite: "strict"
    }).status(200).json({
      message: "Login successful",
      token,
      user: {
        _id: foundUser._id,
        email: foundUser.email,
        role: foundUser.role,
        username: foundUser.username
      }
    });
    }
    catch(error){
        return res.status(401).json({
        message: "Incorrect Email or Password"
    });
    }
}

module.exports={
    handleSignInDetails,
    handleSignUpDetails,
    handleSignin,
    handleSignup
}