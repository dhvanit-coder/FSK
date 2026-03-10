import { useContext } from "react";
import ThemeContext from "../ThemeContext";

function Page() {
  const theme = useContext(ThemeContext);

  return (
    <div style={{
            backgroundColor: theme === "dark" ?"black" : "white",
      color: theme === "dark" ? "white" : "black",
      padding: "20px"

    }}>
      Current Theme: {theme}
    </div>
  );
}

export default Page;
