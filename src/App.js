import React from "react";
import Hero from "./routes/Heropic";
import Home from "./routes/Home";
import About from "./routes/About";
import Skill from "./routes/Skill";
import Project from "./routes/Project";
import Contact from "./routes/Contact";
import { Route,  Routes } from "react-router";
import Register from "./routes/Register";
import SignUp from "./components/SignUp";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
};

export default App;
