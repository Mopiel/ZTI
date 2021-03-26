import React, { CSSProperties } from "react";
import { useStyles } from "./Styles";

interface Props {
  style?: CSSProperties;
  label: string;
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button: React.FC<Props> = (props) => {
  const { style, type, label, onClick } = props;
  const classes = useStyles();
  return (
    <button
      style={style}
      className={classes.button}
      type={type}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
