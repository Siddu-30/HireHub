// recruiter/PostJob.jsx
import { useState } from "react";
import  API  from "../../api/api";

export default function PostJob() {
  const [form, setForm] = useState({});

  const handleSubmit = async () => {
   try {
    await API.post("/jobs", form);
    alert("Job posted!");
  } catch(err) {
    alert("Failed: " + (err.response?.data?.message || err.message));
  }
  };

  return (
    <div>
      <input placeholder="Title" onChange={(e) => setForm({...form, title: e.target.value})} />
      <input placeholder="Description" onChange={(e) => setForm({...form, description: e.target.value})} />
      <input placeholder="Company" onChange={(e) => setForm({...form, company: e.target.value})} />
      <input placeholder="Location" onChange={(e) => setForm({...form, location: e.target.value})} />
      <input placeholder="Salary" onChange={(e) => setForm({...form, salary: e.target.value})} />
      <input placeholder="Job-Type" onChange={(e) => setForm({...form, jobType: e.target.value})} />
      <button onClick={handleSubmit}>Post</button>
    </div>
  );
}