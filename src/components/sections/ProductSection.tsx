import { memo } from "react";

import { map } from "lodash";
import { useCart } from "react-use-cart";
import { Box, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { productData } from "../../data/product";
import { ProductCard } from "../common/ProductCard";
import { CustomTitle } from "../common/CustomTitle";
import { AnimationSlideIn } from "../common/AnimateComponent";
import { productSectionSX } from "../../helper/styleObjects/homeSection";

export const ProductSection = memo(() => {
  const navigate = useNavigate();

  const { addItem } = useCart();

  return (
    <Grid sx={productSectionSX}>
      <Box component="div" className="color-background"></Box>
      <Grid className="products-container">
        <AnimationSlideIn direction="up">
          <CustomTitle title="New Product" />
        </AnimationSlideIn>
        <Grid container className="product-cards-wrapper">
          {map(productData, ({ id, image, name, price }, index) => (
            <Grid item xs={12} onClick={() => navigate("/")} md={2.85} key={id}>
              <AnimationSlideIn direction={index < 2 ? "left" : "right"}>
                <ProductCard
                  id={id}
                  name={name}
                  price={price}
                  image={image}
                  onClickAddItem={() => addItem(productData[index] as TAny)}
                />
              </AnimationSlideIn>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
});
