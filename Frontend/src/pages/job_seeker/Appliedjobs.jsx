// pages/jobseeker/AppliedJobs.jsx
import { useEffect, useState } from "react";
import API  from "../../api/api";

export default function AppliedJobs() {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    API.get("/applications/me").then((res) => setApps(res.data));
  }, []);

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Applied Jobs</h1>

      {apps.map((a) => (
        <div key={a._id} className="bg-white p-4 rounded shadow mb-3">
          <h2>{a.jobId.title}</h2>
          <p>Status: <span className="font-semibold">{a.status}</span></p>
        </div>
      ))}
    </div>
  );
}