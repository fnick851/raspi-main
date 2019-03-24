const express = require("express")
const path = require("path")

const app = express()
const port = 56566

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/index.html"))
})

app.listen(port, () => console.log(`Raspi main app listening on port ${port}!`))
