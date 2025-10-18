import React from "react";

function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div style={{ marginBottom: "1rem", textAlign: "center" }}>
      <input
        type="text"
        placeholder="Search users..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        style={{
          padding: "0.5rem",
          width: "80%",
          maxWidth: "400px",
          borderRadius: "6px",
          border: "1px solid #ccc",
        }}
      />
    </div>
  );
}

export default SearchBar;
