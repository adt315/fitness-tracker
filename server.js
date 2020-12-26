const express = require ("express");
const mongoose = require ("mongoose");
const morgan = require ("morgan");

const app = express();

app.listen(3000, function(){
    console.log("Server started on port 3000")
});

