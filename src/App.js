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
import API from "./components/API";
import Theme from "./components/Theme";
import ReducerDemoExample from "./components/ReducerDemoExample";
import Array from "./components/Array";
import FetchDataJSN from "./components/FetchDataJSN";
import Counter from "./components/Counter";

import UserContext from "./UserContext";
import ThemeContext from "./ThemeContext";

function App() {

  const appStyle = {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh"
  };

  const contentStyle = {
    flex: 1
  };

  const userInfo = {
    name: "Krishna",
    age: 39,
    city: "Ahmedabad",
    address: "Navrangpura"
  };

  const theme = "dark";

  return (
    <Router>
      <ThemeContext.Provider value={{ theme }}>
        <UserContext.Provider value={userInfo}>

          <div style={appStyle}>

            <Header />
            <Navbar />

            <div style={contentStyle}>

              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/hello" element={<Hello />} />
                <Route path="/clock" element={<Clock />} />
                <Route path="/timer" element={<Timer />} />
                <Route path="/counter" element={<Counter />} />
                <Route path="/calculator" element={<Calculator />} />

                <Route
                  path="/student"
                  element={
                    <Student
                      s_name="Raj Mehta"
                      s_age="20"
                      s_course="iMCA"
                      s_semester="Fourth Semester"
                    />
                  }
                />

                <Route path="/card" element={<Card />} />
                <Route path="/pagetitle" element={<PageTitle />} />
                <Route path="/changecolor" element={<ChangeColor />} />
                <Route path="/toggletext" element={<ToggleText />} />
                <Route path="/effect" element={<Effect />} />
                <Route path="/display" element={<Display />} />
                <Route path="/api" element={<API />} />
                <Route path="/theme" element={<Theme />} />
                <Route path="/reducer" element={<ReducerDemoExample />} />
                <Route path="/array" element={<Array />} />
                <Route path="/fetch" element={<FetchDataJSN />} />
              </Routes>

            </div>

            <Footer />

          </div>

        </UserContext.Provider>
      </ThemeContext.Provider>
    </Router>
  );
}

export default App;