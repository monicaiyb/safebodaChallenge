const express = require('express');
const Driver = require('../models/Drivers');

const router = express.Router();

// Create a new Driver
router.post('/drivers', async (req, res) => {
    
    const driverData=req.body;
 // console.log('create new driver');

    try {
        const driver = new Driver (req.body);
        await driver.save();
        return res.status(201).send(driver);
    } catch (error) {
        res.status(400).send(error);
    }
});

// fetch a Driver items from database
router.get("/drivers",(req,res)=>{
    Driver.find({})
    .then((driver)=>{
        return res.status(200).send(driver);
    })
    .catch((error)=>{
        return res.status(400).send(error);
    });
});


// fetching single todo

router.get("/drivers/:id", async(req,res)=>{
    const id=req.params.id;
    
    // console.log(req.params);
    try{
        const todo=await Todo.findById(id);
            if(!todo){
                return res.status(404).send({error: "Todo not found"});
            }
            res.status(200).send(todo);
    }catch(error){
            res.status(400).send(error);
     }
});



module.exports = router;