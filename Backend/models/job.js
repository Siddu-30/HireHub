const {Schema,model} =require('mongoose');

const jobSchema=new Schema({
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    company: {
      type: String,
      required: true,
    },
    location: {
      type: String,
    },
    salary: {
      type: Number,
    },
    jobType: {
      type: String, 
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    },{timestamps:true}
);

const job=model('job',jobSchema);

module.exports=job;
