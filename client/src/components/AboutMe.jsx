import React, { Component } from "react";
import NavHome from "./NavHome";
import TabBar from "./AboutMe/TabBar";
import { Container } from "@mui/system";

export default class AboutMe extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 0,
        };
        this.handleTabBarChange = this.handleTabBarChange.bind(this);
    }


    handleTabBarChange = (newValue) => {
        this.setState({ value: newValue });
    }

    render() {
        return (
            <>
                <NavHome />

                <Container maxWidth="lg">
                    <TabBar handleTabBarChange={this.handleTabBarChange}/>
                    <div>{this.state.value}</div>
                </Container>
            </>
        );
    }
}
