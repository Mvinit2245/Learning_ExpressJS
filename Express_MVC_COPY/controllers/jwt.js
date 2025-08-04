const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()

exports.generateToken = async (email, role) => {
    const token = await jwt.sign({email, role}, process.env.JWT_SECRET)
    return token;
}

exports.verifyToken = async (token) => {
    try {
        const result = jwt.verify(token, process.env.JWT_SECRET);
        return result;
    } catch (err) {
        console.error("JWT verification failed:", err.message);
        return null;
    }
};
