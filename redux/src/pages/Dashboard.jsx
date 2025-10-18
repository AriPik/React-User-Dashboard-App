import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, addUser } from "../store/usersSlice";
import UserCard from "../components/UserCard";
import SearchBar from "../components/SearchBar";
import UserForm from "../components/UserForm";
import Pagination from "../components/Pagination";

export default function Dashboard() {
  const dispatch = useDispatch();
  const { list: users, loading, error } = useSelector((state) => state.users);

  const [query, setQuery] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [page, setPage] = useState(1);
  const pageSize = 6;

  // Fetch users once on mount
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  // Filter users by search query
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return users || [];
    return (users || []).filter((u) => u.name.toLowerCase().includes(q));
  }, [users, query]);

  const total = filtered.length;
  const pages = Math.max(1, Math.ceil(total / pageSize));
  const current = filtered.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div className="page dashboard">
      <div className="controls">
        <SearchBar
          value={query}
          onChange={setQuery}
          placeholder="Search by name..."
        />
        <button className="btn primary" onClick={() => setShowForm((s) => !s)}>
          {showForm ? "Close" : "Create New User"}
        </button>
      </div>

      {showForm && (
        <div className="form-wrap">
          <UserForm
            onSubmit={(data) => {
              dispatch(addUser(data));
              setShowForm(false);
            }}
          />
        </div>
      )}

      {/* Display loading, error, or user grid */}
      {loading && <p>Loading users...</p>}
      {error && <p className="error">Error: {error}</p>}

      <div className="grid users-grid">
        {Array.isArray(current) && current.length > 0 ? (
          current.map((user) => <UserCard key={user.id} user={user} />)
        ) : !loading && !error ? (
          <p>No users found.</p>
        ) : null}
      </div>

      <Pagination page={page} setPage={setPage} pages={pages} />
    </div>
  );
}
