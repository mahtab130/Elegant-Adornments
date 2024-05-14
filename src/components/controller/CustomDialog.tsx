import { memo } from "react";

import {
  Theme,
  Dialog,
  SxProps,
  DialogProps,
  DialogContent,
  DialogActions,
} from "@mui/material";

import { CustomButton, TCustomButton } from "./CustomButton";
import { FONT_BODY_SMALL } from "../../helper/constants/fonts";
import { COLOR_TEXT, COLOR_WHITE } from "../../helper/constants/colors";
import { SPACE_H2, SPACE_M4, SPACE_XM1 } from "../../helper/constants/spaces";

interface IButton
  extends Pick<TCustomButton, "variant" | "customColor" | "onClick"> {
  text?: string;
}

interface ICustomDialog extends DialogProps {
  dialogAction: {
    cancelButton?: IButton;
    submitButton?: IButton;
  };
  dialogContent: JSX.Element;
}

export const CustomDialog = memo<ICustomDialog>(
  ({ dialogAction, dialogContent, open }) => {
    const { cancelButton, submitButton } = dialogAction;
    return (
      <Dialog sx={dialogSX} open={open}>
        <DialogContent>{dialogContent}</DialogContent>
        {dialogAction && (
          <DialogActions>
            <CustomButton
              text={cancelButton?.text || "Cancel"}
              {...cancelButton}
            />
            <CustomButton
              text={submitButton?.text || "Submit"}
              {...submitButton}
            />
          </DialogActions>
        )}
      </Dialog>
    );
  }
);

const dialogSX: SxProps<Theme> = {
  width: "100%",
  "& .MuiPaper-root": {
    width: "400px",
    minHeight: "240px",
    borderRadius: "14px",
    backgroundColor: COLOR_WHITE,
    px: SPACE_H2,
    py: SPACE_XM1,
    "& .MuiDialogContent-root": {
      p: "0px",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "end",
      alignItems: "center",
    },
    "& .MuiDialogActions-root": {
      display: "flex",
      justifyContent: "space-between",
      "& button": {
        fontSize: FONT_BODY_SMALL,
        px: SPACE_M4,
        borderRadius: "10px",
        "&.MuiButton-outlined": {
          color: COLOR_TEXT,
        },
      },
    },
  },
};
