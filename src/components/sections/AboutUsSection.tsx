import { memo } from "react";

import { Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { CustomButton } from "../controller/CustomButton";
import { ContentSection } from "../common/ContentSection";
import { aboutUsSectionSX } from "../../helper/styleObjects/homeSection";

import image from "../../assets/images/home/home-about-us.webp";

export const AboutUsSection = memo(() => {
  const navigate = useNavigate();

  return (
    <ContentSection
      setting={{
        sx: aboutUsSectionSX,
      }}
      image={image}
      title={"About Us"}
      content={
        <>
          <Typography className="description">
            Welcome to our exquisite jewelry store,where elegance meets
            crasmanship Discover a dazzling array of fine jewelry, from stunning
            diamond rings to elegant pearl necklaces. Our curated collection
            offers timeless pieces that exude sophistication and style. Whether
            you're looking for a special gift or treating yourself to something
            beautiful our knowledgeable staff is here to assist you in finding
            the perfect piece . Visit us today and experience the of our
            exceptional jewelry selection.
          </Typography>
          <Grid>
            <CustomButton
              text="See More"
              className="button"
              variant="contained"
              onClick={() => navigate("/about-us")}
            />
          </Grid>
        </>
      }
    />
  );
});
