import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  quantityModifier: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      justifyContent: "space-between",
    },
  },
  buttonGroup: {
    "& .MuiButtonGroup-grouped": {
      minWidth: "24px !important",
      padding: "2px !important",
    },
  },
  quantityField: {
    width: 40,
    "& .MuiInputBase-input": {
      textAlign: "center",
      padding: theme.spacing(0.5),
      fontSize: "20px",
      fontWeight: 600,
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "transparent !important",
        color: "black !important",
      },
    },
    [theme.breakpoints.down("sm")]: {
      width: 30,
    },
  },
  noBorder: {
    border: "none !important",
  },
  noBorderRoot: {
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none !important",
    },
  },
  addButton: {
    // backgroundColor: "#4CAF50 !important",
    color: "black !important",
    // borderRadius: "50% !important",
    "&:hover": {
      backgroundColor: "#45a049 !important",
    },
  },
  removeButton: {
    // backgroundColor: "#f44336 !important",
    color: "black !important",
    borderRadius: "20% !important",
    "&:hover": {
      backgroundColor: "#d32f2f !important",
    },
  },
}));
