import {useEffect} from "react"; 

function Effect(){ 
useEffect(()=>{ 
alert("Component loaded !"); 
},[]); 
return ( 
<h2>Hello There!</h2> 
); 
} 
export default Effect;
