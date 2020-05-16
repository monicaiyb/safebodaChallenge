const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/sbUsersDB",{

    useNewUrlParser:true,
    useUnifiedTopology:true
});

const db= mongoose.connection;
if(!db){
    console.log("Error connecting to database");
}else{
    console.log('Successfully connected to database');
};
    