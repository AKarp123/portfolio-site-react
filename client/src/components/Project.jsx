import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Collapse } from "@mui/material";
import {v4 }from "uuid";

export default function Project(props) {
    const [isExpanded, setIsExpanded] = React.useState(false);

    const HandleExpandClick = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <Card sx={{ minWidth: 275, textAlign: "left", marginBottom: "3vh" }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {props.title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {" "}
                    {/* Time making */}
                    {props.time}
                </Typography>
                <Typography variant="body2">{props.description}</Typography>
            </CardContent>
            <CardActions>
                <a href={props.link}>
                    <Button size="small">Link to Site</Button>
                </a>
                <Button size="small" onClick={HandleExpandClick}>
                    Tech Used
                </Button>
            </CardActions>
            <Collapse in={isExpanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography>
                        {props.techUsed.map((tech) => (
                            <Typography key={v4()}>{tech}</Typography>
                        ))}
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}
