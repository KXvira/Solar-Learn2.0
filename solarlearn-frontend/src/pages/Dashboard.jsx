import { useAuth } from "../context/AuthContext";

function Dashboard() {
  const { user } = useAuth();
  const { role, username } = user;

  const renderContent = () => {
    switch (role) {
      case "Teacher":
        return (
          <>
            <h2 className="text-xl font-bold mb-2">Teacher Dashboard</h2>
            <ul className="list-disc ml-5 space-y-1">
              <li>Create and manage curriculum</li>
              <li>Upload learning materials</li>
              <li>Generate or assign quizzes</li>
            </ul>
          </>
        );
      case "Student":
        return (
          <>
            <h2 className="text-xl font-bold mb-2">Student Dashboard</h2>
            <ul className="list-disc ml-5 space-y-1">
              <li>Browse library content</li>
              <li>View assigned curriculum</li>
              <li>Take offline quizzes</li>
            </ul>
          </>
        );
      case "Admin":
        return (
          <>
            <h2 className="text-xl font-bold mb-2">Admin Dashboard</h2>
            <ul className="list-disc ml-5 space-y-1">
              <li>Manage users & roles</li>
              <li>Oversee platform content</li>
              <li>View usage reports</li>
            </ul>
          </>
        );
      case "Guest":
        return (
          <>
            <h2 className="text-xl font-bold mb-2">Guest Dashboard</h2>
            <p className="text-gray-700">
              You are currently browsing as a guest.
            </p>
            <p className="text-gray-700 mt-2">
              Please log in to access full features.
            </p>
          </>
        );
      default:
        return <p>Unknown role.</p>;
    }
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">
        Welcome, {username} 👋
      </h1>
      <div className="bg-white shadow p-6 rounded-lg">{renderContent()}</div>
    </div>
  );
}

export default Dashboard;
