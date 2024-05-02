import { memo, useCallback, useState } from "react";

import {
  Grid,
  Theme,
  SxProps,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import { map } from "lodash";

import {
  FONT_WEIGHT_BLOD,
  FONT_BODY_MEDIUM2,
} from "../../helper/constants/fonts";
import { SPACE_M3 } from "../../helper/constants/spaces";
import { minusIcon, plusIcon } from "../other/SvgComponent";
import { COLOR_SECEONDRY, COLOR_TEXT } from "../../helper/constants/colors";

export const CustomAccordion = memo<{ data: IFaqData[] }>(({ data }) => {
  return (
    <Grid className="accrdion-wrapper" sx={customAccordionSX}>
      {map(data, ({ description, id, title }) => (
        <CustomAccordionContent
          id={id}
          key={id}
          title={title}
          description={description}
        />
      ))}
    </Grid>
  );
});

const CustomAccordionContent = memo<IFaqData>(({ description, title }) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleExpansion = useCallback(
    () => setExpanded((prevExpanded) => !prevExpanded),
    []
  );

  return (
    <Accordion
      expanded={expanded}
      sx={customAccordionContentSX(expanded)}
      onChange={handleExpansion}
      className="custom-accortion"
    >
      <AccordionSummary
        expandIcon={!expanded ? plusIcon() : minusIcon()}
        id="header"
      >
        {title}
      </AccordionSummary>
      <AccordionDetails>{description}</AccordionDetails>
    </Accordion>
  );
});

const customAccordionContentSX = (expanded?: boolean): SxProps<Theme> => ({
  "&.MuiAccordion-root": {
    width: "100%",
    boxShadow: "none",
    "&:before": { display: "none" },
    "&.Mui-expanded": {
      my: "0px",
    },
    "& .MuiAccordionSummary-root": {
      p: "0px",
      py: SPACE_M3,
      minHeight: "auto",
      borderBottom: expanded ? "none" : "1px solid " + COLOR_SECEONDRY,
      "& .MuiAccordionSummary-content": {
        my: "0px",
        fontWeight: FONT_WEIGHT_BLOD,
        color: COLOR_TEXT,
        fontSize: FONT_BODY_MEDIUM2,
        "& svg": {
          width: "15px",
          height: "15px",
        },
      },
    },
    "& .MuiAccordion-region": {
      "& .MuiAccordionDetails-root": {
        p: "0px",
        pb: SPACE_M3,
        borderBottom: "1px solid " + COLOR_SECEONDRY,
      },
    },
  },
});

const customAccordionSX: SxProps<Theme> = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  "& .MuiAccordion-root:last-child": {
    "& .MuiAccordionSummary-root": {
      borderBottom: "none",
    },
    "& .MuiAccordionDetails-root": {
      borderBottom: "none",
    },
  },
};
