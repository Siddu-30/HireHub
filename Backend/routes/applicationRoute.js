const Router=require('express');
const router=Router();

const {requireAuth}=require('../middleware/authentication');

const {applyJob,getApplicantsForJob,getMyApplications}=require('../controllers/applicationController')

router.post('/:id',requireAuth('job_seeker'),applyJob);

router.get('/me',getMyApplications);

router.get('/job/:id',requireAuth('recruiter'),getApplicantsForJob);

module.exports=router;