import { memo } from "react";

import { map, slice } from "lodash";
import { Grid } from "@mui/material";

import { CustomTitle } from "../common/CustomTitle";
import { ProductCard } from "../common/ProductCard";
import { AnimationSlideIn } from "../common/AnimateComponent";
import { COLOR_WHITE, COLOR_PRIMARY } from "../../helper/constants/colors";
import { bestSellingSectionSX } from "../../helper/styleObjects/homeSection";
import { useProductSearch } from "../../helper/services/hooks/all";
import { handleImageUrl } from "../../helper/utils/handlers";

export const BestSellingSection = memo(() => {
  const { data: productData } = useProductSearch();

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
          {map(
            slice(productData, 0, 4),
            ({ id, imageUrl, name, price, rate }) => (
              <Grid item xs={12} md={2.85} key={id}>
                <AnimationSlideIn direction={"left"}>
                  <ProductCard
                    id={id}
                    name={name}
                    rate={rate}
                    price={price}
                    image={handleImageUrl(imageUrl)}
                    variant="sale"
                  />
                </AnimationSlideIn>
              </Grid>
            )
          )}
        </Grid>
      </Grid>
    </Grid>
  );
});
