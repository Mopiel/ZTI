import React, { useState } from "react";
import { useStyles } from "./Styles";
import KeyIcon from "../../icons/key.svg";
import LockIcon from "../../icons/lock.svg";
import { Input } from "../Elements/Input";
import { Button } from "../Elements/Button";
import { BlurredBackground } from "../Wrapper/BlurredBackground";

export const LoginPanel: React.FC = () => {
  const classes = useStyles();
  const [credentials, setCredentials] = useState({ login: "", password: "" });
  return (
    <BlurredBackground>
      <div className={classes.mainText}>Login Panel</div>
      <form
        onSubmit={() => {
          console.log("submit");
        }}
      >
        <Input
          type={"Login"}
          placeholder={"Login or email address"}
          backgroundImg={LockIcon}
          value={credentials.login}
          setValue={(value) =>
            setCredentials((credentials) => ({ ...credentials, login: value }))
          }
        />
        <Input
          type={"Password"}
          placeholder={"Password"}
          backgroundImg={KeyIcon}
          value={credentials.password}
          setValue={(value) =>
            setCredentials((credentials) => ({
              ...credentials,
              password: value,
            }))
          }
        />
        <Button
          style={{
            marginTop: 25,
          }}
          type={"submit"}
        >
          LOGIN
        </Button>
      </form>

      <Button
        style={{
          marginTop: 10,
          backgroundColor: "transparent",
        }}
        type={"submit"}
      >
        Create new Account
      </Button>
    </BlurredBackground>
  );
};
