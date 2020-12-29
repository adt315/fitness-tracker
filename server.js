const express = require ("express");
const mongoose = require ("mongoose");
const morgan = require ("morgan");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static("public"));

app.use(morgan("dev"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser:true, 
    useFindAndModify:false,
    useUnifiedTopology:true, 
});

app.use(require("./routes/api.js"));
app.use(require("./routes/html.js"));

app.listen(PORT, function(){
    console.log(`Server started on port ${PORT}`);
});

