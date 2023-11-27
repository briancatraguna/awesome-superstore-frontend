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
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

const OrdersPage = () => {
  const [tabValue, setTabValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setTabValue(newValue);
  };
  return (
    <>
      <Container
        component="main"
        minWidth="lg"
        maxWidth="lg"
        sx={{ pt: 2, pb: 2 }}
      >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h2" sx={{ mt: 2 }}>
            Orders
          </Typography>
        </Box>
        <Paper elevation={0}>
          <Tabs
            value={tabValue}
            onChange={handleChange}
            aria-label="disabled tabs example"
            centered
          >
            <Tab label="Past Orders"></Tab>
            <Tab label="Returned Orders"></Tab>
          </Tabs>
          {tabValue === 0 && (
            <>
              <Container
                component="main"
                minWidth="md"
                maxWidth="md"
                sx={{ mb: 4, pt: 5 }}
              >
                <Stack spacing={2} sx={{ pb: 5 }}>
                  <Card sx={{ pl: 5 }}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Order Id : 12345
                      </Typography>

                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Order Date : {new Date().toISOString()}
                      </Typography>
                      <Typography variant="body2">Total Items : 4</Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">More Details</Button>
                    </CardActions>
                  </Card>
                  <Card sx={{ pl: 5 }}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Order Id : 12345
                      </Typography>

                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Order Date : {new Date().toISOString()}
                      </Typography>
                      <Typography variant="body2">Total Items : 4</Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">More Details</Button>
                    </CardActions>
                  </Card>
                  <Card sx={{ pl: 5 }}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Order Id : 12345
                      </Typography>

                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Order Date : {new Date().toISOString()}
                      </Typography>
                      <Typography variant="body2">Total Items : 4</Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">More Details</Button>
                    </CardActions>
                  </Card>
                </Stack>
              </Container>
            </>
          )}
          {tabValue === 1 && <></>}
        </Paper>
      </Container>
    </>
  );
};

export default OrdersPage;
