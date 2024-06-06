import React from "react";
import ProductGrid from "./ProductGrid";
import { Box, Container, CssBaseline } from "@mui/material";
import data from "../../data/Products.json";

const Products = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f5f5f5", // or any other color you prefer
      }}
    >
      <CssBaseline />
      <ProductGrid products={data.productData} />
    </Box>
  );
};

export default Products;
