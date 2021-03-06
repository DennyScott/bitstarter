var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.configure(function () {
    app.use(
        "/", //the URL throught which you want to access to you static content
        express.static(__dirname) //where your static content is located in your filesystem
    );
});
app.listen(8080); //the port you want to use
