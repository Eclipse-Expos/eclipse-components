import { ReactNode } from "react";
import { ObjectTableProps } from "./Table.types";
import { Table, TableBody, TableCell, TableHead, TableRow } from "../Table";

function ObjectTable<T extends Record<string, any>>(
  props: ObjectTableProps<T>
): ReactNode {
  const numCols = props.columns.length + (props.computedColumns?.length || 0);
  const columnTitles: string[] = [];
  for (let i = 0; i < numCols; i++) {
    if (i < props.columns.length) {
      columnTitles.push(props.columnTitles?.[i] || props.columns[i]);
    } else {
      columnTitles.push(props.columnTitles?.[i] || `Computed ${i}`);
    }
  }

  return (
    <Table className={props.className}>
      <TableHead>
        <TableRow className="font-bold">
          {columnTitles.map((title, i) => (
            <TableCell key={i}>{title}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {props.data.map((row, i) => {
          return (
            <TableRow key={i}>
              {props.columns.map((col, j) => (
                <TableCell key={j}>{row[col]}</TableCell>
              ))}
              {props.computedColumns?.map((col, j) => (
                <TableCell key={j + props.columns.length}>{col(row)}</TableCell>
              ))}
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}

export default ObjectTable;
