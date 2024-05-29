import { ChangeEvent, memo } from "react";

import { map } from "lodash";
import { Grid, SxProps, Theme } from "@mui/material";

import {
  CustomTextfield,
  TCustomTextfield,
} from "../controller/CustomTextfield";

export interface IInputs {
  name: string;
  props: TCustomTextfield;
}

export interface IInputsProvider {
  inputs: IInputs[];
  formik: TAny;
}

export const InputsProvider = memo<IInputsProvider>(({ formik, inputs }) => {
  return (
    <Grid sx={inputsProviderSX}>
      {map(inputs, ({ name, props }, index) => (
        <CustomTextfield
          key={index}
          name={name}
          autoComplete="off"
          variant="outlined"
          value={formik && formik.values[name]}
          onChange={
            formik &&
            ((e: ChangeEvent<HTMLInputElement>) => {
              formik.setFieldValue(name, e.target.value || "");
            })
          }
          // errorMessage={
          //   formik && formik.errors[name]
          //     ? {
          //         message: formik && formik.errors[name],
          //         type: "error",
          //       }
          //     : props?.errorMessage
          // }
          {...(props ?? {})}
        />
      ))}
    </Grid>
  );
});

const inputsProviderSX: SxProps<Theme> = {};
