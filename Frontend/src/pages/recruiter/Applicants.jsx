import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../api/api"; 

export default function Applicants() {
  const { id } = useParams(); // jobId from URL
  const [applicants, setApplicants] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchApplicants = async () => {
    try {
      const res = await API.get(`/applications/job/${id}`);
      setApplicants(res.data);
    } catch (err) {
      console.error("Error fetching applicants:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApplicants();
  }, [id]);

  if (loading) {
    return <p className="text-center mt-10">Loading applicants...</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Applicants</h1>

      {applicants.length === 0 ? (
        <p>No applicants yet.</p>
      ) : (
        <div className="space-y-4">
          {applicants.map((app) => (
            <div
              key={app._id}
              className="p-4 bg-white shadow rounded-lg flex justify-between items-center"
            >
              <div>
                <p className="font-semibold">
                  {app.userId?.name || "No Name"}
                </p>
                <p className="text-gray-500 text-sm">
                  {app.userId?.email}
                </p>
              </div>

              <div>
                <span className="px-3 py-1 text-sm rounded bg-blue-100 text-blue-600">
                  {app.status || "Applied"}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}