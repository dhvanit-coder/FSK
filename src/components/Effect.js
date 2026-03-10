import { useEffect, useState } from "react";

function Effect() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <ul>
        {data.map((d) => (
          <li key={d.id}>{d.username}</li> 
        ))}
      </ul>
    </div>
  );
}

export default Effect;