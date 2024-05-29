import { memo, useCallback, useMemo, useState } from "react";

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

export const CustomAccordion = memo<{ data: IFaqCard[] }>(({ data }) => {
  const [expandedId, setExpandedId] = useState<number | undefined>(undefined);

  const handleExpansion = useCallback(
    (id: number) => {
      setExpandedId(expandedId === id ? undefined : id);
    },
    [expandedId]
  );

  return (
    <Grid className="accrdion-wrapper" sx={customAccordionSX}>
      {map(data, ({ description, id, title }) => (
        <CustomAccordionContent
          id={id}
          key={id}
          title={title}
          expandedId={expandedId}
          description={description}
          handleExpansion={handleExpansion}
        />
      ))}
    </Grid>
  );
});

const CustomAccordionContent = memo<IFaqCard>(
  ({ description, title, expandedId, handleExpansion, id }) => {
    const isExpaneded = useMemo(() => expandedId === id, [expandedId, id]);

    return (
      <Accordion
        expanded={isExpaneded}
        sx={customAccordionContentSX(isExpaneded)}
        onChange={() => handleExpansion && handleExpansion(id)}
        className="custom-accortion"
      >
        <AccordionSummary
          expandIcon={!isExpaneded ? plusIcon() : minusIcon()}
          id="header"
        >
          {title}
        </AccordionSummary>
        <AccordionDetails>{description}</AccordionDetails>
      </Accordion>
    );
  }
);

const customAccordionContentSX = (expanded?: boolean): SxProps<Theme> => ({
  "&:not(:first-of-type)": {
    borderTop: "1px solid " + COLOR_SECEONDRY,
  },
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
      borderTop: "1px solid transparent",
      "& .MuiAccordionSummary-content": {
        my: "0px",
        color: COLOR_TEXT,
        fontWeight: FONT_WEIGHT_BLOD,
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
        "&:last-child": {
          borderBottom: expanded ? "none " : "1px solid " + COLOR_SECEONDRY,
        },
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
