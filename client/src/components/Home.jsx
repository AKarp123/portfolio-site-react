import React from "react";
import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "../Home.css";
import Github from "../imgs/github-icon.webp";

const homeLinkStyles = () => ({
    fontSize: "1.8em",
});

export default function Home() {
    return (
        <>
            <div style={{ height: "35vh" }}></div>
            <Grid container spacing={3} justifyContent="center">
                <Grid item xs={2} sx={{ alignItems: "flex-start" }}>
                    <h1>Ashton Karp</h1>
                    <a href="https://github.com/AKarp123/" >
                        <img
                            src={Github}
                            style={{ height: "250px", width: "250px" }}
                        ></img>
                    </a>
                </Grid>
                <Grid item xs={2}>
                    <Typography
                        as={Link}
                        to="/about"
                        className="Home-Link"
                        sx={homeLinkStyles()}
                    >
                        About Me
                    </Typography>
                    <Typography
                        as={Link}
                        to="/projects"
                        className="Home-Link"
                        sx={homeLinkStyles()}
                    >
                        Projects
                    </Typography>
                </Grid>
            </Grid>
        </>
    );
}
