
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import JobseekerSidebar from "../components/JobseekerSidebar";

export default function JobSeekerLayout() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      
      <JobseekerSidebar />

      <div className="flex-1 flex flex-col">
        <Header />

        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}