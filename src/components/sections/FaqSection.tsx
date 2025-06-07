import { memo, useMemo } from "react";

import { Box, Grid } from "@mui/material";

import { SPACE_D1 } from "../../helper/constants/spaces";
import { ContentSection } from "../common/ContentSection";
import { CustomAccordion } from "../controller/CustomAccordion";

import image from "../../assets/images/home/image-faq.webp";
import vector1 from "../../assets/images/vectors/vector-flower-orange.webp";
import vector2 from "../../assets/images/vectors/vector-crooked-line.webp";
import { useFaqSearch } from "../../helper/services/hooks/all";

export const FaqSection = memo(() => {
  const { data: faqData } = useFaqSearch();

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
            display: { xs: "none", md: "block" },
          },
          "& .vector-2": {
            top: "50px",
            right: "0px",
            width: "100px",
            height: "40px",
            position: "absolute",
            display: { xs: "none", md: "block" },
          },
          "& .image": {
            display: { xs: "none", md: "block" },
          },
        },
      }}
      title={"Frequently Asked Questions"}
      content={
        <Grid sx={{ mt: SPACE_D1 }}>
          <CustomAccordion data={faqData} />
        </Grid>
      }
    />
  );
});
