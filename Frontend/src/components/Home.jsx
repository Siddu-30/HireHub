import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";

export default function Home() {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    API.get("/jobs")
      .then((res) => setJobs(res.data.jobs.slice(0, 6)))// show few jobs
      .catch((err) => console.error(err))
  }, []);

  return (
    <div className="bg-gray-50">

      {/* 🔥 HERO SECTION */}
      <section className="text-center py-20 px-4 bg-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Find Your Dream Job or Hire Talent
        </h1>
        <p className="text-gray-600 mb-6">
          HireHub connects job seekers with top recruiters.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <button
            onClick={() => navigate("/signup")}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Get Started
          </button>

          <button
            onClick={() => navigate("/jobs")}
            className="border px-6 py-2 rounded-lg hover:bg-gray-100"
          >
            Browse Jobs
          </button>
        </div>
      </section>

      {/* 👥 ROLE SELECTION */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-8">
          Choose Your Path
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          
          <div className="p-6 bg-white shadow rounded-lg">
            <h3 className="text-xl font-bold mb-2">Job Seeker</h3>
            <p className="text-gray-600 mb-4">
              Find jobs and apply easily.
            </p>
            <button
              onClick={() => navigate("/jobs")}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Browse Jobs
            </button>
          </div>

          <div className="p-6 bg-white shadow rounded-lg">
            <h3 className="text-xl font-bold mb-2">Recruiter</h3>
            <p className="text-gray-600 mb-4">
              Post jobs and find candidates.
            </p>
            <button
              onClick={() => navigate("/signin")}
              className="bg-purple-500 text-white px-4 py-2 rounded"
            >
              Post a Job
            </button>
          </div>

        </div>
      </section>

      {/* 💼 FEATURED JOBS */}
      <section className="py-16 px-6 bg-gray-100">
        <h2 className="text-2xl font-semibold text-center mb-10">
          Featured Jobs
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {jobs.map((job) => (
            <div
              key={job._id}
              className="p-4 bg-white shadow rounded-lg"
            >
              <h3 className="font-bold text-lg">{job.title}</h3>
              <p className="text-gray-600">{job.company}</p>

              <button
                onClick={() => navigate("/jobs")}
                className="mt-3 text-blue-600"
              >
                View Details →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 🚀 FEATURES */}
      <section className="py-16 px-6 text-center bg-white">
        <h2 className="text-2xl font-semibold mb-10">
          Why Choose HireHub?
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          
          <div className="p-4">
            <h3 className="font-bold mb-2">Easy Job Search</h3>
            <p className="text-gray-600">
              Find jobs quickly with simple filters.
            </p>
          </div>

          <div className="p-4">
            <h3 className="font-bold mb-2">One-Click Apply</h3>
            <p className="text-gray-600">
              Apply to jobs instantly.
            </p>
          </div>

          <div className="p-4">
            <h3 className="font-bold mb-2">Manage Applications</h3>
            <p className="text-gray-600">
              Track your job applications easily.
            </p>
          </div>

        </div>
      </section>

      {/* 🎯 CTA */}
      <section className="py-16 px-6 text-center bg-blue-600 text-white">
        <h2 className="text-2xl font-bold mb-4">
          Start Your Journey Today
        </h2>
        <button
          onClick={() => navigate("/signup")}
          className="bg-white text-blue-600 px-6 py-2 rounded-lg"
        >
          Join Now
        </button>
      </section>

    </div>
  );
}