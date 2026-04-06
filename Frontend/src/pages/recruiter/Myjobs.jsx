// pages/recruiter/MyJobs.jsx
import { useEffect, useState } from "react";
import API  from "../../api/api";

export default function MyJobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    API.get("/jobs/my-jobs").then((res) => setJobs(res.data));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">My Jobs</h1>

      <div className="space-y-4">
        {jobs.map((job) => (
          <div key={job._id} className="bg-white p-4 rounded-lg shadow">
            <h2 className="font-semibold">{job.title}</h2>
            <p>{job.company}</p>

            <button className="mt-2 text-blue-600">
              View Applicants
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}