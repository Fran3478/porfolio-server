const rateLimit = require("express-rate-limit")

const limiter = rateLimit({
    windowMS: 3 * 60 * 1000,
    max: 10,
    standarHeaders: true,
    legacyHeaders: false,
    message: "Allowed number of requests exceeded"
})

module.exports = limiter