import {
  Box,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from "@mui/material";
import React from "react";
import { useStyles } from "./OrderStyles/OrderFilterStyles";

const OrderFilter = ({ handleCheckBox }) => {
  const classes = useStyles();

  return (
    <Box className={classes.rootBox}>
      <FormControl sx={{ m: 9 }} component="fieldset" variant="standard">
        <FormLabel component="legend">
          <h2>Filter</h2>
        </FormLabel>
        <Divider />
        <FormGroup>
          <FormControlLabel
            value="end"
            control={<Checkbox onChange={() => handleCheckBox(0)} />}
            label="On the way"
            labelPlacement="end"
          />
          <FormControlLabel
            value="end"
            control={<Checkbox onChange={() => handleCheckBox(1)} />}
            label="Shipped"
            labelPlacement="end"
          />
          <FormControlLabel
            value="end"
            control={<Checkbox onChange={() => handleCheckBox(2)} />}
            label="Delivered"
            labelPlacement="end"
          />
          <FormControlLabel
            value="end"
            control={<Checkbox onChange={() => handleCheckBox(3)} />}
            label="Cancelled"
            labelPlacement="end"
          />
          <FormControlLabel
            value="end"
            control={<Checkbox onChange={() => handleCheckBox(4)} />}
            label="Returned"
            labelPlacement="end"
          />
        </FormGroup>
        <Divider />
      </FormControl>
    </Box>
  );
};

export default OrderFilter;
