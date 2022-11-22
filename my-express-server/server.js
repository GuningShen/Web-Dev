const express = require("express");
var app = express();

app.get("/", function(request, response){
    response.send("<h1>Hello</h1>")
});

app.get("/about", function(req, res){
    res.send("<h1>Guning Shen</h1>")
})

app.get("/hobbies", function(req, res){
    res.send("<h1>Guning Shen</h1>")
})

app.listen(3000, function(){
    console.log("Server started on port 3000")
});
