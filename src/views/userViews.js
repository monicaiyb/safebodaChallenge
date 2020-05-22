const express = require('express')
const User = require('../models/Users')

const router = express.Router()

router.post('/users/create', async (req, res) => {
        // Create a new user
        const userData=req.body;
    try {
        const user = new User(userData);
        await user.save();
        const token = await user.generateAuthToken();
        res.status(201).send({ user, token });
    } catch (error) {
        res.status(400).send({error});
    }
});

router.post('/users/login',async(req, res) => {
    //Login a registered user
    try {
        const { email, password } = req.body;
        const user = await User.findByCredentials(email, password);
        if (!user) {
            return res.status(401).send({error: 'Login failed! Check authentication credentials'});
        } 
        const token = await user.generateAuthToken();
        res.status(200).send({ user, token });
    } catch (error) {
        res.status(400).send(error);
    }
});

// router.get("/users/profile",auth,(req, res)=>{
//     res.status(200).send(req.user);
// });

module.exports = router