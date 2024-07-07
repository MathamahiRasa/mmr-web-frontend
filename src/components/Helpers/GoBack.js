import React from "react";
import { SvgIcon } from "@mui/material";
import { useStyles } from "./HelperStyles/GoBackStyles";
import { goBack } from "../../data/svg_data";

const GoBack = ({ onClick }) => {
  const classes = useStyles();
  return (
    <div>
      <button onClick={onClick} className={classes.button}>
        <SvgIcon className={classes.icon} viewBox="0 0 1024 1024">
          <path d={goBack} />
        </SvgIcon>
        <span className={classes.goBackText}>Back</span>
      </button>
    </div>
  );
};

export default GoBack;
