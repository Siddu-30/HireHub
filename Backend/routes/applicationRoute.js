const Router=require('express');
const router=Router();

const {requireAuth}=require('../middleware/authentication');

const {applyJob,getApplicantsForJob,getMyApplications}=require('../controllers/applicationController')

router.get('/me',getMyApplications);

router.get('/job/:id',requireAuth('recruiter'),getApplicantsForJob);

router.post('/:id',requireAuth('job_seeker'),applyJob);

module.exports=router;