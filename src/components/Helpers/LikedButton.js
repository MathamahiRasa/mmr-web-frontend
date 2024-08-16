import { Checkbox } from "@mui/material";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import React from "react";
import { useStyles } from "./HelperStyles/LikedButtonStyles";

const LikedButton = () => {
  const classes = useStyles();
  return (
    <label>
      <Checkbox
        className={classes.uiLike}
        icon={<FavoriteBorder className="like" />}
        checkedIcon={<Favorite className="like" />}
      />
    </label>
  );
};

export default LikedButton;
