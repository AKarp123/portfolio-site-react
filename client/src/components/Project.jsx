import * as React from "react";
import {
    Typography,
    Card,
    CardActions,
    CardContent,
    Button,
    Collapse,
} from "@mui/material";
import { v4 } from "uuid";

export default function Project(props) {
    const [isExpanded, setIsExpanded] = React.useState(false);

    const HandleExpandClick = () => {
        setIsExpanded(!isExpanded);
    };

    const srcCode = (repo) => (
        <Button href={repo} size="small" target="_blank">
            Source Code
        </Button>
    );

    return (
        <Card sx={{ minWidth: 275, textAlign: "left", marginBottom: "3vh" }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {props.title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {props.time}
                </Typography>
                <Typography variant="body2">{props.description}</Typography>
            </CardContent>
            <CardActions disableSpacing>
                <Button type="text" size="small" href={props.link}>
                    Link to App
                </Button>
                <Button size="small" onClick={HandleExpandClick}>
                    Tech Used
                </Button>
                {props.repo !== undefined ? srcCode(props.repo) : ""}
            </CardActions>
            <Collapse in={isExpanded} timeout="auto" unmountOnExit>
                <CardContent>
                    {props.techUsed.map((tech) => (
                        <Typography key={v4()}>{tech}</Typography>
                    ))}
                </CardContent>
            </Collapse>
        </Card>
    );
}
