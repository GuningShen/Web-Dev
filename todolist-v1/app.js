const express = require("express")
const bodyParser = require("body-parser")

const app = express()

app.get("/", function(req, res) {
    var today = new Date();
    if (today.getDate === 6 || today.getDate() === 0) {
        res.send("it's weekend")
    } else{
        res.send("it's working day")
    }
})

app.listen(3000, function(){
    console.log("server is listening on port 3000")
})