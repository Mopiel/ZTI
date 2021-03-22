import React from "react";
import { useStyles } from "./Styles";

interface Props {
  type?: string;
  placeholder?: string;
  backgroundImg?: string;
  value: string;
  setValue: (state: string) => void;
}

export const Input: React.FC<Props> = (props) => {
  const { type, placeholder, backgroundImg, value, setValue } = props;
  const classes = useStyles();
  return (
    <input
      type={type}
      placeholder={placeholder}
      style={{
        backgroundImage: backgroundImg && `url("${backgroundImg}")`,
      }}
      className={classes.input}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
