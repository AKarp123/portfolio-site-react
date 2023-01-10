import { Container } from "@mui/system";
import React, { Component } from "react";
import NavHome from "./NavHome";
import Project from "./Project";
import { v4 } from "uuid";
import { Typography } from "@mui/material";

const projects = [
    {
        title: "Portfolio Website - Work In Progress",
        time: "2022-2022",
        description: "Website created to highlight projects and skills.",
        link: "#",
        repo: "https://github.com/AKarp123/portfolio-site-react",
        techUsed: ["React.js", "React-Router-Dom", "Material-UI", "HerokuApp"],
    },
    {
        title: "SchoolPrioritizer (WWPHacks Winner)",
        time: "2022-2022",
        description:
            "A simple site that helps students organize school work. Application made for the WWPHacks hackathon. Won best beginner hack.",
        link: "https://devpost.com/software/schoolprioritizer",
        repo: "https://github.com/AKarp123/wwphacks",
        techUsed: ["React.js", "Material-UI", "Firebase", "Vercel"]
    },
    {
        title: "Online Todo List - Under Development",
        time: "August 2022",
        description:
            "An simple online todo list that allows users to create, edit, and delete tasks using Google Firestore as a database.",
        link: "#",
        repo: "https://github.com/AKarp123/todo-app",
        techUsed: ["React.js", "Firebase", "Material-UI"],
    },
    {
        title: "South Predictions - Work in Progress",
        time: "2022-2022",
        description:
            "A web app in which students can predict on the outcome of events in our school such as a game or a sporting event. An example of the application is on the github page",
        link: "https://southpredictions.vercel.app",
        repo: "https://github.com/g1gabyt3333/southpredictions",
        techUsed: [
            "React",
            "React-Router-Dom",
            "Material-UI",
            "Express.js",
            "Google Firebase",
            "Firestore",
            "HerokuApp",
        ],
    },
    {
        title: "Kawambiit's Osu Site",
        time: "2022-2022",
        description:
            "Fun side project to display my osu stats. Third version of the site made upgrades to React and Material-UI.",
        link: "https://kawaosusite.vercel.app/",
        techUsed: [
            "React",
            "React-Router-Dom",
            "Material-UI",
            "HerokuApp",
            "Express.js",
            "Axios",
            "osu-api-extended (npm package)",
            "Bootstrap (V1 and V2 only)",
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
