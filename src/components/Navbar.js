import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div style={{display:"flex",gap:"15px",padding:"10px",background:"#ddd",flexWrap:"wrap"}}>

      <Link to="/">Home</Link>
      <Link to="/hello">Hello</Link>
      <Link to="/clock">Clock</Link>
      <Link to="/timer">Timer</Link>
      <Link to="/counter">Counter</Link>
      <Link to="/calculator">Calculator</Link>
      <Link to="/student">Student</Link>
      <Link to="/pagetitle">PageTitle</Link>
      <Link to="/changecolor">ChangeColor</Link>
      <Link to="/toggletext">ToggleText</Link>
      <Link to="/effect">Effect</Link>

      <Link to="/display">Display</Link>
      <Link to="/displaydetails">DisplayDetails</Link>
      <Link to="/page">Page</Link>

      <Link to="/reducer">Reducer</Link>
      <Link to="/array">Array</Link>
      <Link to="/fetch">FetchData</Link>

    </div>
  );
}

export default Navbar;