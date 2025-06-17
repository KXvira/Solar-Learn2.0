import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Library from "../pages/Library";
import Curriculum from "../pages/Curriculum";
import Quizzes from "../pages/Quizzes";
import AdminPanel from "../pages/AdminPanel";

export default function AppRoutes() {
  const { user } = useAuth();

  const ProtectedRoute = ({ role, children }) => {
    if (user.role !== role) return <Navigate to="/" />;
    return children;
  };

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/library" element={<Library />} />
      <Route
        path="/curriculum"
        element={
          <ProtectedRoute role="Teacher">
            <Curriculum />
          </ProtectedRoute>
        }
      />
      <Route path="/quizzes" element={<Quizzes />} />
      <Route
        path="/admin"
        element={
          <ProtectedRoute role="Admin">
            <AdminPanel />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
