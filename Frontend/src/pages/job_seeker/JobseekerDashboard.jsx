import { useEffect, useState } from "react";
import API from "../../api/api";

function JobseekerDashboard() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    API.get("/applications/my-applications")
      .then((res) => setApplications(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2>My Applications</h2>

      {applications.length === 0 ? (
        <p>No applications yet.</p>
      ) : (
        applications.map((app) => (
          <div key={app._id}>
            <h3>{app.jobId?.title}</h3>
            <p>{app.jobId?.company}</p>
            <p>Status: {app.status}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default JobseekerDashboard;