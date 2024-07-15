const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.json());
var fs = require('fs');

app.get('/todos',(request,response)=>
    {
        fs.readFile('list.json','utf8',function(err,data)
        {
            response.json(data);
        });         
    });

app.get('/todo/:id',(request,response)=>
    {
        fs.readFile('list.json','utf8',function(err,data)
        {
            let obj = JSON.parse(data);
            const idprop = request.params.id;
            response.send(obj[idprop]);
        });    
        
    });

app.post('/todos',(request,response)=>
    {
 

        fs.readFile('list.json','utf8',function(err,data)
        {
            const{id , Todo} = request.body;
            let old = JSON.parse(data);
            old[id] = Todo;
            fs.writeFile('list.json',JSON.stringify(old),function(err)
            {
                if(err) throw err;
                response.send("Done");
                fs.readFile('list.json','utf8',function(err,data)
                {
                    console.log((data));
                });
            }); 
        });
    });

app.delete('/todo/:id',(request,response)=>
    {
        fs.readFile('list.json','utf8',function(err,data)
        {
            let list = JSON.parse(data);
            const id_inp = request.params.id;
            delete list[id_inp];

            fs.writeFile('list.json',JSON.stringify(list),function(err)
            {
                if(err) throw err;
                fs.readFile('list.json','utf8',function(err,data)
                {
                    console.log((data));
                });
            });
        });
    });
app.listen(3000 , ()=>
{
    console.log("Server Found at " + port);
});