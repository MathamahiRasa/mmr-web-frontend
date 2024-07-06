import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {
    background:
      "linear-gradient(to bottom right,#2A2F33, #406940, #3F334D, #DBE9EE)",
    padding: "100px",
    minHeight: "100vh",
  },
  heading: {
    padding: "5px",
  },
  section: {
    border: "2px #fff",
    backgroundImage: "url('')",
    background: "#406D40",
    borderRadius: "30% 70% 17% 83% / 35% 28% 72% 65% ",
    margin: "20px 0",
    padding: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  text: {
    fontFamily: "Chalkduster !important",
    fontStyle: "oblique",
    fontWeight: "700 !important",
    color: "#fff",
    flex: "1 1 auto",
    marginRight: "20px",
  },
  image: {
    flex: "0 0 auto",
    borderRadius: "10px",
    width: "300px",
    height: "auto",
  },
});
