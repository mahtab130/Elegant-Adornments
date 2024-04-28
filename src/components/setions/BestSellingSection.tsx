import { memo } from "react";

import { map } from "lodash";
import { Grid } from "@mui/material";

import { CustomTitle } from "../common/CustomTitle";
import { ProductCard } from "../common/ProductCard";
import { bestSellingData } from "../../data/product";
import { COLOR_WHITE, COLOR_PRIMARY } from "../../helper/constants/colors";
import { bestSellingSectionSX } from "../../helper/styleObjects/homeSection";

export const BestSellingSection = memo(() => {
  return (
    <Grid sx={bestSellingSectionSX}>
      <Grid className="container">
        <CustomTitle
          setting={{ iconColor: COLOR_PRIMARY, color: COLOR_WHITE }}
          title="Best-selling Products"
        />
        <Grid container className="product-cards-wrapper">
          {map(bestSellingData, ({ id, image, name, price, rate }) => (
            <Grid item xs={12} md={2.85} key={id}>
              <ProductCard
                variant="sale"
                id={id}
                name={name}
                price={price}
                image={image}
                rate={rate}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
});
