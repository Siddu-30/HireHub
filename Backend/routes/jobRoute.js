const Router=require('express')
const router=Router();

const {requireAuth}=require('../middleware/authentication');

const {handleNewJobs,getAllJobs,getMyJobs} =require('../controllers/jobController');

router.get('/',getAllJobs);

router.get('/my-jobs',requireAuth('recruiter'),getMyJobs);

router.post('/',requireAuth('recruiter'),handleNewJobs);

module.exports=router;