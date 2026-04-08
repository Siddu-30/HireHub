const {Schema,model} =require('mongoose');

const applicationSchema= new Schema({
    userId: { type: Schema.Types.ObjectId, ref: "user" },
    jobId: { type: Schema.Types.ObjectId, ref: "job" },
    status: {
      type: String,
      enum: ["applied", "shortlisted", "rejected"],
      default: "applied",
    },
  },
{timestamps:true});

const application=model('application',applicationSchema);

module.exports=application