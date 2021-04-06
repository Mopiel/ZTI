import React, { useEffect, useState } from "react";
import "./App.css";
import { LoginPanel } from "./UserManagement/Login/Login";
import MountainsImg from "./icons/city-3660779_1920.jpg";
import { RegistrationPanel } from "./UserManagement/Registration/RegistrationPanel";
import { NavigationBar } from "./NavigationBar/NavigationBar";
import { EmailEditor } from "./MainPanel/EmailEditor/EmailEditor";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Homepage } from "./MainPanel/Homepage/Homepage";
import AOS from "aos";
import "aos/dist/aos.css";

enum Views {
  editor = "Editor",
  login = "Login",
  registration = "Registration",
}

const App: React.FC = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const views = Object.entries(Views).map(([key, value]) => value);
  return (
    <Router>
      <div
        className="App"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)),url("${MountainsImg}")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        <Switch>
          <Route path={`/${Views.editor}`}>
            <EmailEditor />
          </Route>
          <Route path={`/${Views.login}`}>
            <NavigationBar
              {...{
                views: [
                  { id: "", name: "Homepage", linkTo: "/" },
                  ...views.map((name, id) => ({
                    id: name,
                    name,
                    linkTo: `/${name}`,
                  })),
                ],
              }}
            />
            <LoginPanel />
          </Route>
          <Route path={`/${Views.registration}`}>
            <NavigationBar
              {...{
                views: [
                  { id: "", name: "Homepage", linkTo: "/" },
                  ...views.map((name, id) => ({
                    id: name,
                    name,
                    linkTo: `/${name}`,
                  })),
                ],
              }}
            />
            <RegistrationPanel />
          </Route>
          <Route exact path={"/"}>
            <NavigationBar
              {...{
                views: [
                  { id: "", name: "Homepage", linkTo: "/" },
                  ...views.map((name, id) => ({
                    id: name,
                    name,
                    linkTo: `/${name}`,
                  })),
                ],
              }}
            />
            <Homepage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
