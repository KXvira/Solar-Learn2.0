import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const { loginAs } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (role) => {
    loginAs(role);
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h2 className="text-2xl font-bold mb-6">Select Role to Login</h2>
      <div className="space-y-4">
        {["Teacher", "Student", "Admin", "Guest"].map((role) => (
          <button
            key={role}
            onClick={() => handleLogin(role)}
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Login as {role}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Login;
