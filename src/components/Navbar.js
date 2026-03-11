import { Link } from "react-router-dom";

function Navbar() {
  const navStyle = {
    display: "flex",
    gap: "10px",
    padding: "15px 20px",
    background: "rgba(255, 255, 255, 0.1)", 
    backdropFilter: "blur(10px)", 
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#333",
    fontSize: "14px",
    fontWeight: "500",
    padding: "8px 15px",
    borderRadius: "8px",
    backgroundColor: "#fff",
    border: "1px solid #eee",
    transition: "all 0.3s ease",
    boxShadow: "0 2px 4px rgba(0,0,0,0.05)"
  };

  

  return (
    <nav style={navStyle}>
      {[
        { to: "/", label: "Home" },
        { to: "/hello", label: "Hello" },
        { to: "/clock", label: "Clock" },
        { to: "/timer", label: "Timer" },
        { to: "/counter", label: "Counter" },
        { to: "/calculator", label: "Calculator" },
        { to: "/student", label: "Student" },
        { to: "/pagetitle", label: "PageTitle" },
        { to: "/changecolor", label: "ChangeColor" },
        { to: "/toggletext", label: "ToggleText" },
        { to: "/effect", label: "Effect" },
        { to: "/display", label: "Display" },
        { to: "/api", label: "API" },
        { to: "/theme", label: "Theme" },
        { to: "/reducer", label: "Reducer" },
        { to: "/array", label: "Array" },
        { to: "/fetch", label: "FetchData" },
      ].map((item) => (
        <Link 
          key={item.to} 
          to={item.to} 
          style={linkStyle}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#004e92";
            e.target.style.color = "#fff";
            e.target.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#fff";
            e.target.style.color = "#333";
            e.target.style.transform = "translateY(0)";
          }}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

export default Navbar;