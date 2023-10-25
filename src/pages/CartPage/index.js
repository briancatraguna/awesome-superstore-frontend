import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { productData } from "../../utils/product-data-json";
import { DataGrid } from "@mui/x-data-grid";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

const CartPage = () => {
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
          <Typography component="h1" variant="h2" sx={{ mt: 10 }}>
            Cart Page
          </Typography>
          <Typography variant="h6" sx={{ mb: 3 }}>
            Items in your cart are below
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default CartPage;
