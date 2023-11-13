import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {FormControl, InputLabel, MenuItem} from "@mui/material";

const productMarketOptions = [
  {
    value: "1",
    label: "Africa",
  },
  {
    value: "2",
    label: " Asia Pacific",
  },
  {
    value: "3",
    label: "Europe",
  },
  {
    value: "4",
    label: "LATAM",
  },
  {
    value: "5",
    label: "USCA",
  },
];

const AddProduct = () => {

  const [productName, setProductName] = useState();
  const [unitPrice, setUnitPrice] = useState();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

  };

  return (
    <>
      <Container component="main" sx={{ pt: 2 }}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Add New Product
          </Typography>
          <TextField
              id="productName"
              name="productName"
              label="Product Name"
              fullWidth
              type="text"
              sx={{ marginLeft: 20, marginRight: 20, marginTop: 3 }}
              value={productName}
              onChange={e => setProductName(e.target.value)}/>
          <TextField
            id="unitPrice"
            name="unitPrice"
            label="Unit Price (USD)"
            type="number"
            fullWidth
            sx={{ marginLeft: 20, marginRight: 20, marginTop: 3 }}
            value={unitPrice}
            onChange={e => setUnitPrice(e.target.value)}/>
        </Box>
      </Container>
    </>
  );
};

export default AddProduct;
