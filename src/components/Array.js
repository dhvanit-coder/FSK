import { useEffect, useState } from "react";
import React from 'react'

function UseEffectArray() {
    const[names,setNames] = useState([]);

    useEffect(()=>{
        const names = ["Neha","kerishna","raj"];
        setNames(names);
    },[]);
  return (
    <div>
      <h2>Student Details</h2>
      <ul>
        {names.map((name)=>(
            <li>{name}</li>
        ))}
      </ul>
    </div>
  )
}
export default UseEffectArray; 
