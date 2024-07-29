import React from "react";
import { makeStyles } from "@mui/styles";
import { AppBar, Toolbar, Typography, Button, Link } from "@mui/material";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    // cursor: 'pointer',
    // color: 'white',
  },
  button: {
    // color: 'white',
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        sx={{ backgroundColor: "black", padding: "3px" }}
        position="static"
        className={classes.appBar}
      >
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            <a
              href="/"
              style={{
                textDecoration: "none",
                color: "inherit",
                fontWeight: "bold",
              }}
            >
              Portfolio
            </a>
          </Typography>
          <Link href='#intro'
            sx={{
              "&:hover": {
                textShadow: "0px 0px 30px white",
                fontWeight: "bold",
                color: "#088178",
              },
              fontSize: "20px",
              textTransform: "none",
              marginLeft: "5px",
              marginRight: "10px",
              textDecoration: 'none'
            }}
            color="inherit"
            // className={classes.button}
          >
            Home
          </Link>
          <Link href='#about'
            sx={{
              "&:hover": {
                textShadow: "0px 0px 30px white",
                fontWeight: "bold",
                color: "#088178",
              },
              fontSize: "20px",
              textTransform: "none",
              marginLeft: "5px",
              marginRight: "10px",
              textDecoration: 'none'
            }}
            color="inherit"
          >
            About
          </Link>
          <Link href='#skills'
            sx={{
              "&:hover": {
                textShadow: "0px 0px 30px white",
                fontWeight: "bold",
                color: "#088178",
              },
              fontSize: "20px",
              textTransform: "none",
              marginLeft: "5px",
              marginRight: "10px",
              textDecoration: 'none'
            }}
            color="inherit"
            // className={classes.button}
          >
            Skills
          </Link>
          {/* <Link
            sx={{
              "&:hover": {
                textShadow: "0px 0px 30px white",
                fontWeight: "bold",
                color: "#088178",
              },
              fontSize: "20px",
              textTransform: "none",
              marginLeft: "5px",
              marginRight: "10px",
              textDecoration: 'none'
            }}
            color="inherit"
            // className={classes.button}
          >
            Projects
          </Link> */}
          <Link href='#contact'
            sx={{
              "&:hover": {
                textShadow: "0px 0px 30px white",
                fontWeight: "bold",
                color: "#088178",
              },
              fontSize: "20px",
              textTransform: "none",
              marginLeft: "5px",
              marginRight: "5px",
              textDecoration: 'none'
            }}
            color="inherit"
            // className={classes.button}
          >
            Contact
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
