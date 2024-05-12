import { memo } from "react";

import { map } from "lodash";
import { Grid } from "@mui/material";

import { CustomTitle } from "../common/CustomTitle";
import { ProductCard } from "../common/ProductCard";
import { bestSellingData } from "../../data/product";
import { AnimationSlideIn } from "../common/AnimateComponent";
import { COLOR_WHITE, COLOR_PRIMARY } from "../../helper/constants/colors";
import { bestSellingSectionSX } from "../../helper/styleObjects/homeSection";

export const BestSellingSection = memo(() => {
  return (
    <Grid sx={bestSellingSectionSX}>
      <Grid className="container">
        <AnimationSlideIn direction="up">
          <CustomTitle
            title="Best-selling Products"
            setting={{ iconColor: COLOR_PRIMARY, color: COLOR_WHITE }}
          />
        </AnimationSlideIn>
        <Grid container className="product-cards-wrapper">
          {map(bestSellingData, ({ id, image, name, price, rate }, index) => (
            <Grid item xs={12} md={2.85} key={id}>
              <AnimationSlideIn direction={index < 2 ? "left" : "right"}>
                <ProductCard
                  id={id}
                  name={name}
                  rate={rate}
                  price={price}
                  image={image}
                  variant="sale"
                />
              </AnimationSlideIn>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
});
