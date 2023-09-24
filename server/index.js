const express = require('express')
const app = express();
const cors = require('cors');
const { connectDb } = require('./db');
const dotenv = require('dotenv');
const { getData } = require('./routes/getData');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dotenv.config();

app.get('/',(req,res)=>{
    res.send('<h1>DAMN !!</h1>')
})
app.get('/data', getData);

app.listen(process.env.PORT,()=>{
    console.log("app listening on the server port 8080");
})

connectDb();