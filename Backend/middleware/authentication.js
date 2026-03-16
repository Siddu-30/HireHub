const { validateUserToken } = require("../services/authentication");


function authenticateUserCookie(cookieName){
    return (req,res,next)=>{
        const tokenCookieValue=req.cookies[cookieName];
        if(!tokenCookieValue){
            req.user=null;
            return next();
        }
        try{
            const userPayload=validateUserToken(tokenCookieValue);
            req.user=userPayload;
        }catch(error){
            req.user=null;
        };
        return next();
    }
}

function requireAuth(req,res,next){
    if(!req.user){
        return res.status(401).json({
            message:"Unauthorized"
        });
    }

    next();
}


module.exports={
    authenticateUserCookie,
    requireAuth
}