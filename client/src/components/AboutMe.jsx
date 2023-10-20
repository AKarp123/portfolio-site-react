import React, { useState } from "react";
import NavHome from "./NavHome";
import TabBar from "./AboutMe/TabBar";
import { Container } from "@mui/system";
import { Typography } from "@mui/material";
import Main from "./AboutMe/Main";

export default function AboutMe() {
    const [value, setValue] = useState(0);

    const handleTabBarChange = (newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <NavHome />

            <Container maxWidth="lg">
                <Typography variant="h2" sx={{ fontWeight: 500 }}>
                    About Me
                </Typography>
                <TabBar handleTabBarChange={handleTabBarChange} />
                <div>
                    <Main num={value} />
                </div>
            </Container>
        </>
    );
}
