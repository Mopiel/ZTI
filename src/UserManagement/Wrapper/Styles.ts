import { createUseStyles } from "react-jss";

// Create your Styles. Remember, since React-JSS uses the default preset,
// most plugins are available without further configuration needed.
export const useStyles = createUseStyles({
  wrapper: {
    borderRadius: 6,
    backdropFilter: "blur(2.5px) !important",
    padding: "40px 70px",
  },
  position: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  },
});
