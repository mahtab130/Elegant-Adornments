import { FC } from "react";

import { useNavigate } from "react-router-dom";
import { Grid, Typography } from "@mui/material";

import { heartEyesIcon } from "../other/SvgComponent";
import { CustomDialog } from "../controller/CustomDialog";
import { COLOR_PRIMARY } from "../../helper/constants/colors";
import { dialogContentSX } from "../../helper/styleObjects/common";

export const ShoppingModalProduct: FC<{
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
}> = ({ openModal, setOpenModal }) => {
  const navigate = useNavigate();

  return (
    <CustomDialog
      open={openModal}
      dialogAction={{
        cancelButton: {
          variant: "outlined",
          text: "Continue Shopping",
          customColor: COLOR_PRIMARY,
          onClick: () => setOpenModal(false),
        },
        submitButton: {
          variant: "contained",
          text: "Processed To Buy",
          customColor: COLOR_PRIMARY,
          onClick: () => navigate("/carts"),
        },
      }}
      dialogContent={
        <Grid sx={dialogContentSX} className="content">
          <Typography className="title">
            {heartEyesIcon()} You Have Good Taste!
          </Typography>
          <Typography className="description">
            The product has been successfully added to the cart
          </Typography>
        </Grid>
      }
    />
  );
};
