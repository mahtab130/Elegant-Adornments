import { memo } from "react";

import { Box } from "@mui/material";

import { faq } from "../../data/faq";
import { ContentSection } from "../common/ContentSection";
import { CustomAccordion } from "../controller/CustomAccordion";

import image from "../../assets/images/home/image-faq.png";
import vector1 from "../../assets/images/vectors/vector2.png";
import vector2 from "../../assets/images/vectors/vector3.png";

export const FaqSection = memo(() => {
  const imageComponent = (
    <>
      <Box component="img" src={vector1} className="vector-1" />
      <Box component="img" src={image} className="image" />
      <Box component="img" sx={{}} src={vector2} className="vector-2" />
    </>
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
            right: "50px",
            width: "100px",
            height: "40px",
            position: "absolute",
          },
        },
      }}
      title={"Frequently Asked Questions"}
      content={<CustomAccordion data={faq} />}
    />
  );
});
