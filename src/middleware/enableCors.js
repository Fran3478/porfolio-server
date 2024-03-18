require('dotenv').config()
const { CORS_ORIGIN } = process.env
const enableCors = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", CORS_ORIGIN || "http://localhost:3000")
    res.header("Access-Control-Allow-Credentials", "true")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    res.header("Access-Control-Allow-Methods", "GET, POST")
    next()
}

module.exports = enableCors