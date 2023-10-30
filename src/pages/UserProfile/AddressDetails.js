import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import HomeIcon from "@mui/icons-material/Home";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useSelector } from "react-redux";
import { getAddressByCustomerId } from "../../api/apiService";

const AddressDetails = () => {
  const customerId = useSelector((state) => state.auth.customerId);
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    const fetchAddress = async () => {
      const response = await getAddressByCustomerId(customerId);
      setAddresses(response.data);
    }

    fetchAddress();
  },[customerId])

  return (
    <>
      <Container component="main" maxWidth="xs" fullWidth sx={{ pt: 1, pb: 5 }}>
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
            <HomeIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Address Details
          </Typography>
          <Button fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Add new Address
          </Button>
          <Typography component="h2" variant="h6">
            Your existing addresses
          </Typography>

          {addresses.map((address) => (
            <Card variant="outlined" sx={{ minWidth: 400, mt: 1, mb: 1 }}>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs>
                    <Typography variant="subtitle2" gutterBottom>
                      City : {address.city_name}
                    </Typography>
                  </Grid>
                  <Grid item xs>
                    <Typography variant="subtitle2" gutterBottom>
                      State : {address.state_name}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs>
                    <Typography variant="subtitle2" gutterBottom>
                      Country : {address.country_name}
                    </Typography>
                  </Grid>
                  <Grid item xs>
                    <Typography variant="subtitle2" gutterBottom>
                      Region : {address.region_name}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs>
                    <Typography variant="subtitle2" gutterBottom>
                      Zip Code : {address.postal_code}
                    </Typography>
                  </Grid>
                  <Grid item xs>
                    <Button fullWidth variant="contained">
                      Edit Address
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </>
  );
};

export default AddressDetails;
