require('dotenv').config();

const express=require('express')
const mongoose=require('mongoose');
const cookieParser=require('cookie-parser')
const cors=require('cors');
const {authenticateUserCookie}=require('./middleware/authentication')


const userRoute=require('./routes/userRoute');
const jobRoute=require('./routes/jobRoute');
const appsRoute=require('./routes/applicationRoute');


const app=express();
const port=process.env.PORT||3000;

mongoose.connect(process.env.MONGO_URL)
.then((e)=>console.log('mongodb connected'));


app.use(cors({
    origin:"https://hire-hub-ochre.vercel.app",
    credentials:true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(authenticateUserCookie('token'));


app.use('/user',userRoute);
app.use('/jobs',jobRoute);
app.use('/application',appsRoute);


app.listen(port,()=>console.log(`server started at port :${port}`));