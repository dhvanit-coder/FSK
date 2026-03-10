import { useState } from "react";

function ChangeColor() {
  const [color, setColor] = useState("black");

  return (
    <div>
      <h2 style={{ color: color }}>Hello React</h2>

      <button ton onClick={() => setColor("red")}>
        Red
      </button>

      <button onClick={() => setColor("blue")}>
        Blue
      </button>
    </div>
  );
}

export default ChangeColor;
