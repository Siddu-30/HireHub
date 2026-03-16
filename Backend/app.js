require('dotenv').config();

const express=require('express')
// const path=require('path');
const mongoose=require('mongoose');
const cookieParser=require('cookie-parser')
const cors=require('cors');
const {authenticateUserCookie,requireAuth}=require('./middleware/authentication')


const userroute=require('./routes/userRoute');

const app=express();
const port=process.env.PORT||3000;

mongoose.connect(process.env.MONGO_URL)
.then((e)=>console.log('mongodb connected'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(authenticateUserCookie('token'));
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));

app.use('/user',userroute);

app.get('/',(req,res)=>{
    res.send("hello world")
})

app.listen(port,()=>console.log(`server started at port :${port}`));