import { useAuth } from "../context/AuthContext";
import { useState } from "react";

const dummyUsers = [
  { id: 1, username: "teacher1", role: "Teacher" },
  { id: 2, username: "student1", role: "Student" },
  { id: 3, username: "guest", role: "Guest" },
];

function AdminPanel() {
  const { user } = useAuth();
  const [users, setUsers] = useState(dummyUsers);
  const [form, setForm] = useState({ username: "", role: "Student" });

  const handleAddUser = (e) => {
    e.preventDefault();
    const newUser = {
      id: users.length + 1,
      username: form.username,
      role: form.role,
    };
    setUsers([...users, newUser]);
    setForm({ username: "", role: "Student" });
  };

  const handleDelete = (id) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  if (user.role !== "Admin") {
    return <p className="p-6 text-red-600">Access denied: Admins only.</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>

      {/* Add User Form */}
      <form
        onSubmit={handleAddUser}
        className="bg-white p-4 shadow rounded mb-6 space-y-3"
      >
        <h2 className="text-lg font-semibold">Add New User</h2>
        <input
          type="text"
          placeholder="Username"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          className="w-full p-2 border rounded"
          required
        />
        <select
          value={form.role}
          onChange={(e) => setForm({ ...form, role: e.target.value })}
          className="w-full p-2 border rounded"
        >
          <option>Student</option>
          <option>Teacher</option>
          <option>Admin</option>
          <option>Guest</option>
        </select>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add User
        </button>
      </form>

      {/* User Table */}
      <div className="bg-white p-4 shadow rounded">
        <h2 className="text-lg font-semibold mb-2">Current Users</h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border">ID</th>
              <th className="p-2 border">Username</th>
              <th className="p-2 border">Role</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id}>
                <td className="p-2 border">{u.id}</td>
                <td className="p-2 border">{u.username}</td>
                <td className="p-2 border">{u.role}</td>
                <td className="p-2 border">
                  <button
                    onClick={() => handleDelete(u.id)}
                    className="text-red-600 hover:underline text-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminPanel;
