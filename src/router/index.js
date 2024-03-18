const { Router } = require("express")
const sendNotif = require("../handler/sendNotification")

const router = Router()
router.post("/contact", sendNotif)

module.exports = router