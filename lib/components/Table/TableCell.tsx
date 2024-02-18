import { FC } from "react";
import { HTMLTableCellProps } from "./Table.types";

/**
 * Eclipse TableCell Component
 *
 * @param props - HTMLTableCellProps
 * @returns JSX.Element
 *
 * @example
 * <TableCell>Cell 1</TableCell>
 */
const TableCell: FC<HTMLTableCellProps> = (props) => (
  <td className="text-white flex text-sm flex-row gap-2 w-full">
    {props.children}
  </td>
);

/**
 * Export the TableCell component
 */
export default TableCell;
