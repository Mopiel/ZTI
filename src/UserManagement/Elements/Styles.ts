import { createUseStyles } from "react-jss";

// Create your Styles. Remember, since React-JSS uses the default preset,
// most plugins are available without further configuration needed.
export const useStyles = createUseStyles({
  input: {
    outlineWidth: 0,
    fontSize: 16,
    marginTop: 15,
    padding: 15,
    paddingLeft: 40,
    display: "block",
    background: "#332f2ca0",
    border: "none",
    color: "#d3dcde",
    backgroundRepeat: "no-repeat",
    backgroundSize: 16,
    backgroundPositionX: 10,
    backgroundPositionY: "center",
    "&::placeholder": {
      color: "#64676c",
    },
  },
  button: {
    color: "#d3dcde",
    outlineWidth: 0,
    height: 40,
    fontSize: 20,
    background: "#8c8c8c",
    border: "none",
    width: "100%",
    borderRadius: 7,
    cursor: "pointer",
    "&:hover": {
      transform: "scale(0.98)",
      transition: "0.1s",
    },
    "&:active": {
      opacity: "0.8",
    },
  },
});
