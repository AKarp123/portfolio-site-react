import { Container } from "@mui/system";
import React, { Component } from "react";
import NavHome from "./NavHome";
import Project from "./Project";
import { v4 } from "uuid";
import { Typography } from "@mui/material";

const projects = [
    {
        title: "Portfolio Website",
        time: "2022-2022",
        description: "Website created to highlight projects and skills.",
        link: "#",
        repo: "https://github.com/AKarp123/portfolio-site-react",
        techUsed: ["React.js", "React-Router-Dom", "Material-UI", "HerokuApp"],
    },
    {
        title: "South Predictions",
        time: "2022-2022",
        description:
            "Allows High School South Students to predict events in school and discuss on the forum",
        link: "https://southpredictions.herokuapp.com",
        techUsed: [
            "React",
            "React-Router-Dom",
            "Material-UI",
            "Express.js",
            "Firebase Auth",
            "Firestore",
            "HerokuApp",
        ],
    },
];

export default class Projects extends Component {
    render() {
        return (
            <div>
                <NavHome />

                <Container maxWidth="lg">
                    <Typography
                        variant="h4"
                        component="h1"
                        paddingBottom="0.7em"
                        marginBottom="0.7em"
                        borderBottom={"2px solid white"}
                    >
                        My Projects
                    </Typography>
                    {projects.map((project) => (
                        <Project
                            key={v4()}
                            title={project.title}
                            time={project.time}
                            description={project.description}
                            link={project.link}
                            techUsed={project.techUsed}
                            repo={project.repo}
                        />
                    ))}
                </Container>
            </div>
        );
    }
}
