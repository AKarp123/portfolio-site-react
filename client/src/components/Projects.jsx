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
        techUsed: ["React", "Material-UI", "React-Router-Dom", "GitHub"]
    },
    {
        title: "South Predictions",
        time: "2022-2022",
        description: "Allows High School South Students to predict events in school and discuss on the forum",
        link: "https://southpredictions.herokuapp.com",
        techUsed: ["React", "Material-UI", "Express.js", "Firebase Auth", "Firestore",  "React-Router-Dom", "HerokuApp"]
    },
    

]

export default class Projects extends Component {
    render() {
        return (
            <div>
                <NavHome />

                <Container maxWidth="lg">
                    <Typography variant="h4" component="h1" gutterBottom>
                        My Projects
                    </Typography>
                    {projects.map(project => (
                        <Project 
                            key={v4()}
                            title={project.title}
                            time={project.time}
                            description={project.description}
                            link={project.link}
                            techUsed={project.techUsed}
                        />))}
                </Container>
            </div>
        );
    }
}
