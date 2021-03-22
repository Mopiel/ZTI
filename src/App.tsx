import React from "react";
import "./App.css";
import { LoginPanel } from "./UserManagment/Login/LoginPanel";
import MountainsImg from "./icons/city-3660779_1920.jpg";

const App: React.FC = () => {
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
      <LoginPanel />
    </div>
  );
};

export default App;
