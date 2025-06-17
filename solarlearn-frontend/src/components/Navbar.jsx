import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const role = user.role;

  const commonLinks = [
    { label: "Home", path: "/" },
    { label: "Dashboard", path: "/dashboard" },
  ];

  const roleBasedLinks = {
    Teacher: [
      { label: "My Curriculum", path: "/curriculum" },
      { label: "Create Quiz", path: "/quizzes" },
    ],
    Student: [
      { label: "Library", path: "/library" },
      { label: "Take Quiz", path: "/quizzes" },
    ],
    Admin: [
      { label: "Admin Panel", path: "/admin" },
      { label: "Manage Users", path: "/admin/users" },
    ],
    Guest: [{ label: "Explore Library", path: "/library" }],
  };

  const linksToShow = [...commonLinks, ...(roleBasedLinks[role] || [])];

  return (
    <nav className="bg-white shadow-sm p-4 flex justify-between items-center">
      <div className="text-xl font-semibold text-blue-600">SolarLearn</div>
      <div className="flex gap-4">
        {linksToShow.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className="text-gray-700 hover:text-blue-500 font-medium"
          >
            {link.label}
          </Link>
        ))}
        <button
          onClick={handleLogout}
          className="text-red-600 hover:underline ml-4"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
