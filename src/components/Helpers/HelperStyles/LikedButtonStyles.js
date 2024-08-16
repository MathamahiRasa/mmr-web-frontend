import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  uiLike: {
    "--icon-size": "24px",
    "--icon-secondary-color": "rgb(255, 255, 255)",
    "--icon-hover-color": "rgb(211, 205, 205)",
    "--icon-primary-color": "rgb(230, 26, 26)",
    "--icon-circle-border": "1px solid var(--icon-primary-color)",
    "--icon-circle-size": "35px",
    "--icon-anmt-duration": "0.3s",
    position: "relative",
    "& .like": {
      width: "var(--icon-size)",
      color: "green",
      height: "auto",
      cursor: "pointer",
      transition: "0.2s",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      transformOrigin: "top",
      opacity: 1,
      visibility: "visible",
      "&::after": {
        content: '""',
        position: "absolute",
        width: "10px",
        height: "10px",
        boxShadow: `
              0 30px 0 -4px var(--icon-primary-color),
              30px 0 0 -4px var(--icon-primary-color),
              0 -30px 0 -4px var(--icon-primary-color),
              -30px 0 0 -4px var(--icon-primary-color),
              -22px 22px 0 -4px var(--icon-primary-color),
              -22px -22px 0 -4px var(--icon-primary-color),
              22px -22px 0 -4px var(--icon-primary-color),
              22px 22px 0 -4px var(--icon-primary-color)
            `,
        borderRadius: "50%",
        transform: "scale(0)",
      },
      "&::before": {
        content: '""',
        position: "absolute",
        borderRadius: "50%",
        border: "var(--icon-circle-border)",
        opacity: 0,
      },
    },
    "&:hover .like": {
      fill: "var(--icon-hover-color)",
    },

    //Animation when input is checked
    "& input:checked + .like::after": {
      animation:
        "$circles var(--icon-anmt-duration) cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards",
      animationDelay: "var(--icon-anmt-duration)",
    },
    "& input:checked + .like": {
      fill: "var(--icon-primary-color)",
      animation: "$like var(--icon-anmt-duration) forwards",
      transitionDelay: "0.3s",
    },
    "& input:checked + .like::before": {
      animation:
        "$circle var(--icon-anmt-duration) cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards",
      animationDelay: "var(--icon-anmt-duration)",
    },

    //Animation when input is unchecked
    "& input:not(:checked) + .like::before": {
      animation:
        "$circles var(--icon-anmt-duration) cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards",
      animationDelay: "var(--icon-anmt-duration)",
    },
    "& input:not(:checked) + .like": {
      //   fill: "var(--icon-primary-color)",
      animation: "$like var(--icon-anmt-duration) forwards",
      transitionDelay: "0.3s",
    },
    "& input:not(:checked) + .like::after": {
      animation:
        "$circle var(--icon-anmt-duration) cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards",
      animationDelay: "var(--icon-anmt-duration)",
    },
  },
  "@keyframes like": {
    "50%": {
      transform: "scaleY(0.6)",
    },
    "100%": {
      transform: "scaleY(1)",
    },
  },
  "@keyframes circle": {
    from: {
      width: 0,
      height: 0,
      opacity: 0,
    },
    "90%": {
      width: "var(--icon-circle-size)",
      height: "var(--icon-circle-size)",
      opacity: 1,
    },
    to: {
      opacity: 0,
    },
  },
  "@keyframes circles": {
    from: {
      transform: "scale(0)",
    },
    "40%": {
      opacity: 1,
    },
    to: {
      transform: "scale(0.8)",
      opacity: 0,
    },
  },
}));
