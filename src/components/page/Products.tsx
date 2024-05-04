import { Grid, SxProps, Theme } from "@mui/material";
import { HeadingPage } from "../common/HeadingPage";

import backgrounImage from "../../assets/images/servieces/services-image.webp";

const Products = () => {
  return (
    <Grid sx={productsSX}>
      <HeadingPage
        title="Products"
        image={backgrounImage}
        description="Elegant Adornments store is a gallery that offers you the most beautiful collection of handmade jewelry and jewelry by combining traditional art and modern designs."
      />
    </Grid>
  );
};

export default Products;

const productsSX: SxProps<Theme> = {};
