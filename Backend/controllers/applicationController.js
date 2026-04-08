const application  = require('../models/application');


async function applyJob(req,res){
    
    const job= await application.create({
        userId:req.user._id,
        jobId:req.params.id,
    });
    res.json(job);
}

async function getMyApplications(req,res){

    const applications=await application.find({userId:req.user._id})
    .populate('jobId');
    
    res.json(applications);
}

async function getApplicantsForJob(req,res){

    const apps=await application.find({jobId:req.params.id})
    .populate('userId','name email');

    res.json(apps);
}

module.exports={
    applyJob,
    getApplicantsForJob,
    getMyApplications
}