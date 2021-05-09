import React, { useEffect, useState } from "react";
import { useStyles } from "./Styles";
import KeyIcon from "../../icons/key.svg";
import LockIcon from "../../icons/lock.svg";
import { Input } from "../Elements/Input";
import { Button } from "../Elements/Button";
import { BlurredBackground } from "../Wrapper/BlurredBackground";
import { useAuthMutation } from "../../graphql";
import { Link } from "react-router-dom";
import { Views } from "../../App";
import { useHistory } from "react-router-dom";

export const LoginPanel: React.FC = () => {
  const history = useHistory();
  const classes = useStyles();
  const [credentials, setCredentials] = useState({
    login: localStorage.getItem("login") ?? "",
    password: localStorage.getItem("password") ?? "",
  });
  const [errorMessage, setErrorMessage] = useState<string>();
  const [authenticate] = useAuthMutation({ variables: credentials });

  return (
    <BlurredBackground>
      <div className={classes.mainText}>Login Panel</div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          if (!credentials.login.length || !credentials.password.length)
            return setErrorMessage("Fields cannot be empty");
          const { data } = await authenticate();
          if (data?.authenticate.authenticated) {
            localStorage.setItem("token", data.authenticate.token);
            setErrorMessage(undefined);
            history.push("/");
          } else setErrorMessage(data?.authenticate.message);
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
        <div>
          <span className={classes.errorMessage}>{errorMessage}</span>
        </div>
        <Button
          style={{
            marginTop: 25,
          }}
          type={"submit"}
        >
          LOGIN
        </Button>
      </form>

      <Link to={`/${Views.registration}`}>
        <Button
          style={{
            marginTop: 10,
            backgroundColor: "transparent",
          }}
          type={"submit"}
        >
          Create new Account
        </Button>
      </Link>
    </BlurredBackground>
  );
};
