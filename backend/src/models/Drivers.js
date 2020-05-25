const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    NIN: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: Number,
        required: true,
        
    },
    nextKin: {
        type: String,
        required: true,
    },
    recruitementDate: {
        type: String,
        required: true,

    },
    lastName: {
        type: String,
        required: true,
        
    },
    age:{
        type: Number,
        required: true,
        unique: true,
    },
    bodastage: {
        type: String,
        required: true,
    },
    nextKinPhone: {
        type: Number,
        required: true,
        
    },
    recruitementLocation: {
        type: String,
        required: true,
    },

});

const Driver = mongoose.model('Driver', userSchema);

module.exports = Driver;