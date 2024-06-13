import React, { useEffect } from "react";
import {
    Container,
    Typography,
    Link as MUILink,
    Collapse,
    Stack,
    Fade,
    Paper,
    Divider,
} from "@mui/material";
import { Link } from "react-router-dom";
import "../Home.css";
import { functions } from "../firebase";
import { useHttpsCallable } from "react-firebase-hooks/functions";

const homeLinkStyles = () => ({
    fontSize: "1.4em",
    textDecoration: "none",
    color: "white",
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
        <Container
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
            }}
        >
            <Fade in={!loading && music.success} timeout={1000}>
                <MUILink
                    href={music.url}
                    target="_blank"
                    rel="noopener"
                    underline="none"
                    color="inherit"
                    sx={{
                        fontSize: "1.2m",
                        textDecoration: "none",
                        color: "white",
                        lineHeight: "1.5em",
                        fontFamily: "Montserrat, Roboto, sans-serif",
                    }}
                >
                    {music.isPlaying
                        ? `Now Playing: ${music.artist} - ${music.song}`
                        : `Last Played: ${music.artist} - ${music.song}`}
                </MUILink>
            </Fade>

            <Paper
                sx={{
                    padding: "3% 0 ",
                    width: { xs: "90%", sm: "450px" },
                    margin: "0 auto",
                    border: "1.5px solid #495057",
                    borderRadius: "10px",
                    backgroundColor: "rgba(56, 56, 56, 0.5)",
                    " -webkit-backdrop-filter": "blur(3px)",
                    "backdrop-filter": "blur(3px)",
                }}
            >
                <Fade in={true} timeout={2000}>
                    <Typography
                        sx={{
                            fontSize: "2.5em",
                            textAlign: "center",
                        }}
                    >
                        Ashton Karp
                    </Typography>
                </Fade>
                <Divider sx={{ my: 2 }} />
                <Collapse in={loaded} timeout={1000}>
                    <Stack
                        sx={{
                            alignItems: "center",
                        }}
                        spacing={10}
                    >
                        <Typography as={Link} to="/about" sx={homeLinkStyles()}>
                            About Me
                        </Typography>

                        <Typography
                            as={Link}
                            to="/projects"
                            sx={homeLinkStyles()}
                        >
                            Projects
                        </Typography>

                        <Typography
                            as={MUILink}
                            href="https://github.com/AKarp123/"
                            target="_blank"
                            sx={homeLinkStyles()}
                        >
                            GitHub
                        </Typography>
                    </Stack>
                </Collapse>
            </Paper>
        </Container>
    );
}
