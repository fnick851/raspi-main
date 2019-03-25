const express = require("express")
const path = require("path")

const port = 56566

const app = express()


// serve static assets normally
app.use(express.static(__dirname + '/spa'))

// catch all routes and return index.html
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, 'spa', 'index.html'))
})

app.listen(port, () => console.log(`Raspi main app listening on port ${port}!`))
