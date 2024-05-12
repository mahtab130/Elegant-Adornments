import { FC } from "react";

import { Grid } from "@mui/material";

import { HeadingPage } from "../common/HeadingPage";
import { CustomImage } from "../controller/CustomImage";
import { ContentSection } from "../common/ContentSection";

import image2 from "../../assets/images/aboutUs/image-about-us-1.webp";
import image1 from "../../assets/images/aboutUs/image-about-us-2.webp";
import vector from "../../assets/images/vectors/vector-about-us.webp";
import backgroundImage from "../../assets/images/aboutUs/about-us-back.webp";
import { AboutUsSX } from "../../helper/styleObjects/aboutUs";

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
