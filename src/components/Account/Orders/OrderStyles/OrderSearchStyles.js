import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "16px",
    width: "100%",
    maxWidth: "800px",
    margin: "15px auto",
    marginTop: "120px",
  },
  textField: {
    flex: 1,
    "& .MuiOutlinedInput-root": {
      borderRadius: "28px",
      "&:hover fieldset": {
        borderColor: "#2874f0",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#2874f0",
      },
    },
    "& .MuiOutlinedInput-input": {
      padding: "14px 20px",
    },
  },
  searchButton: {
    height: "56px",
    padding: "0 24px",
    fontSize: "16px",
    fontWeight: "bold !important",
    textTransform: "none",
    borderRadius: "28px !important",
    backgroundColor: "#2874f0",
    "&:hover": {
      backgroundColor: "#1c54b2",
    },
    transition: "all 0.3s ease",
  },
  searchIcon: {
    marginRight: "8px",
  },
  buttonText: {
    display: "inline-block",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));
