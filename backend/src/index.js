const express = require('express');
const cors =require("cors");
const bodyParser = require('body-parser')
const userRouter = require('./views/userViews.js');
const driverRouter=require('./views/driverViews');
const port = process.env.PORT || 3000;
require('./db/db');

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json())
app.use(userRouter);
app.use(driverRouter);


app.get('/', (req, res) => {
    res.status(200).send({message:'Hello World!'});
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
