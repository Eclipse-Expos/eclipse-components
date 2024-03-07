import { FC } from "react";
import { cn } from "../../utils/cn";
import { HTMLTableBodyProps } from "./Table.types";

/**
 * Eclipse TableBody Component
 *
 * @param props - HTMLTableProps
 * @returns JSX.Element
 *
 * @example
 * <TableBody>
 *  <TableRow>
 *    <TableCell>Row 1 Cell 1</TableCell>
 *    <TableCell>Row 1 Cell 2</TableCell>
 *  </TableRow>
 *  <TableRow>
 *    <TableCell>Row 2 Cell 1</TableCell>
 *    <TableCell>Row 2 Cell 2</TableCell>
 *  </TableRow>
 * </TableBody>
 */
const TableBody: FC<HTMLTableBodyProps> = (props) => (
  <tbody
    className={cn("bg-background flex flex-col gap-2 w-full", props.className)}
  >
    {props.children}
  </tbody>
);

/**
 * Export the TableBody component
 */
export default TableBody;
