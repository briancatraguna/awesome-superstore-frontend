import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { MenuItem } from "@mui/material";
import { updateCustomer } from "../../api/apiService";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCustomerIdState } from "../../redux/authSlice";
const customerSegmentOptions = [
  {
    value: "1",
    label: "Consumer",
  },
  {
    value: "2",
    label: "Corporate",
  },
  {
    value: "3",
    label: "Home Office",
  },
];

const UserDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const customerId = useSelector((state) => state.auth.customerId);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const fullName = data.get("fullName");
    const email = data.get("email");
    const customerSegment = data.get("customerSegment");
    try {
      const response = await updateCustomer(customerId, fullName, customerSegment, email);
      
    } catch (error) {
      
    }
  };

  return (
    <>
      <Container component="main" maxWidth="xs" sx={{ pt: 1, pb: 5 }}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <AccountCircleIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            User Details
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="fullName"
              label="Full Name"
              name="fullName"
              autoComplete="fullName"
              type="text"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              type="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              select
              name="customerSegment"
              label="Customer Segment"
              helperText="Please select Customer Segment"
            >
              {customerSegmentOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <Grid container spacing={3}>
              <Grid item xs>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Edit Details
                </Button>
              </Grid>
              <Grid item xs>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Change Password
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default UserDetails;
