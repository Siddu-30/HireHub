// jobseeker/BrowseJobs.jsx
import { useEffect, useState } from "react";
import API  from "../../api/api";

export default function BrowseJobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    API.get("/jobs").then((res) => setJobs(res.data));
  }, []);

  const apply = async (id) => {
    await API.post(`/applications/${id}`);
    alert("Applied!");
  };

  return (
    <div>
      {jobs.map((job) => (
        <div key={job._id}>
          <h3>{job.title}</h3>
          <button onClick={() => apply(job._id)}>Apply</button>
        </div>
      ))}
    </div>
  );
}