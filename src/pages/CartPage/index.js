import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import {
  addQuantity,
  removeQuantity,
  removeProductFromCartAndSelection,
} from "../../redux/cartSlice";

const CartPage = () => {
  const cartData = useSelector((state) => state.cart.cart);
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();

  const onAddQuantityClick = (product) => {
    dispatch(addQuantity(product));
  };
  const onRemoveQuantityClick = (product) => {
    dispatch(removeQuantity(product));
  };
  const onDeleteItemClick = (product) => {
    dispatch(removeProductFromCartAndSelection(product));
  };

  useEffect(() => {}, []);
  useEffect(() => {
    var newTotal = 0;
    cartData.forEach((product) => {
      newTotal += product.quantity * product.price;
    });
    setTotal(newTotal);
  }, [cartData]);
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
          <Typography component="h1" variant="h2" sx={{ mt: 3 }}>
            Your Cart
          </Typography>
          <Typography variant="h6" sx={{ mb: 3 }}>
            Items in your cart are below
          </Typography>
        </Box>
        {cartData.map((product) => (
          <Paper
            variant="outlined"
            sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
          >
            <Grid container spacing={1}>
              <Grid item xs={8}>
                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                  ID : {product.product_id}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  Product Name : {product.product_name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Category : {product.category_name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Sub-Category : {product.sub_category_name}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Product Market : {product.market}
                </Typography>
                <Typography variant="button" display="block" gutterBottom>
                  Unit Price : ${product.price}
                </Typography>
              </Grid>

              <Divider orientation="vertical" flexItem />

              <Grid
                item
                xs={3}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Quantity
                </Typography>
                <Grid
                  container
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Grid item xs={4} textAlign="center">
                    <IconButton
                      aria-label="minus"
                      size="large"
                      onClick={(e) => onRemoveQuantityClick(product)}
                    >
                      <RemoveCircleOutlineIcon
                        fontSize="inherit"
                        color="secondary"
                      />
                    </IconButton>
                  </Grid>
                  <Grid item xs={4} textAlign="center">
                    {product.quantity}
                  </Grid>
                  <Grid item xs={4} textAlign="center">
                    <IconButton
                      aria-label="plus"
                      size="large"
                      onClick={(e) => onAddQuantityClick(product)}
                    >
                      <AddCircleOutlineIcon
                        fontSize="inherit"
                        color="secondary"
                      />
                    </IconButton>
                  </Grid>
                </Grid>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  sx={{ mt: 2 }}
                >
                  Total : ${(product.quantity * product.price).toFixed(2)}
                </Typography>
                <IconButton
                  aria-label="minus"
                  size="large"
                  onClick={(e) => onDeleteItemClick(product)}
                >
                  <DeleteIcon fontSize="inherit" color="error" />
                </IconButton>
              </Grid>
            </Grid>
          </Paper>
        ))}
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" sx={{ mb: 5 }}>
            Your Total is {total}
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default CartPage;
