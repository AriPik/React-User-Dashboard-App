import React, { useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchUsers } from "./store/usersSlice";
import Dashboard from "./pages/Dashboard";
import UserDetails from "./pages/UserDetails";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="app-root">
      <header className="app-header">
        <Link to="/" className="brand">
          React User Dashboard (Redux)
        </Link>
      </header>

      <main className="app-main">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/user/:id" element={<UserDetails />} />
        </Routes>
      </main>

      <footer className="app-footer">© 2025 React User Dashboard</footer>
    </div>
  );
}
