require('dotenv').config();
const jwt = require('jsonwebtoken');
const SECERET_KEY = process.env.SECERET_KEY

const generateToken = (userId) => {
    const token = jwt.sign({userId: userId}, SECERET_KEY, {
        expiresIn: "1d"
    });

    return token;
}

const getUserIdFromToken = (token) => {
    try {
        const decoded = jwt.verify(token, SECERET_KEY);
        return decoded.userId;
    } catch (error) {
        return null;
    }
}

module.exports = { generateToken, getUserIdFromToken };