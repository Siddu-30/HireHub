// recruiter/PostJob.jsx
import { useState } from "react";
import  API  from "../../api/api";

export default function PostJob() {

  const initialState = {
    title: "",
    description: "",
    company: "",
    location: "",
    salary: "",
    jobType: ""
  };

  const [form, setForm] = useState(initialState);

  const handleSubmit = async (e) => {
    e.preventDefault();
   try {
    await API.post("/jobs", form);
    alert("Job posted!");
    setForm(initialState);
  } catch(err) {
    alert("Failed: " + (err.response?.data?.message || err.message));
  }
  };

  return (
    <div className="flex flex-col gap-4">
      <input 
      className="border border-black-500 w-100 rounded font-semibold text-xl p-3"
      value={form.title} 
      placeholder="Title" onChange={(e) => setForm({...form, title: e.target.value})} />
      <input 
      className="border border-black-500 w-100 rounded font-semibold text-xl p-3"
      value={form.description} 
      placeholder="Description" onChange={(e) => setForm({...form, description: e.target.value})} />
      <input 
      className="border border-black-500 w-100 rounded font-semibold text-xl p-3"   
      value={form.company}    
      placeholder="Company" onChange={(e) => setForm({...form, company: e.target.value})} />
      <input 
      className="border border-black-500 w-100 rounded font-semibold text-xl p-3"
      value={form.location} 
      placeholder="Location" onChange={(e) => setForm({...form, location: e.target.value})} />
      <input 
      className="border border-black-500 w-100 rounded font-semibold text-xl p-3"
      value={form.salary} 
      placeholder="Salary" onChange={(e) => setForm({...form, salary: e.target.value})} />
      <input 
      className="border border-black-500 w-100 rounded font-semibold text-xl p-3"
      value={form.jobType} 
      placeholder="Job-Type" onChange={(e) => setForm({...form, jobType: e.target.value})} />
      <button 
      className="border border-black-500 w-50 rounded font-semibold text-xl p-3 cursor-pointer bg-blue-300"
      onClick={handleSubmit}>Post</button>
    </div>
  );
}