import React from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  TextField,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useRecoilState } from "recoil";
import { userAddressState } from "../atoms/AddressAtom";

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

const AddressForm = () => {
  //Not required as of now
  const [formData, setFormData] = useRecoilState(userAddressState);

  const handleChange = (event) => {
    const { name, value, checked, type } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    //Add API call after the BE is up
    event.preventDefault();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 600,
        margin: "0 auto",
        padding: 4,
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        borderRadius: 4,
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <StyledTextField
            required
            id="firstName"
            name="firstName"
            label="First Name"
            value={formData.firstName}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <StyledTextField
            required
            id="lastName"
            name="lastName"
            label="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <StyledTextField
            required
            id="addressLine1"
            name="addressLine1"
            label="Address Line 1"
            placeholder="Street name and number"
            value={formData.addressLine1}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <StyledTextField
            id="addressLine2"
            name="addressLine2"
            label="Address Line 2"
            placeholder="Apartment, suite, unit, etc. (optional)"
            value={formData.addressLine2}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <StyledTextField
            required
            id="city"
            name="city"
            label="City"
            value={formData.city}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <StyledTextField
            required
            id="state"
            name="state"
            label="State"
            value={formData.state}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <StyledTextField
            required
            id="zipCode"
            name="zipCode"
            label="Zip / Postal Code"
            value={formData.zipCode}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <StyledTextField
            required
            id="country"
            name="country"
            label="Country"
            value={formData.country}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl>
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.useForPayment}
                  onChange={handleChange}
                  name="useForPayment"
                  color="primary"
                />
              }
              label="Use this address for payment details"
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ borderRadius: 10 }}
          >
            Save the Address
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddressForm;
