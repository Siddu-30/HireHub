import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="max-w-4xl mx-auto bg-white shadow rounded-lg p-8">

        <h1 className="text-3xl font-bold mb-6 text-center">
          About HireHub
        </h1>

        <p className="text-gray-700 mb-4">
          HireHub is a modern job hiring platform built to connect job seekers
          with recruiters in a simple and efficient way.
        </p>

        <p className="text-gray-700 mb-4">
          Whether you're looking for your dream job or searching for the perfect
          candidate, HireHub makes the process seamless and fast.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          🚀 What We Offer
        </h2>

        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Easy job search and application</li>
          <li>Quick job posting for recruiters</li>
          <li>Role-based dashboards</li>
          <li>Real-time application tracking</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          🎯 Our Mission
        </h2>

        <p className="text-gray-700">
          To simplify hiring and job searching by building a platform that is
          fast, reliable, and user-friendly.
        </p>

      </div>
    </div>
  );
}