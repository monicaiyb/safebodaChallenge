const express = require('express')
const User = require('../models/Users')

const router = express.Router()

router.post('/create', async (req, res) => {
        // Create a new user
        const userData=req.body
    try {
        const user = new User(userData);
        await user.save();
        const token = await user.generateAuthToken();
        res.status(201).send({ user, token });
    } catch (error) {
        res.status(400).send({error});
    }
});

router.post('/login', async(req, res) => {

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

// router.post("/users/signup", async (req, res) => {

//     try {
//         const user = new User(req.body);
//         await user.save();
//         const token = await user.generateAuthToken();
//         res.status(201).send({ user, token });
//     } catch (error) {
//         res.status(400).send(error);
//     }
    // });
   
    // const user = new User({
    
    //   name: req.body.name,
    //   password: req.body.password
    // });
    // await user.save()
    //   .then(() => {
    //     res.status(200).send(user, token);
    //   })
    //   .catch(err => {
    //     console.log("Error is ", err.message);
    //   });
  

module.exports = router