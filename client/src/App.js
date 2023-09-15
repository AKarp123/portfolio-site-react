import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Home from "./components/Home";
import { Switch, Route } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import projects from "./components/Projects";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});

function App() {
    return (
        <div className="App">
            <ThemeProvider theme={darkTheme}>
                <Routes />
            </ThemeProvider>
        </div>
    );
}

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={AboutMe} />
            <Route exact path="/projects" component={projects} />
        </Switch>
    );
};

export default App;
