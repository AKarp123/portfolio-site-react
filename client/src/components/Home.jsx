import React, { useEffect } from "react";
import { Grid, Typography, Link as MUILink } from "@mui/material";
import { Link } from "react-router-dom";
import "../Home.css";
import Github from "../imgs/github-icon.webp";

const homeLinkStyles = () => ({
    fontSize: "1.8em",
});

export default function Home() {
    const [hover, setHover] = React.useState(false);
    const [loaded, setLoaded] = React.useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    const onLoadHome = () => {
        return {
            opacity: loaded ? 1 : 0,
            transition: "opacity 1s ease-in-out",
        };
    };

    const handleMouseHover = () => {
        setHover(!hover);
    };

    return (
        <>
            <Grid
                container
                spacing={3}
                justifyContent="center"
                sx={onLoadHome()}
            >
                <Grid
                    item
                    lg={2}
                    xs={12}
                    sx={{ alignItems: "flex-start", marginTop: "35vh" }}
                >
                    <div
                        onMouseEnter={handleMouseHover}
                        onMouseLeave={handleMouseHover}
                    >
                        <h1 className="Home-Name">Ashton Karp</h1>
                    </div>
                </Grid>
                <Grid item lg={2} xs={12} sx={{ marginTop: "35vh" }}>
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
                    <Typography
                        as={MUILink}
                        href="https://github.com/AKarp123/"
                        target="_blank"
                        className="Home-Link"
                        sx={{...homeLinkStyles(), textDecoration: "none", color: "white"}}
                    >
                        GitHub
                    </Typography>
                </Grid>
            </Grid>
        </>
    );
}
