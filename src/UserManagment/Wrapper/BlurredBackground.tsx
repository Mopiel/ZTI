import React from "react";
import { useStyles } from "./Styles";
import { useSpring, animated } from "react-spring";

export const BlurredBackground: React.FC = ({ children }) => {
  const classes = useStyles();

  const props = useSpring({
    transform: "scale(1)",
    from: { transform: "scale(0)" },
  });
  return (
    <div className={classes.position}>
      <animated.div style={props}>
        <div className={classes.wrapper}>{children}</div>
      </animated.div>
    </div>
  );
};
