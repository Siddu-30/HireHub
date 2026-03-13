require('dotenv').config();

const express=require('express')
const path=require('path');
const mongoose=require('mongoose');
const cookieParser=require('cookie-parser')

const userroute=require('./routes/user');
const { authenticateUserCookie } = require('./middleware/authentication');

const app=express();
const port=process.env.PORT||3000;

mongoose.connect(process.env.MONGO_URL)
.then((e)=>console.log('mongodb connected'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(authenticateUserCookie('token'));

app.set('view engine','ejs');
app.set('views',path.resolve('./views'));

app.use('/user',userroute);

app.listen(port,()=>console.log(`server started at port :${port}`));