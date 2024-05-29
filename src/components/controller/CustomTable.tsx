import { FC, Fragment, memo, useCallback } from "react";

import {
  Table,
  Theme,
  SxProps,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  TableContainer,
} from "@mui/material";
import { map } from "lodash";

import {
  FONT_BODY_SMALL,
  FONT_WEIGHT_BLOD,
} from "../../helper/constants/fonts";
import { SPACE_M1 } from "../../helper/constants/spaces";
import { uniqueIdGenerator } from "../../data/other";

export interface ITableHeadCell<T = TAny> {
  id: keyof T;
  label: string;
  ComponentRow?: FC<{ row: T }>;
}

interface ICustomTable<T = TAny> {
  valueRows: T[];
  tableHeadCell: ITableHeadCell<T>[];
}

interface ICustomTableCell {
  row: TAny;
  id: ITableHeadCell["id"];
  ComponentRow: ITableHeadCell["ComponentRow"];
}

export const CustomTable = memo<ICustomTable>(
  ({ valueRows, tableHeadCell }) => {
    return (
      <TableContainer sx={tableContainerSX}>
        <Table>
          <TableHead>
            {map(tableHeadCell, ({ label }, index) => (
              <TableRow key={index}>
                <TableCell>{label}</TableCell>
              </TableRow>
            ))}
          </TableHead>
          <TableBody>
            {map(valueRows, (row: TAny, index) => (
              <TableRow key={index}>
                {map(tableHeadCell, ({ ComponentRow, id }) => {
                  return (
                    <Fragment key={uniqueIdGenerator()}>
                      <CustomTableCell
                        id={id}
                        row={row}
                        ComponentRow={ComponentRow}
                      />
                    </Fragment>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
);

const CustomTableCell = memo<ICustomTableCell>(({ id, row, ComponentRow }) => {
  const Component = useCallback(
    () => ComponentRow && ComponentRow({ row: row }),
    [ComponentRow, row]
  );

  return (
    <TableCell key={id as number}>
      {ComponentRow ? Component() : row?.[id] || "_______"}
    </TableCell>
  );
});

const tableContainerSX: SxProps<Theme> = {
  width: "100%",
  my: SPACE_M1,
  "& .MuiTable-root": {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    "& .MuiTableHead-root": {
      width: "100%",
      display: "flex",
    },
    "& .MuiTableBody-root": {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      "& .MuiTableCell-root": {
        height: "auto",
        maxHeight: "100px",
      },
    },
    "& .MuiTableRow-root": {
      width: "100%",
      display: "flex",
      "& .MuiTableCell-root": {
        width: "100%",
        display: "flex",
        color: "#686868",
        alignItems: "center",
        justifyContent: "center",
        fontSize: FONT_BODY_SMALL + "!important",
        fontWeight: FONT_WEIGHT_BLOD,
      },
    },
  },
};
