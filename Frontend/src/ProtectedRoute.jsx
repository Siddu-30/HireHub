import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, role }) {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    return <Navigate to="/signin" replace />;
  }
 // Here replace is to prevents user from going back to protected page using back button
 
  if (role && user.role !== role) {
    return <Navigate to="/" replace />;
  }

  return children;
}