import React, { useEffect, useState } from "react";
import "./App.css";
import { LoginPanel } from "./UserManagement/Login/Login";
import MountainsImg from "./icons/city-3660779_1920.jpg";
import { RegistrationPanel } from "./UserManagement/Registration/RegistrationPanel";
import { NavigationBar } from "./NavigationBar/NavigationBar";
import { EmailEditor } from "./MainPanel/EmailEditor/EmailEditor";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Homepage } from "./MainPanel/Homepage/Homepage";
import AOS from "aos";
import "aos/dist/aos.css";
import { useIsAuthQuery } from "./graphql";
import ClipLoader from "react-spinners/ClipLoader";
import { ClientsList } from "./MainPanel/ClientsLists";

export enum Views {
  editor = "Editor",
  login = "Login",
  registration = "Registration",
  lists = "Clients lists",
}

const App: React.FC = () => {
  const { loading, data, refetch: checkAuth } = useIsAuthQuery({
    pollInterval: 100,
  });
  const isAuthenticated = data?.isAuthenticated;

  useEffect(() => {
    AOS.init();
  }, []);

  const views = isAuthenticated
    ? [
        { path: Views.editor, component: EmailEditor },
        { path: Views.lists, component: ClientsList },
      ]
    : [
        { path: Views.login, component: LoginPanel },
        { path: Views.registration, component: RegistrationPanel },
      ];

  if (loading || isAuthenticated === undefined)
    return (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          overflow: "hidden",
        }}
      >
        <ClipLoader size={300} color={"#123abc"} loading={true} />
      </div>
    );
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
          <Route path={[`/${Views.editor}`]} />
          <Route>
            <NavigationBar
              {...{
                views: [
                  { id: "", name: "Homepage", linkTo: "/" },
                  ...views.map((view, id) => ({
                    id: view.path,
                    name: view.path,
                    linkTo: `/${view.path}`,
                  })),
                ],
              }}
              showLogOut={isAuthenticated}
              onLogoutClick={() => {
                localStorage.removeItem("token");
                checkAuth();
              }}
            />
          </Route>
        </Switch>
        <Switch>
          {views.map((view) => (
            <Route key={view.path} path={`/${view.path}`}>
              <view.component />
            </Route>
          ))}
          <Route>
            <Homepage isAuth={isAuthenticated} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
