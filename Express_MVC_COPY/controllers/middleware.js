const {verifyToken} = require("./jwt");

exports.adminMiddleware =async (req, res, next) => {
   const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; 
    if(!token){
        res.json({message: 'User not authenticated'})
        return
    }

    const decodeToken = await verifyToken(token)
    if(!decodeToken){
        res.json({messgae: 'Invalid Token'})
        return
    }
    
    
    if(decodeToken.role !== 'admin'){
        res.json({message: 'Only admins are allowed'})
        return
    }
    req.user = decodeToken
    next()
}