import React from "react";
import { Button } from "./Button";
import { useStyles } from "./Styles";

type ID = string | number;
interface Props {
  selectedId: ID;
  views: { id: ID; name: string; onClick: (id: ID) => void }[];
}

export const NavigationBar: React.FC<Props> = ({ views, selectedId }) => {
  const classes = useStyles();

  return (
    <div className={classes.bar}>
      {views.map((view) => {
        return <Button selected={selectedId === view.id} {...view} />;
      })}
    </div>
  );
};
