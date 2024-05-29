import { FC } from "react";
import { Grid, SxProps, Theme } from "@mui/material";

import { CustomTitle } from "../common/CustomTitle";
import { SPACE_H1, SPACE_H3 } from "../../helper/constants/spaces";
// import { IInputs, InputsProvider } from "../advances/InputsProvider";

const BillingDetails: FC = () => {
  return (
    <Grid container xs={12} sx={billingDetailsSx}>
      <Grid xs={12} md={6} className="inputs-wrapper">
        <CustomTitle title="Billing details" />
        <form className="form-wrapper">
          {/* <InputsProvider inputs={inputs} formik={undefined} /> */}
        </form>
      </Grid>
      <Grid xs={12} md={6} className="price-box"></Grid>
    </Grid>
  );
};

export default BillingDetails;

const billingDetailsSx: SxProps<Theme> = {
  width: "100%",
  "& .inputs-wrapper": {
    width: "100%",
    height: "100%",
    px: SPACE_H3,
    mt: SPACE_H3,
    pt: SPACE_H3,
    "& .form-wrapper": {
      width: "100%",
      mt: SPACE_H1,
    },
  },
  "& .price-box": {
    height: "100vh",
    backgroundColor: "#E7EDEF",
  },
};
