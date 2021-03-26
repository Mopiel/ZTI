import React from "react";
import { useStyles } from "./Styles";

type ID = string | number;
interface Props {
  selected: boolean;
  id: ID;
  name: string;
  onClick: (id: ID) => void;
}

export const Button: React.FC<Props> = (props) => {
  const { selected, id, name, onClick } = props;
  const classes = useStyles();

  return (
    <div
      className={classes.button}
      style={{
        color: selected ? "#d3dcde" : undefined,
        borderBottom: "1px solid",
        borderColor: selected ? "#d3dcde" : "transparent",
      }}
      onClick={() => onClick(id)}
    >
      {name}
    </div>
  );
};
