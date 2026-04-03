import { NavLink } from "react-router-dom";

export default function RecruiterSidebar() {
  const linkClass = ({ isActive }) =>
    isActive
  ? "block p-2 border-l-4 border-blue-500 bg-blue-100"
  : "block p-2 hover:bg-gray-200";

  return (
    <div className="w-64 bg-white shadow p-4">
      <h2 className="text-xl font-bold mb-6">Recruiter</h2>

      <nav className="space-y-3">
        <NavLink to="/recruiter/dashboard" className={linkClass}>
          Dashboard
        </NavLink>

        <NavLink to="/recruiter/jobs" className={linkClass}>
          My Jobs
        </NavLink>

        <NavLink to="/recruiter/post-job" className={linkClass}>
          Post Job
        </NavLink>
      </nav>
    </div>
  );
}