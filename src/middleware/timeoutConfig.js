const timeoutsConfig = (req, res, next) => {
    req.setTimeout(5000)
    res.setTimeout(5000)
    next()
}

module.exports = timeoutsConfig