// import React from "react";
// import { useNavigate } from "react-router-dom";

// export default function UserCard({ user }) {
//   const navigate = useNavigate();

//   return (
//     <div
//       className="user-card"
//       onClick={() => navigate(`/user/${user.id}`)}  /* 👈 navigate directly */
//       style={{
//         border: "1px solid #ccc",
//         borderRadius: "8px",
//         padding: "1rem",
//         cursor: "pointer",
//         textAlign: "center",
//         background: "var(--card, #fff)",
//       }}
//     >
//       <h3>{user.name}</h3>
//       <p>{user.email}</p>
//       <p>{user.phone}</p>
//       <small>{user.company?.name}</small>
//     </div>
//   );
// }

import React from "react";
import { Link } from "react-router-dom";

export default function UserCard({ user }) {
  return (
    <Link
      to={`/user/${user.id}`}
      className="user-card"
      style={{
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <small>{user.company?.name}</small>
    </Link>
  );
}
