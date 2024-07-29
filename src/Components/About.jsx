import { Typography } from '@mui/material';
import React from 'react';
import aboutImg from "../Images/about.jpeg"

// import { Container } from './styles';

export default function About() {
    return (
        <div style={{ height: "100px", marginTop: "40px" }} >
            <table>
                <tr>
                    <td>
                        <div>
                            <img src={aboutImg} alt="aboutImg" style={{ width: "270px", height: "450px", borderRadius: "30px" }} />
                        </div>
                    </td>
                    <td>
                        <div style={{ marginLeft: "50px" }}>
                            <h1 style={{ color: "#088178" }}>About Me</h1>
                            <Typography sx={{ fontSize: "24px" }}>Hi, my name is Ankit Kumar, and I basically hail from Varanasi but currently reside in Pune. I have completed my Masters and Bachelor's degrees in Computer Applications. Speaking of my skills, I am a full-stack developer. My hobbies include riding bikes, exploring mountains, trekking, and cooking.</Typography>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    );
}
