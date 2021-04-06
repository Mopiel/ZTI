import { createUseStyles } from "react-jss";

// Create your Styles. Remember, since React-JSS uses the default preset,
// most plugins are available without further configuration needed.
export const useStyles = createUseStyles({
  button: {
    padding: "15px 20px",
    cursor: "pointer",
    userSelect: "none",
    color: "#afafb6",
    transition: "0.2s all",
    textDecoration: "none",
  },
  bar: {
    background: "linear-gradient(180deg, rgba(0,0,0,1), rgba(0,0,0,0))",
    position: "fixed",
    top: 0,
    width: "100%",
    display: "flex",
    zIndex: 100,
  },
});
