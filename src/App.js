import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

import Hello from "./components/Hello";
import Student from "./components/Student";
import Clock from "./components/Clock";
import Timer from "./components/Timer";
import Calculator from "./components/Calculator";
import Card from "./components/Card";
import PageTitle from "./components/PageTitle";
import ChangeColor from "./components/ChangeColor";
import ToggleText from "./components/ToggleText";
import Effect from "./components/Effect";
import Display from "./components/Display";
import DisplayDetails from "./components/DisplayDetails";
import Page from "./components/Page";
import ReducerDemoExample from "./components/ReducerDemoExample";
import Array from "./components/Array";
import FetchDataJSN from "./components/FetchDataJSN";
import Counter from "./components/Counter";

function App() {
  return (
    // <><Student
    // s_name="Raj Mehta"
    // s_age="20"
    // s_course="iMCA"
    // s_semester="Fourth Semester" />
    <Router>

      <Header />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student" element={<Student />} />
        <Route path="/hello" element={<Hello />} />
        <Route path="/clock" element={<Clock />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/calculator" element={<Calculator />} />

        <Route path="/card" element={<Card />} />
        <Route path="/pagetitle" element={<PageTitle />} />
        <Route path="/changecolor" element={<ChangeColor />} />
        <Route path="/toggletext" element={<ToggleText />} />
        <Route path="/effect" element={<Effect />} />
        <Route path="/display" element={<Display />} />
        <Route path="/displaydetails" element={<DisplayDetails />} />
        <Route path="/page" element={<Page />} />
        <Route path="/reducer" element={<ReducerDemoExample />} />
        <Route path="/array" element={<Array />} />
        <Route path="/fetch" element={<FetchDataJSN />} />
      </Routes>

      <Footer />

    </Router>
  );
}

export default App;


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
