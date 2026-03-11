import React, { useEffect, useState } from "react";

function API() {
  const [userId, setUserId] = useState(1);
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(res => res.json())
      .then(data => setUser(data));
  }, [userId]);

  return (
    <div>
      <h2>User Details</h2>
      <p>Name: {user.name}</p>

      <button onClick={() => setUserId(userId + 1)}>
        Next User
      </button>
    </div>
  );
}
export default API;
