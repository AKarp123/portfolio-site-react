import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export default function TabBar(props) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        props.handleTabBarChange(newValue);
    };

    const tabCss = {
        borderTopRightRadius: "4px",
        borderTopLeftRadius: "4px",
    };

    return (
        <Box sx={{ width: "100%" }}>
            <Tabs value={value} onChange={handleChange} centered>
                <Tab label="Bio" sx={tabCss} />
                <Tab label="Experience" sx={tabCss} />
                <Tab label="Fun Stuff" sx={tabCss} />
            </Tabs>
        </Box>
    );
}
