import React from "react";
import MapView from "./MapView";

export default function UserDetails({ user, onBack }) {
  const lat = parseFloat(user.address?.geo?.lat || 0);
  const lng = parseFloat(user.address?.geo?.lng || 0);

  return (
    <div className="page user-details" style={{ textAlign: "center" }}>
      <button className="btn" onClick={onBack} style={{ marginBottom: "1rem" }}>
        ← Back
      </button>
      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "1rem",
          margin: "0 auto",
          maxWidth: "400px",
          background: "var(--card, #fff)",
          color: "var(--text, #000)",
        }}
      >
        <h2>{user.name}</h2>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Company:</strong> {user.company?.name}</p>
      </div>
      <div style={{ marginTop: "1rem" }}>
        <MapView lat={lat} lng={lng} />
      </div>
    </div>
  );
}
