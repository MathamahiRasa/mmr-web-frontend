import { Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";

const StyledTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    backgroundColor: "#f5f5f5",
    borderRadius: 20,
    fontWeight: 200, // Light font weight
    "& fieldset": {
      borderColor: "#e2e2e1",
    },
    "&:hover fieldset": {
      borderColor: "#ababab",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#007FFF",
      boxShadow: "0 0 0 2px rgba(0, 127, 255, 0.25)",
    },
  },
});

const UpdatePassword = () => {
  const [passData, setPassData] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPassData({
      ...passData,
      [name]: value,
    });
  };

  console.log(passData);

  const handleSubmit = (event) => {
    //Add API call after the BE is up
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2} padding="10px">
        <Grid item xs={12}>
          <StyledTextField
            required
            id="newpassword"
            name="newpassword"
            label="New Password"
            placeholder="New Password"
            // value={formData.addressLine1}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <StyledTextField
            required
            id="repeatpassword"
            name="repeatpassword"
            label="Repeat Password"
            placeholder="Repeat Password"
            // value={formData.addressLine1}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ borderRadius: 10, display: "flex", alignItem: "right" }}
          >
            Save password
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default UpdatePassword;
