import { ReactNode } from "react";

type StringKeysOnly<T> = {
  [K in keyof T]: T[K] extends never ? never : K;
}[keyof T] extends infer D
  ? D extends string
    ? D
    : never
  : never;

export type ObjectTableProps<T extends Record<string, any>> = {
  className?: string;
  rowClassName?: string;
  data: T[];
  columns: StringKeysOnly<T>[];
  computedColumns?: ((row: T) => ReactNode)[];
  columnTitles?: string[];
  onRowClick?: (row: T) => void;
};
