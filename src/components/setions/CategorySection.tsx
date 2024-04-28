import { memo } from "react";

import { map } from "lodash";
import { Grid } from "@mui/material";

import { categoryData } from "../../data/category";
import { CustomTitle } from "../common/CustomTitle";
import { CategoryCard } from "../common/CategoryCard";
import { categorySectionSX } from "../../helper/styleObjects/homeSection";

export const CategorySection = memo(() => {
  return (
    <Grid sx={categorySectionSX}>
      <Grid className="category-container">
        <CustomTitle title="Product Categorization" />
        <Grid container className="category-cards-wrapper">
          {map(categoryData, ({ id, image, name }) => (
            <Grid item xs={12} md={2.85} key={id}>
              <CategoryCard id={0} name={name} image={image} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
});
