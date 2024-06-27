const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.json());
var fs = require('fs');

app.get('/todos',(request,response)=>
    {
        console.log("List of todos and ids:");
        fs.readFile('list.json','utf8',function(err,data)
        {
            console.log((data));
        });         
    });

app.get('/todo/:id',(request,response)=>
    {
        fs.readFile('list.json','utf8',function(err,data)
        {
            var obj = JSON.parse(data);
            const idprop = request.params.id;
            console.log((obj[idprop]));
        });    
        
    });

app.post('/todos',(request,response)=>
    {
        fs.readFile('list.json','utf8',function(err,data)
        {
            var old = JSON.parse(data);
            var Toadd = JSON.parse(request.body);

            old[Toadd[id]] = Toadd[ToDo];

            fs.writeFile('list.json',JSON.stringify(old),(err)=>
            {
                if(err) throw err;
                console.log("done");
            });
            });
    });
app.listen(3000 , ()=>
{
    console.log("Server Found at " + port);
});