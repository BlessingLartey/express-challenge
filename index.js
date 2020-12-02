const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const port = 3000

app.use(bodyParser() )

app.get('/',(request, response) => {
    //console.log('This is the request body', request.body)
    response.send("This is the main backend");
});


app.get('/login', (request, response) => {
    console.log(request);
    const testData =require("./test.json");
    response.json(testData);
});

app.post('/login', (request,response) =>{
    const userData = require("./user.json")
    console.log(request)
    response.send(userData);
})

app.delete('/login', (request,response) =>{
    const deleteuser = require ('./user.json');
    console.log(request)
    response.send(deleteuser)
})

app.listen(3000, () =>{
    console.log('Application is running')
})