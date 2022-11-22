const express = require("express");
const https = require("https")
const bodyParser = require("body-parser")

const app = express();
app.use(bodyParser.urlencoded({extended:true}))

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html")
})

app.post("/", function(req, res) {
    var city = req.body.cityName;
    var appid = "ca21556b962ba9faea1a284698ecdb67"
    const unit = "metric"
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + appid + "&units=" + unit;
    https.get(url, function(response){
        console.log(response.statusCode)

        response.on("data", function(data){
            const weather = JSON.parse(data)
            const temp = weather.main.temp
            const icon = weather.weather[0].icon;
            const imageURL = "https://openweathermap.org/img/wn/" + icon + "@2x.png"
            res.write("<h1>The temperature in "+city+" is "+temp+" degree Celcius</h1>");
            res.write("<img src=" + imageURL +">")
            res.send()
        })
    });
})



app.listen(3000, function(){
    console.log("Server is running on port 3000")
})