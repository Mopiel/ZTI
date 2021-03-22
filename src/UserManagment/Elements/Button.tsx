import React from "react";
import { useStyles } from "./Styles";

interface Props {
  label: string;
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button: React.FC<Props> = (props) => {
  const { type, label, onClick } = props;
  const classes = useStyles();
  return (
    <button className={classes.button} type={type} onClick={onClick}>
      {label}
    </button>
  );
};
