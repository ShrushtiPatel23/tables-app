const mongoose = require('mongoose');

const mongoURI = "mongodb://127.0.0.1:27017/data?directConnection=true"


//mongodb://localhost:27017/?directConnection=true
const connectToMongo = ()=>{
    mongoose.set('strictQuery', false);

    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    }).catch(console.error);
}

module.exports = connectToMongo;