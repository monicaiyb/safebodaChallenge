const express = require('express');
const cors=require("cors");
const userRouter = require('./views/userViews.js');
const port = process.env.PORT || 8080;
require('./db/db');

const app = express();

app.use(cors());

app.use(express.json());
app.use(userRouter);

app.get('/', (req, res) => {
    res.status(200).send({message:'Hello World!'});
});
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})