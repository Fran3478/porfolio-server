require('dotenv').config()
const { SERVER_PORT } = process.env
const app = require("./src/app")
const port = SERVER_PORT || "3000"

app.listen(port, () => {
    console.log(`Server up & running at port ${port}`)
})
app.keepAliveTimeout = 30 * 1000
app.headersTimeout = 35 * 1000