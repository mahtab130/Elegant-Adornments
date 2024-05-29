import { memo, useMemo } from "react";

import { Box, Grid } from "@mui/material";

import { faq } from "../../data/faq";
import { SPACE_D1 } from "../../helper/constants/spaces";
import { ContentSection } from "../common/ContentSection";
import { CustomAccordion } from "../controller/CustomAccordion";

import image from "../../assets/images/home/image-faq.webp";
import vector1 from "../../assets/images/vectors/vector-flower-orange.webp";
import vector2 from "../../assets/images/vectors/vector-crooked-line.webp";

export const FaqSection = memo(() => {
  const imageComponent = useMemo(
    () => (
      <>
        <Box component="img" src={vector1} className="vector-1" />
        <Box component="img" src={image} className="image" />
        <Box component="img" src={vector2} className="vector-2" />
      </>
    ),
    []
  );

  return (
    <ContentSection
      image={imageComponent}
      setting={{
        reverse: true,
        sx: {
          "& .vector-1": {
            bottom: "25%",
            left: "-55px",
            width: "100px",
            height: "100px",
            position: "absolute",
          },
          "& .vector-2": {
            top: "50px",
            right: "0px",
            width: "100px",
            height: "40px",
            position: "absolute",
          },
        },
      }}
      title={"Frequently Asked Questions"}
      content={
        <Grid sx={{ mt: SPACE_D1 }}>
          <CustomAccordion data={faq} />
        </Grid>
      }
    />
  );
});
