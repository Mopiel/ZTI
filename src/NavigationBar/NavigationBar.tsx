import React from "react";
import { Button } from "./Button";
import { useStyles } from "./Styles";
import { useLocation } from "react-router-dom";

interface Props {
  views: { id: string; name: string; linkTo: string }[];
  showLogOut: boolean;
  onLogoutClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export const NavigationBar: React.FC<Props> = ({
  views,
  showLogOut,
  onLogoutClick,
}) => {
  const classes = useStyles();

  const currentView = useLocation().pathname.split("/")[1];

  return (
    <div className={classes.bar}>
      {views.map((view) => {
        return <Button selected={view.id === currentView} {...view} />;
      })}
      <div style={{ flex: 1 }} />
      {showLogOut && (
        <Button
          onClick={onLogoutClick}
          selected={false}
          linkTo={"/"}
          name={"LogOut"}
          id={20}
        />
      )}
    </div>
  );
};
