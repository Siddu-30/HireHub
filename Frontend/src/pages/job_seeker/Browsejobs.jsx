// jobseeker/BrowseJobs.jsx
import { useEffect, useState } from "react";
import API  from "../../api/api";

export default function BrowseJobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    API.get("/jobs").then((res) => setJobs(res.data));
  }, []);

  const apply = async (id) => {
    await API.post(`application/${id}`);
    alert("Applied!");
  };

  return (
    <div  className="flex flex-col gap-3">
      {jobs.map((job) => (
        <div key={job._id} className="m-2 flex flex-row">
          <h3 className="font-semibold m-2">{job.title}</h3>
          <button 
          className="border border-black-500 w-30 rounded font-semibold text-lg p-2 cursor-pointer bg-green-300"
          onClick={() => apply(job._id)}>Apply</button>
        </div>
      ))}
    </div>
  );
}