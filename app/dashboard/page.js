"use client";

import { useEffect, useState } from "react";
import ProtectedRoute from "@/app/components/ProtectedRoute";

export default function DashboardPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("/api/users");
        console.log(users);
        if (!res.ok) {
          throw new Error("Failed to fetch users.");
        }
        const data = await res.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <ProtectedRoute>
      <div className="container mt-5">
        <h2 className="mb-4">Dashboard</h2>
        <h4>User List</h4>
        {users.length === 0 ? (
          <p>No users found.</p>
        ) : (
          <ul className="list-group">
            {users.map((user) => (
              <li key={user._id} className="list-group-item">
                <strong>Name:</strong> {user.name} <br />
                <strong>Email:</strong> {user.email} <br />
                <strong>Phone:</strong> {user.number}
              </li>
            ))}
          </ul>
        )}
      </div>
    </ProtectedRoute>
  );
}
