import { createUseStyles } from "react-jss";

// Create your Styles. Remember, since React-JSS uses the default preset,
// most plugins are available without further configuration needed.
export const useStyles = createUseStyles({
  button: {
    outlineWidth: 0,
    fontSize: 16,
    color: "#64676c",
    borderRadius: 4,
    cursor: "pointer",
    padding: 5,
    transition: "0.2s all",
    border: "1px solid rgb(221, 221, 221)",
    "&:hover": {
      boxShadow: "rgb(0 0 0 / 35%) 1px 1px 3px",
    },
    "&:active": {
      boxShadow: "rgb(0 0 0 / 35%) 0.5px 0.5px 1px",
    },
  },
});
