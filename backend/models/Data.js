const mongoose = require('mongoose');
const { Schema } = mongoose;

const DataSchema = new Schema({

    id:{
        type: Number,
        ref: 'user'
    },
    first_name:{
        type: String,
        required: true
    },
    last_name:{
        type: String,
        required: true, 
    },
    email:{
        type: String,
       rrequired: true
    },
    gender:{
        type: String,
       required: true
    },
    income: {
        type: String,
       required: true
    },
    city: {
        type: String,
       required: true
    },
    car: {
        type: String,
       required: true
    },
    quote: {
        type: String,
       required: true
    },
    phone_price: {
        type: String,
       required: true
    },

  });

  module.exports = mongoose.model('data', DataSchema);