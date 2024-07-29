import { Typography } from '@mui/material';
import React from 'react';
import "./Skills.css"

import html from "../Images/html5.png"
import css from "../Images/css.png"
import js from "../Images/js.png"
import java from "../Images/java.webp"
import spring from "../Images/springboot.jpeg"
import jquery from "../Images/jQuery.png"
import reactjs from "../Images/react.png"
import reactnative from "../Images/reactnative.webp"
import nodejs from "../Images/node.png"
import express from "../Images/express.png"
import linux from "../Images/linux.webp"
import mysql from "../Images/MySQL.png"
import android from "../Images/android.webp"
import swift from "../Images/swift.jpg"
import php from "../Images/php.png"

// import { Container } from './styles';

export default function Skills() {

  const styles = {
    gridDiv: {
      display: "flex", alignItems: "center", flexDirection: "column", height: "100px", marginTop: "400px"
    },
  }

  return (
    <div style={styles.gridDiv}>

      <Typography sx={{ fontSize: "50px", fontWeight: "bold", color: "#088178" }}>Skills</Typography>
      <br />
      <br />

      <div style={{ display: "grid", gridTemplateColumns: "auto auto auto auto auto", gap: "80px", marginTop: "20px" }}>

        <div>
          <img src={html} alt="html" className="image" />
        </div>

        <div>
          <img src={css} alt="css" className="image" />
        </div>

        <div>
          <img src={js} alt="js" className="image" />
        </div>

        <div>
          <img src={reactjs} alt="reactjs" className="image" />
        </div>

        <div>
          <img src={reactnative} alt="reactnative" className="image" />
        </div>

        <div>
          <img src={nodejs} alt="nodejs" className="image" />
        </div>

        <div>
          <img src={express} alt="express" className="image" />
        </div>

        <div>
          <img src={mysql} alt="mysql" className="image" />
        </div>

        <div>
          <img src={java} alt="java" className="image" />
        </div>

        <div>
          <img src={spring} alt="spring" className="image" />
        </div>

        <div>
          <img src={jquery} alt="jquery" className="image" />
        </div>

        <div>
          <img src={php} alt="php" className="image" />
        </div>

        <div>
          <img src={linux} alt="linux" className="image" />
        </div>

        <div>
          <img src={android} alt="android" className="image" />
        </div>

        <div>
          <img src={swift} alt="swift" className="image" />
        </div>

      </div>

    </div>
  );
}
