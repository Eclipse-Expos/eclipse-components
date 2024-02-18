import { cn } from "../../utils/cn";
import { JSX, FC } from "react";
import { HTMLTableProps } from "./Table.types";

/**
 * Eclipse Table Component
 *
 * @param props - HTMLTableProps
 * @returns JSX.Element
 *
 * @example
 * <Table>
 *  <TableHead>
 *    <TableRow>
 *      <TableCell>Header 1</TableCell>
 *      <TableCell>Header 2</TableCell>
 *    </TableRow>
 *  </TableHead>
 *  <TableBody>
 *    <TableRow>
 *      <TableCell>Row 1 Cell 1</TableCell>
 *      <TableCell>Row 1 Cell 2</TableCell>
 *    </TableRow>
 *    <TableRow>
 *      <TableCell>Row 2 Cell 1</TableCell>
 *      <TableCell>Row 2 Cell 2</TableCell>
 *    </TableRow>
 *  </TableBody>
 * </Table>
 */
const Table: FC<HTMLTableProps> = (props): JSX.Element => (
  <table
    {...props}
    className={cn(
      "table-cell bg-background border-2 border-white/10 text-white px-7 py-2 w-full",
      props.className
    )}
  >
    {props.children}
  </table>
);

/**
 * Export the Table component
 */
export default Table;
