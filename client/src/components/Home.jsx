import React from "react";
import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "../Home.css";
import Github from "../imgs/github-icon.webp";

const homeLinkStyles = () => ({
    fontSize: "1.8em",
});

export default function Home() {
    const [hover, setHover] = React.useState(false);

    return (
        <>
            <Grid container spacing={3} justifyContent="center">
                <Grid item xs={2} sx={{ alignItems: "flex-start", marginTop: "35vh" }}>
                    <div
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                    >
                        <h1 className="Home-Name">Ashton Karp</h1>

                        <a
                            href="https://github.com/AKarp123/"
                            className={
                                hover ? "Home-Github-Hover" : "Home-Github"
                            }
                        >
                            <img
                                src={Github}
                                alt="Github"
                                style={{ height: "250px", width: "250px" }}
                            ></img>
                        </a>
                    </div>
                </Grid>
                <Grid item xs={2} sx={{marginTop: "35vh" }}>
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
