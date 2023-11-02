import React, { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { DataGrid } from "@mui/x-data-grid";
import Fab from "@mui/material/Fab";
import { getAllProducts } from "../../api/apiService";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "../../routing/routes";
import {
  setAllProducts,
  updateCart,
  updateSelectedProducts,
} from "../../redux/cartSlice";
import {
  NOTIFICATION_TYPE,
  emitNotification,
} from "../../utils/emitNotification";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [productData, setProductData] = useState([]);
  const reduxCart = useSelector((state) => state.cart.cart);
  const reduxSelectedProduct = useSelector(
    (state) => state.cart.selectedProducts
  );

  const onRowsSelectionHandler = (ids) => {
    setCart(ids);
    dispatch(updateSelectedProducts(ids));
  };

  const addSelectedProductstoCart = async () => {
    var cartSet = new Set(cart);

    var addDataToReduxCart = new Array(reduxCart);

    for (var i = 0; i < addDataToReduxCart.length; i++) {
      if (!cartSet.has(addDataToReduxCart.id)) {
        addDataToReduxCart.splice(i, 1);
      }
    }

    productData.forEach((product) => {
      if (cartSet.has(product.id)) {
        var isItemPresentInReduxCart = false;

        for (var i = 0; i < addDataToReduxCart.length; i++) {
          if (addDataToReduxCart[i].id === product.id) {
            isItemPresentInReduxCart = true;
            break;
          }
        }

        if (!isItemPresentInReduxCart) {
          addDataToReduxCart.push(product);
        }
      }
    });
    dispatch(updateCart(addDataToReduxCart));
    emitNotification(
      NOTIFICATION_TYPE.SUCCESS,
      "Cart Updated Succesfully. Redirecting you to cart shortly ...."
    );
    await setTimeout(() => {
      navigate(ROUTE_PATHS.cart);
    }, 6000);
  };

  useEffect(() => {
    getAllProducts().then((data) => {
      setProductData(data.data.products);
      dispatch(setAllProducts(data.data.products));
      setCart(reduxSelectedProduct);
    });
  }, []);

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
              onClick={addSelectedProductstoCart}
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

          <DataGrid
            sx={{ mb: 10 }}
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
