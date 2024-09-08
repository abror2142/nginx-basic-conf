const express = require("express")

const app = express()

app.get("/", (req, res) => {
    res.send("This is a demo app.")
})

app.listen(7777, () => {
    console.log("listenting on port 7777.")
})