const express = requires('express');
const express = requires('mongoose');
const PORT = 678;

// npm init -> inicializar un proyecto en el cual se puden instalr modulos
// npm install express    npm install mongoose

const uri = "mongodb+srv://seg:desarrolla.software@cluster0.deva6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiesTopology: true
}, error =>{
    if(error){
        console.log('Error connecting to the database');
        console.log(error);
    } else{
        console.log('Succesfully connected to the mongo database server (Cluster');
        console.log('Server cluster: ' + mongoose.connection.host);
        console.log('Server cluster Port: ' + mongoose.connection.port);
    }
});
const app = express();

const { Mongoose } = require('mongoose');
var routerUsers = require('./routers/users');
app.use('/users', routerUsers);

app.listen(PORT);
