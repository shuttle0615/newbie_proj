const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/hey',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
}).then(() => {
    console.log('connected');
}).catch((error) => {
    console.error(error);
} )

const logschema = new mongoose.Schema({
    username : String,
    password : Number,
    winrate : Number 
})

const logger = mongoose.model('logger',logschema);

module.exports = logger;