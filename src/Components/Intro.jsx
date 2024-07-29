import { Button, IconButton, Typography } from '@mui/material';
import React from 'react';
import img from "../Images/profile.jpeg"

// import { Container } from './styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Intro() {
    return (
        <div style={{ marginTop: "40px" }} id='intro'>
            <table>
                <tr>
                    <td>
                        <div>
                            <Typography sx={{ fontSize: "30px" }}>Hi, Myself</Typography>

                            <Typography sx={{ fontSize: "40px", fontWeight: "bold" }}>Ankit Kumar</Typography>

                            <Typography sx={{ fontSize: "30px" }}>I am a <span style={{ color: "#088178" }}>Full Stack Developer</span> </Typography>
                            <br></br>

                            <Typography sx={{ fontSize: "18px" }}>Detail-oriented and motivated computer science graduate with a strong passion for full stack development.
                                Skilled in problem-solving, agile methodologies, and effective communication.<br></br>
                                Eager to leverage expertise in web development, databases,
                                and software design to contribute to innovative and user-friendly applications while learning from experienced developers.
                            </Typography>
                            <br />

                            <IconButton
                                href='https://www.linkedin.com/in/ankit-kumar-27-july/'
                                sx={{ color: "#0a66c2" }}
                            >
                                <LinkedInIcon sx={{ fontSize: "40px" }} />
                            </IconButton>

                            <IconButton
                                href='https://github.com/W3-80495'
                                sx={{ color: "#0a66c2" }}
                            >
                                <GitHubIcon sx={{ fontSize: "40px" }} />
                            </IconButton>

                            <Button href='https://www.naukri.com/mnjuser/profile?id=&altresid' style={{ textTransform: "none", fontSize: "26px", fontWeight: "bold" }}>naukri</Button>

                            <br />
                            <br />

                            <Button style={{ backgroundColor: "black", color: "white", textTransform: "none", fontWeight: "bold" }} variant='contained'>Download CV</Button>

                        </div>
                    </td>
                    <td>
                        <div style={{ display: "flex", alignItems: "center", height: "450px" }}>
                            <img style={{ width: "330px", height: "330px", borderRadius: "50%" }} src={img}></img>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    );
}
