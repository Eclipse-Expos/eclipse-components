import { DetailedHTMLProps, TableHTMLAttributes } from "react";

export type HTMLTableProps = DetailedHTMLProps<
  TableHTMLAttributes<HTMLTableElement>,
  HTMLTableElement
>;

export type HTMLTableHeadProps = DetailedHTMLProps<
  TableHTMLAttributes<HTMLTableSectionElement>,
  HTMLTableSectionElement
>;

export type HTMLTableBodyProps = DetailedHTMLProps<
  TableHTMLAttributes<HTMLTableSectionElement>,
  HTMLTableSectionElement
>;

export type HTMLTableRowProps = DetailedHTMLProps<
  TableHTMLAttributes<HTMLTableRowElement>,
  HTMLTableRowElement
>;

export type HTMLTableCellProps = DetailedHTMLProps<
  TableHTMLAttributes<HTMLTableCellElement>,
  HTMLTableCellElement
>;
