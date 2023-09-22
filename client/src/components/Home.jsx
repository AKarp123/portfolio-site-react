import React, { useEffect } from "react";
import { Grid, Typography, Link as MUILink, Collapse, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "../Home.css";
import Github from "../imgs/github-icon.webp";

const homeLinkStyles = () => ({
    fontSize: "1.4em",
});

export default function Home() {
    const [clicked, setClicked] = React.useState(false);
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
    

    const onClick = () => {
        console.log("clicked");
        setClicked(!clicked);
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
                    sx={{
                        alignItems: "flex-start",
                        marginTop: "35vh",
                        justifyContent: "center",
                    }}
                >
                    <div onClick={onClick} style={{cursor: "pointer"}}>
                        <h1 className="Home-Name">Ashton Karp</h1>
                    </div>
                </Grid>
            </Grid>
            <Collapse in={clicked}>
                <Grid container spacing={3} justifyContent="center">
                    <Grid item lg={1} xs={12}>
                        <Typography
                            as={Link}
                            to="/about"
                            className="Home-Link"
                            sx={homeLinkStyles()}
                        >
                            About Me
                        </Typography>
                    </Grid>
                    <Grid item lg={1} xs={12}>
                        <Typography
                            as={Link}
                            to="/projects"
                            className="Home-Link"
                            sx={homeLinkStyles()}
                        >
                            Projects
                        </Typography>
                    </Grid>
                    <Grid item lg={1} xs={12}>
                        <Typography
                            as={MUILink}
                            href="https://github.com/AKarp123/"
                            target="_blank"
                            className="Home-Link"
                            sx={{
                                ...homeLinkStyles(),
                                textDecoration: "none",
                                color: "white",
                            }}
                        >
                            GitHub
                        </Typography>
                    </Grid>
                </Grid>
            </Collapse>
        </>
    );
}
