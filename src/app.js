const express = require("express")
const bodyParser = require("body-parser")
const enableCors = require("./middleware/enableCors")
const timeoutsConfig = require("./middleware/timeoutConfig")
const limiter = require("./middleware/limiter")
const router = require("./router/index")

const server = express()

server.name = "porfolio-server"
server.use(bodyParser.urlencoded({ extended: true, limit: "1mb" }))
server.use(bodyParser.json({ limit: "1mb" }))
server.use(enableCors)
server.use(timeoutsConfig)
server.use(limiter)
server.use("/porfolio", router)

module.exports = server