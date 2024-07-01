import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  rootBox: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));
