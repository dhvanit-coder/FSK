import React, { useContext } from "react";
import UserContext from "../UserContext";

function Display() {
    const user = useContext(UserContext);

    return (
        <div>
            <h1>Name: {user.name}</h1>
            <p>Age: {user.age}</p>
            <p>City:{user.city}</p>
            <p>Address:{user.address}</p>
        </div>
    );
}
export default Display;
