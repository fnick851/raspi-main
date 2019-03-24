const express = require("express")
const app = express()
const port = 3000

app.get("/", (req, res) => res.send("Hello RasPi!"))

app.listen(port, () => console.log(`Raspi main app listening on port ${port}!`))