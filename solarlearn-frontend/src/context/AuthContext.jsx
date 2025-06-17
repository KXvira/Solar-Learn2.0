import { createContext, useContext, useState } from "react";

// Simulated users
const fakeUsers = {
  teacher: { username: "teacher1", role: "Teacher" },
  student: { username: "student1", role: "Student" },
  admin: { username: "admin1", role: "Admin" },
  guest: { username: "guest", role: "Guest" },
};

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(fakeUsers.guest);

  const loginAs = (role) => {
    setUser(fakeUsers[role.toLowerCase()] || fakeUsers.guest);
  };

  const logout = () => {
    setUser(fakeUsers.guest);
  };

  return (
    <AuthContext.Provider value={{ user, loginAs, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
