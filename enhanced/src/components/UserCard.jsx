import React from "react";

function UserCard({ user, onSelect }) {
  return (
    <div
      className="user-card"
      onClick={() => onSelect(user)}
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "1rem",
        cursor: "pointer",
        textAlign: "center",
        background: "#fff",
      }}
    >
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <small>{user.company?.name}</small>
    </div>
  );
}

export default UserCard;