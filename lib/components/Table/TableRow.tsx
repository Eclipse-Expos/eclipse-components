import { FC } from "react";
import { cn } from "../../utils/cn";
import { TableRowProps } from "./Table.types";

/**
 * Eclipse TableRow Component
 *
 * @param props - TableRowProps
 * @returns JSX.Element
 *
 * @example
 * <TableRow>
 *  <TableCell>Row 1 Cell 1</TableCell>
 *  <TableCell>Row 1 Cell 2</TableCell>
 * </TableRow>
 */
const TableRow: FC<TableRowProps> = (props) => (
  <tr
    className={cn(
      "bg-background p-2 rounded-md text-background py-3.5 flex flex-row gap-2 w-full",
      props.className
    )}
    onClick={props.onClick}
  >
    {props.children}
  </tr>
);

/**
 * Export the TableRow component
 */
export default TableRow;
