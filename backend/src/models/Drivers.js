const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    NIN: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: Number,
        required: true,
        unique: true,
    },
    bodastage: {
        type: String,
        required: true,
        trim: true
    },
    RecruitementDate: {
        type: String,
        required: true,

    },
    RecruitementLocation: {
        type: String,
        required: true,
        
    },
    nextKin: {
        type: String,
        required: true,
        trim: true
    },
});

const Driver = mongoose.model('Driver', userSchema);

module.exports = Driver;