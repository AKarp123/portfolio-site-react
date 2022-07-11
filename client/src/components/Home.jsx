import React, { useEffect } from "react";
import { Grid, Typography } from "@mui/material";
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
                </Grid>
            </Grid>
        </>
    );
}
