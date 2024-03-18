require('dotenv').config()
const { BOT_TOKEN, CHAT_ID } = process.env
const TelegramBot = require("node-telegram-bot-api")

const bot = new TelegramBot(BOT_TOKEN, { polling: true })
const pushTelegramNotif = (notif) => {
    bot.sendMessage(CHAT_ID, notif)
}

module.exports = pushTelegramNotif