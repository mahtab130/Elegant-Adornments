import { memo } from "react";

import { Box, Grid, Typography } from "@mui/material";

import { categoryCardSX } from "../../helper/styleObjects/common";

import vector from "../../assets/images/vectors/vector-diamond-category.webp";

export const CategoryCard = memo<ICategoryCard>(({ image, name, onClick }) => {
  return (
    <Grid sx={categoryCardSX} onClick={onClick}>
      <Grid className="title-wrapper">
        <Typography className="title">{name}</Typography>
        <Box component="img" className="vector" src={vector} />
      </Grid>
      <Grid>
        <Box component="img" className="image" src={image} />
      </Grid>
    </Grid>
  );
});
