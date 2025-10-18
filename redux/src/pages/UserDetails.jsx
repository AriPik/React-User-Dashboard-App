
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import MapView from "../components/MapView";

export default function UserDetails() {
  const { id } = useParams();
  const userFromStore = useSelector((state) =>
    state.users.list.find((u) => String(u.id) === String(id))
  );
  const [user, setUser] = useState(userFromStore || null);
  const [loading, setLoading] = useState(!userFromStore);

  // Fallback fetch if Redux doesn’t have the user (e.g., refresh)
  useEffect(() => {
    if (!user) {
      setLoading(true);
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setUser(data);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [id, user]);

  if (loading) return <p>Loading user details...</p>;
  if (!user) return <p>User not found.</p>;

  return (
    <div className="page user-details">
      <div className="details-card">
        <h2>{user.name}</h2>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Phone:</strong> {user.phone}
        </p>
        <p>
          <strong>Website:</strong> {user.website}
        </p>
        <p>
          <strong>Company:</strong> {user.company?.name}
        </p>
        <p>
          <strong>City:</strong> {user.address?.city}
        </p>

        {user.address?.geo && (
          <div style={{ marginTop: "20px" }}>
            <MapView
              lat={parseFloat(user.address.geo.lat)}
              lng={parseFloat(user.address.geo.lng)}
            />
          </div>
        )}

        <div style={{ marginTop: "20px" }}>
          <Link to="/" className="btn">
            Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
