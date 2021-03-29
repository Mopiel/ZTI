import React, { useState } from "react";
import { useStyles } from "./Styles";
import KeyIcon from "../../icons/key.svg";
import LockIcon from "../../icons/lock.svg";
import { Input } from "../Elements/Input";
import { Button } from "../Elements/Button";
import EmailIcon from "../../icons/email.svg";
import { BlurredBackground } from "../Wrapper/BlurredBackground";

export const RegistrationPanel: React.FC = () => {
  const classes = useStyles();
  const [credentials, setCredentials] = useState({
    email: "",
    login: "",
    password: "",
  });

  return (
    <BlurredBackground>
      <div className={classes.mainText}>Registration Panel</div>
      <form
        onSubmit={() => {
          console.log("submit");
        }}
      >
        <Input
          type={"Email"}
          placeholder={"Email address"}
          backgroundImg={EmailIcon}
          value={credentials.email}
          setValue={(value) =>
            setCredentials((credentials) => ({ ...credentials, email: value }))
          }
        />
        <Input
          type={"Login"}
          placeholder={"Login"}
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
          REGISTER
        </Button>
      </form>
    </BlurredBackground>
  );
};
