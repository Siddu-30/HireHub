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

const requireAuth = (...roles) => {
  return (req, res, next) => {

    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    if (roles.length && !roles.includes(req.user.role)) {
      return res.status(403).json({ message: "Access denied" });
    }

    next();
  };
};

module.exports={
    authenticateUserCookie,
    requireAuth
}