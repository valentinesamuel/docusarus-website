export const Highlight = ({ children, color }) => (
  <button
    style={{
      backgroundColor: color,
      borderRadius: "20px",
      color: "#fff",
      padding: "10px",
      cursor: "pointer",
      border: "none",
    }}
    onClick={() => {
      alert(`You clicked the color ${color} with label ${children}`);
    }}
  >
    {children}
  </button>
);
