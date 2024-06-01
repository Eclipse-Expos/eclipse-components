import { DetailedHTMLProps, TableHTMLAttributes } from "react";

export type TableProps = DetailedHTMLProps<
  TableHTMLAttributes<HTMLTableElement>,
  HTMLTableElement
>;

export type TableHeadProps = DetailedHTMLProps<
  TableHTMLAttributes<HTMLTableSectionElement>,
  HTMLTableSectionElement
>;

export type TableBodyProps = DetailedHTMLProps<
  TableHTMLAttributes<HTMLTableSectionElement>,
  HTMLTableSectionElement
>;

export type TableRowProps = DetailedHTMLProps<
  TableHTMLAttributes<HTMLTableRowElement>,
  HTMLTableRowElement
>;

export type TableCellProps = DetailedHTMLProps<
  TableHTMLAttributes<HTMLTableCellElement>,
  HTMLTableCellElement
>;
