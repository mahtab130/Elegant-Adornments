import { FC } from "react";

import { Grid } from "@mui/material";

import { HeadingPage } from "../common/HeadingPage";
import { CustomImage } from "../controller/CustomImage";
import { ContentSection } from "../common/ContentSection";
import { servicesSX } from "../../helper/styleObjects/services";

import image1 from "../../assets/images/servieces/image-service-1.webp";
import image2 from "../../assets/images/servieces/image-service-2.webp";
import vector from "../../assets/images/vectors/vector-about-us.webp";
import backgrounImage from "../../assets/images/servieces/services-back.webp";
import vectorGray from "../../assets/images/vectors/vector-crooked-line-gray.webp";

const Services: FC = () => {
  return (
    <Grid sx={servicesSX}>
      <HeadingPage
        title="Services"
        image={backgrounImage}
        description="Elegant Adornments store is a gallery that offers you the most beautiful collection of handmade jewelry and jewelry by combining traditional art and modern designs."
      />
      <Grid className="second-section">
        <ContentSection
          setting={{ vectorSrc: vectorGray }}
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
          setting={{ reverse: true, vectorSrc: vectorGray }}
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

export default Services;
