import React, { useState } from "react";
import { useStyles } from "./Styles";
import KeyIcon from "../../icons/key.svg";
import LockIcon from "../../icons/lock.svg";
import { Input } from "../Elements/Input";
import { Button } from "../Elements/Button";
import EmailIcon from "../../icons/email.svg";
import { BlurredBackground } from "../Wrapper/BlurredBackground";
import { useCreateUserMutation } from "../../graphql";
import { Views } from "../../App";

import { useHistory } from "react-router-dom";

export const RegistrationPanel: React.FC = () => {
  const history = useHistory();
  const classes = useStyles();

  const [credentials, setCredentials] = useState({
    email: "",
    login: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState<string>();
  const [createUser] = useCreateUserMutation({ variables: credentials });

  return (
    <BlurredBackground>
      <div className={classes.mainText}>Registration Panel</div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          if (!credentials.login.length || !credentials.password.length)
            return setErrorMessage("Fields cannot be empty");
          const { data } = await createUser();
          if (data?.createUser.created) {
            setErrorMessage(undefined);
            localStorage.setItem("login", credentials.login);
            localStorage.setItem("password", credentials.password);
            history.push(`/${Views.login}`);
          } else setErrorMessage(data?.createUser.message);
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
        <div>
          <span className={classes.errorMessage}>{errorMessage}</span>
        </div>
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
