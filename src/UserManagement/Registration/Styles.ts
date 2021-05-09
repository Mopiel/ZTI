import { createUseStyles } from "react-jss";

// Create your Styles. Remember, since React-JSS uses the default preset,
// most plugins are available without further configuration needed.
export const useStyles = createUseStyles({
  mainText: {
    color: "#d3dcde",
    fontSize: 30,
  },
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
  errorMessage: {
    color: "#ff0033",
    fontWeight: 700,
  },
});
