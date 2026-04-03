
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import RecruiterSidebar from "../components/RecruiterSidebar";

export default function RecruiterLayout() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      
      <RecruiterSidebar />

      <div className="flex-1 flex flex-col">
        <Header />

        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}