// recruiter/Dashboard.jsx
import { useEffect, useState } from "react";
import API from '../../api/api'

function RecruiterDashboard() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    API.get("/jobs/my-jobs").then((res) => setJobs(res.data));
  }, []);

  return (
    <div>
      <h2>My Jobs</h2>
      {jobs.map((job) => (
        <div key={job._id}>
          <h3>{job.title}</h3>
          <p>{job.company}</p>
        </div>
      ))}
    </div>
  );
}

export default RecruiterDashboard;