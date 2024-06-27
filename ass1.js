const express = require('express');
const app = express();
const port = 3000;

var fs = require('fs');
var url = require('url');

app.get('/todos',(request,response)=>
    {
        console.log("List of todos and ids:");
        fs.readFileSync('example.txt',function(err,data)
        {
            console.log(data.toString());
        });         
    });

app.listen(3000 , ()=>
{
    console.log("Server Found at " + port);
});