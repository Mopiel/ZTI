import React from "react";
import { Link } from "react-router-dom";
import { useStyles } from "./Styles";

interface Props<T> {
  selected: boolean;
  id: T;
  name: string;
  linkTo: string;
}

export function Button<T>(props: Props<T>) {
  const { selected, id, name, linkTo } = props;
  const classes = useStyles();

  return (
    <Link
      to={linkTo}
      style={{
        textDecoration: "none",
      }}
    >
      <div
        className={classes.button}
        style={{
          color: selected ? "#d3dcde" : undefined,
          borderBottom: "1px solid",
          borderColor: selected ? "#d3dcde" : "transparent",
        }}
      >
        {name}
      </div>
    </Link>
  );
}
