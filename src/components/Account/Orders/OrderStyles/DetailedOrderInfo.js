import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxSizing: "border-box",
    padding: theme.spacing(3),
  },
  userDetailsBox: {
    display: "flex",
    flexDirection: ({ isMobile }) => (isMobile ? "column" : "row"),
    justifyContent: "space-between",
    alignItems: "stretch",
    borderRadius: theme.shape.borderRadius,
    width: "80%",
    maxWidth: "1500px",
    minHeight: "200px",
    margin: theme.spacing(3),
    padding: theme.spacing(3),
    boxShadow: theme.shadows[3],
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.standard,
    }),
    "&:hover": {
      transform: "translateY(-4px)",
    },
  },
  section: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    padding: theme.spacing(2),
  },
  sectionTitle: {
    fontWeight: "bold",
    marginBottom: theme.spacing(2),
  },
  textSpacing: {
    marginBottom: theme.spacing(1),
  },
  productDetailsBox: {
    display: "flex",
    flexDirection: ({ isMobile }) => (isMobile ? "column" : "row"),
    alignItems: "center",
    width: "80%",
    maxWidth: "1500px",
    minHeight: "200px",
    margin: theme.spacing(3),
    padding: theme.spacing(3),
    boxShadow: theme.shadows[3],
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.standard,
    }),
    "&:hover": {
      transform: "translateY(-4px)",
    },
  },
  avatar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: theme.spacing(12),
    height: theme.spacing(12),
    marginRight: theme.spacing(3),
    marginBottom: ({ isMobile }) => (isMobile ? theme.spacing(2) : 0),
  },
  productInfo: {
    flex: 1,
    marginBottom: ({ isMobile }) => (isMobile ? theme.spacing(2) : 0),
  },
  title: {
    marginBottom: theme.spacing(1),
  },
  stepper: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
}));

export const useStepIconStyles = makeStyles((theme) => ({
  root: {
    width: 10,
    height: 10,
    borderRadius: "50%",
    backgroundColor: theme.palette.grey[300],
  },
  active: {
    backgroundColor: theme.palette.success.main,
  },
  completed: {
    backgroundColor: theme.palette.success.main,
  },
}));
