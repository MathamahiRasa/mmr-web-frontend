import React from "react";
import ProductGrid from "./ProductGrid";
import { CssBaseline } from "@mui/material";
import data from "../../data/Products.json";

const Products = () => {
  return (
    <div>
      <CssBaseline />
      <ProductGrid products={data.productData} />
    </div>
  );
};

export default Products;
