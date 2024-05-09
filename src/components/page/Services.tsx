import { Grid, SxProps, Theme } from "@mui/material";

import { HeadingPage } from "../common/HeadingPage";

import backgrounImage from "../../assets/images/servieces/services-back.png";
import image1 from "../../assets/images/servieces/image1.png";
import image2 from "../../assets/images/servieces/image2.png";
import { FONT_BODY_MEDIUM2 } from "../../helper/constants/fonts";
import { SPACE_H2, SPACE_M1 } from "../../helper/constants/spaces";
import { ContentSection } from "../common/ContentSection";
import { CustomImage } from "../controller/CustomImage";
import vector from "../../assets/images/vectors/vector-about-us.png";
import vectorGray from "../../assets/images/vectors/vector-crooked-line-gray.png";

const Services = () => {
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

const servicesSX: SxProps<Theme> = {
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
