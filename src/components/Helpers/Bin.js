import React from "react";
import { svg_bin_bottom, svg_bin_top } from "../../data/svg_data";
import { useStyles } from "./HelperStyles/BinStyles";

const Bin = ({ onClick }) => {
  const classes = useStyles();

  return (
    <button onClick={onClick} className={classes.button}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 69 14"
        className={`${classes.svgIcon} ${classes.binTop}`}
      >
        <path fill="black" d={svg_bin_top}></path>
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 69 57"
        className={classes.svgIcon}
      >
        <path fill="black" d={svg_bin_bottom}></path>
      </svg>
    </button>
  );
};

export default Bin;
