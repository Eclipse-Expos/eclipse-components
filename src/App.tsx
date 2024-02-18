"use client";

import {
  StarBackground,
  MainWrapper,
  EclipseLogoTextOrbGlow,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "../lib/components";
import "./index.css";

export default function Home() {
  return (
    <>
      <StarBackground className="-z-10 fixed" />

      <MainWrapper>
        <EclipseLogoTextOrbGlow />

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Header 1</TableCell>
              <TableCell>Header 2</TableCell>
              <TableCell>Header 3</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableCell>Row 1, Cell 1</TableCell>
              <TableCell>Row 1, Cell 2</TableCell>
              <TableCell>Row 1, Cell 3</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Row 2, Cell 1</TableCell>
              <TableCell>Row 2, Cell 2</TableCell>
              <TableCell>Row 2, Cell 3</TableCell>
            </TableRow>

            <TableRow className="border-b-0">
              <TableCell>Row 3, Cell 1</TableCell>
              <TableCell>Row 3, Cell 2</TableCell>
              <TableCell>Row 3, Cell 3</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </MainWrapper>
    </>
  );
}
