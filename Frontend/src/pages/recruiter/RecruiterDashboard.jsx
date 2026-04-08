// recruiter/Dashboard.jsx
import { useEffect, useState } from "react";
import API from '../../api/api'

function RecruiterDashboard() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    API.get("/jobs/my-jobs").then((res) => setJobs(res.data));
  }, []);

  return (
    <div className="flex flex-col gap-3">
      <h2 className="font-bold text-2xl" >My Jobs</h2>
      {jobs.map((job) => (
        <div key={job._id} className="flex font-semibold text-lg">
          <h3>{job.title} - </h3>
          <p>{job.company}</p>
        </div>
      ))}
    </div>
  );
}

export default RecruiterDashboard;