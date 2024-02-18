import { FC } from "react";
import { cn } from "../../utils/cn";
import { HTMLTableRowProps } from "./Table.types";

/**
 * Eclipse TableRow Component
 *
 * @param props - HTMLTableRowProps
 * @returns JSX.Element
 *
 * @example
 * <TableRow>
 *  <TableCell>Row 1 Cell 1</TableCell>
 *  <TableCell>Row 1 Cell 2</TableCell>
 * </TableRow>
 */
const TableRow: FC<HTMLTableRowProps> = (props) => (
  <tr
    className={cn(
      "bg-background border-b-2 border-b-white/10 text-background py-5 flex flex-row gap-2 w-full",
      props.className
    )}
  >
    {props.children}
  </tr>
);

/**
 * Export the TableRow component
 */
export default TableRow;
