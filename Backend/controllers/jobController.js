const job = require('../models/job');

async function handleNewJobs(req,res){
    try{
        const newJob = await job.create({
        ...req.body,
        createdBy:req.user._id,
    });

    res.status(201).json(newJob);
    }
    catch(error){
        res.status(500).json({
            message:error.message,
        });
    }
}

async function getAllJobs(req,res){
    try{
        const allJobs=await  job.find().populate("createdBy","name email");
        res.json(allJobs);
    }
    catch(err){
        res.status(500).json({message:"err.message"});
    }
}

async function getMyJobs(req,res){
    try{
        const myJobs=await job.find({createdBy:req.user._id});
        res.json(myJobs);
    }catch(err){
        res.status(500).json({
            message:err.message,
        });
    }
}

module.exports={
    handleNewJobs,
    getAllJobs,
    getMyJobs
}