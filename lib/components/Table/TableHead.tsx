import { FC } from "react";
import { cn } from "../../utils/cn";
import { HTMLTableHeadProps } from "./Table.types";

/**
 * Eclipse TableHead Component
 *
 * @param props - HTMLTableProps
 * @returns JSX.Element
 *
 * @example
 * <TableHead>
 *  <TableRow>
 *    <TableCell>Header 1</TableCell>
 *    <TableCell>Header 2</TableCell>
 *  </TableRow>
 * </TableHead>
 */
const TableHead: FC<HTMLTableHeadProps> = (props) => (
  <thead
    className={cn("bg-background flex flex-col gap-2 w-full", props.className)}
  >
    {props.children}
  </thead>
);

export default TableHead;
