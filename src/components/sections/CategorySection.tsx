import { memo } from "react";

import { map } from "lodash";
import { Grid } from "@mui/material";

import { categoryData } from "../../data/category";
import { CustomTitle } from "../common/CustomTitle";
import { CategoryCard } from "../common/CategoryCard";
import { AnimationSlideIn } from "../common/AnimateComponent";
import { categorySectionSX } from "../../helper/styleObjects/homeSection";
import { useNavigate } from "react-router-dom";

export const CategorySection = memo(() => {
  const navigate = useNavigate();
  return (
    <Grid sx={categorySectionSX}>
      <Grid className="category-container">
        <AnimationSlideIn direction="up">
          <CustomTitle title="Product Categorization" />
        </AnimationSlideIn>
        <Grid container className="category-cards-wrapper">
          {map(categoryData, ({ id, thumbnail, name }, index) => (
            <Grid item xs={12} md={2.85} key={id}>
              <AnimationSlideIn direction={index < 4 ? "left" : "right"}>
                <CategoryCard
                  id={id}
                  name={name}
                  onClick={() => navigate(`/category/${id}`)}
                  image={thumbnail || ""}
                />
              </AnimationSlideIn>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
});
