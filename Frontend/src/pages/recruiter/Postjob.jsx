// recruiter/PostJob.jsx
import { useState } from "react";
import  API  from "../../api/api";

export default function PostJob() {
  const [form, setForm] = useState({});

  const handleSubmit = async () => {
    await API.post("/jobs", form);
    alert("Job posted");
  };

  return (
    <div>
      <input placeholder="Title" onChange={(e) => setForm({...form, title: e.target.value})} />
      <input placeholder="Company" onChange={(e) => setForm({...form, company: e.target.value})} />
      <button onClick={handleSubmit}>Post</button>
    </div>
  );
}