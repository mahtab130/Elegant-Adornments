import { memo } from "react";

import { Grid, Typography } from "@mui/material";

import { ContentSection } from "../common/ContentSection";
import { CustomButton } from "../controller/CustomButton";
import { FONT_BODY_MEDIUM2 } from "../../helper/constants/fonts";
import { COLOR_SECEONDRY } from "../../helper/constants/colors";
import { SPACE_D2, SPACE_D1, SPACE_XS1 } from "../../helper/constants/spaces";

import image from "../../assets/images/home/image-about-us.png";

export const AboutUsSection = memo(() => {
  return (
    <ContentSection
      setting={{
        sx: {
          "& .right-section": {
            "& .vector": {
              right: "-130px",
              top: "-70px",
            },
          },
        },
      }}
      image={image}
      title={"Abut Us"}
      content={
        <>
          <Typography sx={{ fontSize: FONT_BODY_MEDIUM2, lineHeight: "22px" }}>
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
              variant="contained"
              sx={{
                mt: SPACE_D2,
                px: SPACE_D1,
                py: SPACE_XS1,
                "&:hover": {
                  color: COLOR_SECEONDRY,
                  outline: "1px solid" + COLOR_SECEONDRY,
                },
              }}
              text="See More"
            />
          </Grid>
        </>
      }
    />
  );
});
