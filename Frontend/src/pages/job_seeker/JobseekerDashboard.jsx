import { useEffect, useState } from "react";
import API from "../../api/api";

function JobseekerDashboard() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    API.get("/application/me")
      .then((res) => setApplications(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="flex flex-col gap-3">
      <h2 className="font-bold text-2xl" >My Applications</h2>

      {applications.length === 0 ? (
        <p>No applications yet.</p>
      ) : (
        applications.map((app) => (
          <div key={app._id} className="flex font-semibold text-lg gap-3">
            <h3>{app.jobId?.title} -</h3>
            <p>{app.jobId?.company} -</p>
            <p>Status: {app.status}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default JobseekerDashboard;