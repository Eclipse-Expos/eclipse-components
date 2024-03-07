"use client";

import {
  StarBackground,
  MainWrapper,
  EclipseLogoTextOrbGlow,
  ObjectTable,
} from "../lib/components";
import "./index.css";

export default function Home() {
  const objects = [
    { id: 1, name: "Object 1", description: "Description 1" },
    { id: 2, name: "Object 2", description: "Description 2" },
    { id: 3, name: "Object 3", description: "Description 3" },
    { id: 4, name: "Object 4", description: "Description 4" },
    { id: 5, name: "Object 5", description: "Description 5" },
  ];

  return (
    <>
      <StarBackground className="-z-10 fixed" />

      <MainWrapper>
        <EclipseLogoTextOrbGlow />

        <ObjectTable
          data={objects}
          columns={["name", "description"]}
          columnTitles={["Name", "Description", "Object #"]}
          rowClassName="hover:bg-gray-800 transition-colors duration-200 ease-out cursor-pointer"
          computedColumns={[
            (object) => {
              return (
                <>
                  <span className="font-bold text-red-300">
                    {object.name.split(" ")[1]}
                  </span>
                </>
              );
            },
          ]}
          onRowClick={(object) => {
            console.log(object);
          }}
        />
      </MainWrapper>
    </>
  );
}
