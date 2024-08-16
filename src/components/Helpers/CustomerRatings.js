import { IconButton, Rating, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";
import DriveFileRenameOutlineTwoToneIcon from "@mui/icons-material/DriveFileRenameOutlineTwoTone";

const CustomerRatings = () => {
  const [readOnly, setReadOnly] = useState(false);
  const [value, setValue] = useState(0);

  const handleReviewSubmit = (event) => {
    setValue(event.target.value);
    setReadOnly(true);
  };

  const handleReviewChange = () => {
    setValue(value);
    setReadOnly(false);
  };

  return (
    <div>
      <div>
        {/* ⭐  */}
        <div>
          <Typography variant="body2">
            How did you like our product
            <Tooltip title="Edit Review">
              <IconButton>
                <DriveFileRenameOutlineTwoToneIcon
                  onClick={() => handleReviewChange()}
                />
              </IconButton>
            </Tooltip>
          </Typography>
        </div>
        <div class="container">
          <Rating
            size="large"
            name="half-rating"
            value={value}
            precision={0.5}
            onChange={(e) => {
              handleReviewSubmit(e);
            }}
            readOnly={readOnly}
          />
        </div>
        {readOnly ? (
          <Typography variant="body2">Thanks for your review</Typography>
        ) : null}
      </div>
    </div>
  );
};

export default CustomerRatings;
