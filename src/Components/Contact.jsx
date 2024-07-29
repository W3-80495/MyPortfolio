import { Typography } from "@mui/material";
import React from "react";

// import { Container } from './styles';

export default function Contact() {
  return (
    <div
      style={{
        display: "flex",
        marginTop: "550px",
        flexDirection: "column",
        alignItems: "center",
        height: "300px",
      }}
    >
      <Typography
        style={{ fontSize: "50px", fontWeight: "bold", color: "#088178" }}
      >
        Contact Me
      </Typography>
      <br />
      <br />
      <Typography sx={{ fontSize: "24px" }}>
      You can call me on{" "}
        <span style={{ color: "red", fontSize: "24px" }}>+918299144486</span>
      </Typography>
      <br />
      <Typography sx={{ fontSize: "24px" }}>
        You can send me email on{" "}
        <span style={{ color: "red", fontSize: "24px" }}>
          ankitinvaranasi@gmail.com
        </span>
      </Typography>
    </div>
  );
}
