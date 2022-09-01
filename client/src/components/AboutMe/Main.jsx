import React from "react";
import { Typography } from "@mui/material";

export default function Main(props) {
    if (props.num === 0) {
        return (
            <Typography variant="body1" gutterBottom>
                Just a high school student who is learning programming :{")"}
            </Typography>
        );
    }

    if (props.num === 1) {
        const experience = [
            "React",
            "Express",
            "Node",
            "MongoDB",
            "Mongoose",
            "Bootstrap",
        ];
        return (
            <>
                {experience.map((exp, index) => {
                    return (
                        <Typography variant="body1" gutterBottom>
                            {exp}
                        </Typography>
                    );
                })}
            </>
        );
    }

    return <div>{props.num}</div>;
}
