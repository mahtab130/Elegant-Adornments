import { memo } from "react";

import { map } from "lodash";
import { Box, Grid, Typography } from "@mui/material";

import { ContentSection } from "../common/ContentSection";
import { contentServicesSX } from "../../helper/styleObjects/homeSection";

import image from "../../assets/images/home/home-services.webp";

export const ServicesSection = memo(() => {
  return (
    <ContentSection
      image={image}
      title={"Our Services"}
      content={<Content />}
      setting={{
        reverse: true,
        imageWidth: "100%",
        sx: {
          "& .left-section": {
            "& .image": {
              ml: "-55px",
            },
          },
          "& .right-section": {
            "& .vector": {
              top: "-30px",
              left: "50%",
            },
          },
        },
      }}
    />
  );
});

const Content = memo(() => {
  return (
    <Grid sx={contentServicesSX}>
      {map(data, ({ description, id, title }) => (
        <Grid container key={id} className="item">
          <Grid item xs={1} md={1} className="number-wrapper">
            <Typography className="number">
              <Box component="span">{id}</Box>
            </Typography>
          </Grid>
          <Grid item xs={10.8} md={10.8} className="texts-wrapper">
            <Typography className="title">{title}</Typography>
            <Typography className="description">{description}</Typography>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
});

const data = [
  {
    id: 1,
    title: "Buying and selling jewelry",
    description:
      "The store offers customers the opportunity to buy and jewelry including rings, earrings, bracelets, and chains.",
  },
  {
    id: 2,
    title: "Offering a variety of jewelry",
    description:
      "The store offers customers the opportunity to buy and jewelry including rings, earrings, bracelets, and chains.",
  },
  {
    id: 3,
    title: "Presentation of jewelry",
    description:
      "The store offers customers the opportunity to buy and jewelry including rings, earrings, bracelets, and chains.",
  },
];
