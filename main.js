const express = require('express');
const path = require('path');
const login = require('./login');
const game = require('./game');
const cors = require('cors')

const app = express();
app.use(cors())
app.use(express.json())


const PORT = process.env.PORT || 5000; 

app.use('/login' , login);
app.use('/game' , game);

app.listen(PORT , () => {
    console.log("the server works");
});