import { memo } from "react";

import { map } from "lodash";
import { Grid } from "@mui/material";

import { CustomTitle } from "../common/CustomTitle";
import { CategoryCard } from "../common/CategoryCard";
import { AnimationSlideIn } from "../common/AnimateComponent";
import { categorySectionSX } from "../../helper/styleObjects/homeSection";
import { useNavigate } from "react-router-dom";
import { useCategoriesSearch } from "../../helper/services/hooks/all";
import { handleImageUrl } from "../../helper/utils/handlers";

export const CategorySection = memo(() => {
  const navigate = useNavigate();

  const { data: categoryData } = useCategoriesSearch();

  return (
    <Grid sx={categorySectionSX}>
      <Grid className="category-container">
        <AnimationSlideIn direction="up">
          <CustomTitle title="Product Categorization" />
        </AnimationSlideIn>
        <Grid container className="category-cards-wrapper">
          {map(categoryData, ({ id, thumbnail, name }) => (
            <Grid item xs={12} sm={5.9} md={2.85} key={id}>
              <AnimationSlideIn direction={"right"}>
                <CategoryCard
                  id={id}
                  name={name}
                  onClick={() => navigate(`/category/${id}`)}
                  image={handleImageUrl(thumbnail) || ""}
                />
              </AnimationSlideIn>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
});
