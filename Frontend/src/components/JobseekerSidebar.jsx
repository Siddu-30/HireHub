import { NavLink } from "react-router-dom";

export default function JobSeekerSidebar() {
  const linkClass = ({ isActive }) =>
    isActive
  ? "block p-2 border-l-4 border-blue-500 bg-blue-100"
  : "block p-2 hover:bg-gray-200";

  return (
    <div className="w-64 bg-white shadow p-4">
      <h2 className="text-xl font-bold mb-6">Job Seeker</h2>

      <nav className="space-y-3">
        <NavLink to="/jobs" end className={linkClass}>
          Browse Jobs
        </NavLink>

        <NavLink to="/jobseeker/dashboard" className={linkClass}>
          Dashboard
        </NavLink>

        <NavLink to="/jobseeker/applied" className={linkClass}>
          Applied Jobs
        </NavLink>
      </nav>
    </div>
  );
}