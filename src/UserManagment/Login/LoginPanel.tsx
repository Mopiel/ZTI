import React, { useState } from "react";
import { useStyles } from "./Styles";
import KeyIcon from "../../icons/key.svg";
import LockIcon from "../../icons/lock.svg";
import { Input } from "../Elements/Input";
import { Button } from "../Elements/Button";

export const LoginPanel: React.FC = () => {
  const classes = useStyles();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className={classes.wrapper}>
      <div className={classes.mainText}>Login Panel</div>
      <form
        onSubmit={() => {
          console.log("submit");
        }}
      >
        <Input
          type={"Login"}
          placeholder={"Login or email adress"}
          backgroundImg={LockIcon}
          value={login}
          setValue={setLogin}
        />
        <Input
          type={"Password"}
          placeholder={"Password"}
          backgroundImg={KeyIcon}
          value={password}
          setValue={setPassword}
        />
        <Button label={"Login"} type={"submit"} />
      </form>
    </div>
  );
};
