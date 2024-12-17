const express = require('express');
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./router/router");
const app = express();
const port = 2000;

mongoose.connect("mongodb://localhost/blog" ,{
    useNewUrlparser : true,
    useUnifiedTopology : true,
}).then(()=>{
    console.log("Seccsesful connected");
}).catch((err) =>{
    console.log(err);
})


app.use(cors());
app.use(express.urlencoded({extended:true}));

app.use(router);


app.listen(port, () => console.log(`Example app listening on port ${port}!`))