import { useContext } from "react";
import ThemeContext from "../ThemeContext";

function Page() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: theme === "dark" ? "black" : "white",
        color: theme === "dark" ? "white" : "black",
        padding: "20px",
        minHeight: "10vh"
      }}
    >
      <h2>Current Theme: {theme}</h2>
    </div>
  );
}

export default Page;
