const express = require("express")
const bodyParser = require("body-parser")

const app = express()

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/signup.html")
})

app.listen(3000, function(){
    console.log("server is listening on port 3000")
})