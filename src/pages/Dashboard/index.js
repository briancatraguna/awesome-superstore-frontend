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

const Dashboard = () => {
  const [cart, setCart] = useState([
    "TEC-PH-2878-1-1",
    "TEC-PH-3017-1-1",
    "TEC-PH-3121-1-1",
    "TEC-PH-3127-3-1",
    "TEC-PH-3128-1-1",
  ]);

  const onRowsSelectionHandler = (ids) => {
    // const selectedRowsData = ids.map((id) =>
    //   productData.find((row) => row.id === id)
    // );
    // console.log(selectedRowsData);
    console.log(ids);
    setCart(ids);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 150, hide: true },
    { field: "product_id", headerName: "Product ID", width: 150 },
    { field: "product_name", headerName: "Product Name", width: 400 },
    { field: "market", headerName: "Market", width: 100 },
    { field: "category_name", headerName: "Category Name", width: 150 },
    { field: "sub_category_name", headerName: "Sub Category Name", width: 200 },
  ];

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
          {cart.length !== 0 && (
            <Fab
              style={{ position: "fixed" }}
              variant="extended"
              color="primary"
            >
              <ShoppingCartIcon sx={{ mr: 1 }} />
              Add to Cart
            </Fab>
          )}

          <Typography component="h1" variant="h2" sx={{ mt: 10 }}>
            Welcome to Awesome Inc. Superstore
          </Typography>
          <Typography variant="h6" sx={{ mb: 3 }}>
            Select products below to add to cart
          </Typography>
          {/* <Box sx={{ mt: 1 }}> */}

          <DataGrid
            autoHeight
            rows={productData}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 25 },
              },
              columns: {
                columnVisibilityModel: {
                  id: false,
                },
              },
            }}
            onRowSelectionModelChange={(ids) => onRowsSelectionHandler(ids)}
            pageSizeOptions={[25, 50]}
            checkboxSelection
            rowSelectionModel={cart}
          />
          {/* </Box> */}
        </Box>
      </Container>
    </>
  );
};

export default Dashboard;
