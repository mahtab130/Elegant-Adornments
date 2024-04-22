import { memo } from "react";

import { map } from "lodash";
import { Box, Grid, Typography } from "@mui/material";

import { categoryData } from "../../data/category";
import { CategoryCard } from "../common/CategoryCard";
import { arrowRightIcon } from "../other/SvgComponent";

import backImage from "../../assets/images/back-image-2.webp";
import { categorySectionSX } from "../../helper/styleObjects/sections";

export const CategorySection = memo(() => {
  return (
    <Grid sx={categorySectionSX}>
      <Grid className="category-container">
        <Typography className="title-category">
          Product Categorization {arrowRightIcon()}
          <Box component="img" className="vector-image" src={backImage} />
        </Typography>
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
