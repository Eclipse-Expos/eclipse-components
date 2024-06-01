import { FC } from "react";
import { TableCellProps } from "./Table.types";
import { cn } from "../../utils/cn";

/**
 * Eclipse TableCell Component
 *
 * @param props - TableCellProps
 * @returns JSX.Element
 *
 * @example
 * <TableCell>Cell 1</TableCell>
 */
const TableCell: FC<TableCellProps> = (props) => (
  <td
    className={cn(
      "text-white flex text-sm flex-row gap-2 w-full",
      props.className
    )}
  >
    {props.children}
  </td>
);

/**
 * Export the TableCell component
 */
export default TableCell;
