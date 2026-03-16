
const JWT=require('jsonwebtoken')

const secret=process.env.JWT_SECRET;

function createUserToken(user){
    const payload={
        _id:user._id,
        username:user.username,
        email:user.email
    }
    const token=JWT.sign(payload,secret,{expiresIn:"1d"});
    return token;
}

function validateUserToken(token){
    const payload=JWT.verify(token,secret);
    return payload;
}

module.exports={
    createUserToken,
    validateUserToken
}