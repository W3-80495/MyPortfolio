import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import ButtonAppBar from "./Components/ButtonAppBar";
import Intro from "./Components/Intro";
import { Container } from "@mui/material";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <ButtonAppBar />
    <Container>
      <div id="intro" style={{padding: "10px"}}>
        <Intro />
      </div>
      <div id="about" style={{padding: "10px"}}>
        <About />
      </div>
      <div id="skills" style={{padding: "10px"}}>
        <Skills />
      </div>
      <div id="contact" style={{padding: "10px"}}>
        <Contact />
      </div>
    </Container>
  </>
);

reportWebVitals();
