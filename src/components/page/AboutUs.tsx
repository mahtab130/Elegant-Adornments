import { FC } from "react";

import { Grid, SxProps, Theme } from "@mui/material";

import { HeadingPage } from "../common/HeadingPage";
import { CustomImage } from "../controller/CustomImage";
import { ContentSection } from "../common/ContentSection";
import { FONT_BODY_MEDIUM2 } from "../../helper/constants/fonts";
import { SPACE_H2, SPACE_M1 } from "../../helper/constants/spaces";

import image2 from "../../assets/images/aboutUs/image-1.webp";
import image1 from "../../assets/images/aboutUs/image-2.webp";
import vector from "../../assets/images/vectors/vector-about-us.png";
import backgroundImage from "../../assets/images/aboutUs/About-us.webp";

const AboutUs: FC = () => {
  return (
    <Grid sx={AboutUsSX}>
      <HeadingPage
        title="About Us"
        image={backgroundImage}
        description="Elegant Adornments store is a gallery that offers you the most beautiful collection of handmade jewelry and jewelry by combining traditional art and modern designs."
      />
      <Grid className="second-section">
        <ContentSection
          image={image1}
          title={"About the store"}
          content={
            <>
              <Grid className="description">
                Elegant Adornments store is a gallery that offers you the most
                beautiful collection of handmade jewelry and jewelry by
                combining traditional art and modern designs. and has a history
                of 5 years . In this store, you can choose from a variety of
                beautiful necklaces, bracelets, rings , earrings and pendants.
                All these products are made by prominent designers and artists
                of thecountry and using precious stones and pure gold, they have
                an amazing effect.
              </Grid>
              <Grid className="vector-wrapper">
                <CustomImage className="vector-one" src={vector} />
              </Grid>
            </>
          }
        />
        <ContentSection
          setting={{ reverse: true }}
          image={image2}
          title={"About store staff"}
          content={
            <>
              <Grid className="description">
                Elegant Adornments store is a gallery that offers you the most
                beautiful collection of handmade jewelry and jewelry by
                combining traditional art and modern designs. and has a history
                of 5 years . In this store, you can choose from a variety of
                beautiful necklaces, bracelets, rings , earrings and pendants.
                All these products are made by prominent designers and artists
                of thecountry and using precious stones and pure gold, they have
                an amazing effect.
              </Grid>
              <Grid className="vector-wrapper two">
                <CustomImage className="vector-two" src={vector} />
              </Grid>
            </>
          }
        />
      </Grid>
    </Grid>
  );
};

export default AboutUs;

const AboutUsSX: SxProps<Theme> = {
  width: "100%",

  "& .second-section": {
    py: SPACE_H2,
    "& .description": {
      mt: SPACE_M1,
      fontSize: FONT_BODY_MEDIUM2,
      lineHeight: "25px",
    },
    "& .vector-wrapper": {
      width: "100%",
      height: "130px",
      position: "relative",
      "&.two": {
        justifyContent: "flex-start",
      },
      "& .vector-one": {
        top: "-20px",
        right: "-30px",
        width: "460px",
        position: "absolute",
      },
      "& .vector-two": {
        width: "390px",
        left: "-90px",
        top: "0px",
        position: "absolute",
        transform: "scaleX(-0.9)",
      },
    },
  },
};
