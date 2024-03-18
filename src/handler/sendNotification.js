
const pushTelegramNotif = require("../controller/pushTelegramNotif")

const sendNotif = (req, res, next) => {
    try {
        const { name, email, message } = req.body
        const telegramNotif = `New contact!\nName: ${name}\nEmail: ${email}\nMessage: ${message}`
        pushTelegramNotif(telegramNotif)
        res.send("respuesta")
        return
    } catch (error) {
        console.log(error)
    }
}

module.exports = sendNotif