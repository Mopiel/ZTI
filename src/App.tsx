import React, { useState } from "react";
import "./App.css";
import { LoginPanel } from "./UserManagment/Login/LoginPanel";
import MountainsImg from "./icons/city-3660779_1920.jpg";
import { RegistrationPanel } from "./UserManagment/Registration/RegistrationPanel";
import { NavigationBar } from "./NavigationBar/NavigationBar";
import { BlurredBackground } from "./UserManagment/Wrapper/BlurredBackground";

const App: React.FC = () => {
  const views = ["Login", "Registration"];
  const [selectedView, setSelectedView] = useState<string | number>(views[0]);
  return (
    <div
      className="App"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)),url("${MountainsImg}")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "top",
      }}
    >
      <NavigationBar
        {...{
          selectedId: selectedView,
          views: views.map((name, id) => ({
            id: name,
            name,
            onClick: setSelectedView,
          })),
        }}
      />
      {selectedView === "Login" && <LoginPanel />}
      {selectedView === "Registration" && <RegistrationPanel />}
    </div>
  );
};

export default App;
