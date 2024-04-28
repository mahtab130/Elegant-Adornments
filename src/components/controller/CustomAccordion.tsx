import { memo, useCallback, useState } from "react";

import {
  Grid,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import { map } from "lodash";

import {
  customAccordionSX,
  customAccordionContentSX,
} from "../../helper/styleObjects/controllers";
import { minusIcon, plusIcon } from "../other/SvgComponent";

export const CustomAccordion = memo<{ data: IFaq[] }>(({ data }) => {
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

const CustomAccordionContent = memo<IFaq>(({ description, title }) => {
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
