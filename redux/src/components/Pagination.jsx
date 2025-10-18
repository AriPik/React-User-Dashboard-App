import React from "react";

export default function Pagination({ page, pages, setPage }) {
  if (pages <= 1) return null;

  return (
    <div
      className="pagination"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        marginTop: "20px",
      }}
    >
      <button
        className="btn"
        onClick={() => setPage((p) => Math.max(1, p - 1))}
        disabled={page === 1}
      >
        Prev
      </button>

      <span>
        Page <strong>{page}</strong> of <strong>{pages}</strong>
      </span>

      <button
        className="btn"
        onClick={() => setPage((p) => Math.min(pages, p + 1))}
        disabled={page === pages}
      >
        Next
      </button>
    </div>
  );
}
