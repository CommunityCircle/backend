const jwt = require('jsonwebtoken');

const jwtKey = process.env.JWT_SECRET 

module.exports = {
    generateTokens : user => {
        console.log(user)
        const payload = {
            subject : user._id,
            userName : user.userName
        }
        const options = {
            expiresIn : '1d'
        }

        return jwt.sign(payload, jwtKey, options)

    }
}