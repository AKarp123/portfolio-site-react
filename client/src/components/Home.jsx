import React, { useEffect } from "react";
import {
    Grid,
    Typography,
    Link as MUILink,
    Collapse,
    Tooltip,
    Fade,
} from "@mui/material";
import { Link } from "react-router-dom";
import "../Home.css";
import { functions } from "../firebase";
import { useHttpsCallable } from "react-firebase-hooks/functions";

const homeLinkStyles = () => ({
    fontSize: "1.4em",
});

export default function Home() {
    const [clicked, setClicked] = React.useState(false);
    const [loaded, setLoaded] = React.useState(false);
    const [music, setMusic] = React.useState({});
    const [getLastFM, loading, error] = useHttpsCallable(
        functions,
        "getLastFM"
    );

    useEffect(() => {
        setLoaded(true);
        getLastFM().then((result) => {
            // console.log(result);

            setMusic({ ...result.data });
        });
    }, []);

    // const onLoadHome = () => {
    //     return {
    //         opacity: loaded ? 1 : 0,
    //         transition: "opacity 1s ease-in-out",
    //     };
    // };

    const onClick = () => {
        console.log("clicked");
        setClicked(!clicked);
    };

    return (
        <>
            <Grid container spacing={1} justifyContent="center">
                {/* {music.success ? (
                    <Fade in={loaded} timeout={1000}>
                        <Grid
                            item
                            lg={12}
                            xs={12}
                            sx={{
                                marginTop: "35vh",
                                fontFamily: "Montserrat",
                                alignItems: "flex-start",
                                justifyContent: "center",
                            }}
                        >
                            <MUILink
                                href={music.url}
                                target="_blank"
                                rel="noopener"
                                underline="none"
                                color="inherit"
                            >
                                {music.isPlaying
                                    ? `Now Playing: ${music.artist} - ${music.song}`
                                    : `Last Played: ${music.artist} - ${music.song}`}
                            </MUILink>
                        </Grid>
                    </Fade>
                ) : (
                    <></>
                )} */}

                <Grid
                    item
                    lg={12}
                    xs={12}
                    sx={{
                        marginTop: "35vh",
                        fontFamily: "Montserrat",
                        alignItems: "flex-start",
                        justifyContent: "center",
                    }}
                >
                    <Fade in={!loading} timeout={1000}>
                        {music.success ? (
                            <MUILink
                                href={music.url}
                                target="_blank"
                                rel="noopener"
                                underline="none"
                                color="inherit"
                            >
                                {music.isPlaying
                                    ? `Now Playing: ${music.artist} - ${music.song}`
                                    : `Last Played: ${music.artist} - ${music.song}`}
                            </MUILink>
                        ) : (
                            <MUILink
                                href={"#"}
                                target="_blank"
                                rel="noopener"
                                underline="none"
                                color="inherit"
                            >
                                &nbsp;
                            </MUILink>
                        )}
                    </Fade>
                </Grid>

                <Fade in={true} timeout={2000}>
                    <Grid
                        item
                        lg={12}
                        xs={12}
                        sx={{
                            justifyContent: "center",
                            mt: "0.5vh",
                        }}
                    >
                        <div>
                            <h1 className="Home-Name">Ashton Karp</h1>
                        </div>
                    </Grid>
                </Fade>
            </Grid>
            <Collapse in={loaded} timeout={1000}>
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
