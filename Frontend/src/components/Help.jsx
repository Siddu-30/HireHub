import React from "react";

export default function Help() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="max-w-4xl mx-auto bg-white shadow rounded-lg p-8">

        <h1 className="text-3xl font-bold mb-6 text-center">
          Help & Support
        </h1>

        {/* 👤 Job Seeker Help */}
        <h2 className="text-xl font-semibold mb-3">
          👨‍🎓 For Job Seekers
        </h2>

        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
          <li>Create an account and login</li>
          <li>Browse available jobs</li>
          <li>Apply to jobs with one click</li>
          <li>Track your application status in dashboard</li>
        </ul>

        {/* 👨‍💼 Recruiter Help */}
        <h2 className="text-xl font-semibold mb-3">
          👨‍💼 For Recruiters
        </h2>

        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
          <li>Login as a recruiter</li>
          <li>Post new job openings</li>
          <li>Manage your posted jobs</li>
          <li>View and manage applicants</li>
        </ul>

        {/* ❓ FAQ */}
        <h2 className="text-xl font-semibold mb-3">
          ❓ Frequently Asked Questions
        </h2>

        <div className="space-y-4 text-gray-700">

          <div>
            <p className="font-semibold">How do I apply for a job?</p>
            <p>Go to the Jobs page and click on Apply.</p>
          </div>

          <div>
            <p className="font-semibold">How do I post a job?</p>
            <p>Login as recruiter and go to Post Job page.</p>
          </div>

          <div>
            <p className="font-semibold">Is HireHub free to use?</p>
            <p>Yes, it is completely free for both job seekers and recruiters.</p>
          </div>

        </div>

        {/* 📩 Contact */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-2">
            Still need help?
          </p>
          <p className="font-semibold">
            Contact us at: support@hirehub.com
          </p>
        </div>

      </div>
    </div>
  );
}