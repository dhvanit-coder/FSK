
import { useState } from "react";

function ToggleText() {
  const [showText, setShowText] = useState(false);

  return (
    <div>
      <button onClick={() => setShowText(!showText)}>
        {showText ? "Hide" : "Show"} Text
      </button>

      {showText && <p>Hello! Welcome to React useState.</p>}
    </div>
  );
}

export default ToggleText;
