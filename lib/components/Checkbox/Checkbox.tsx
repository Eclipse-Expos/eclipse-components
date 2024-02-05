"use client";

import { cn } from "../../utils/cn";
import { JSX, FC, useState } from "react";
import { HTMLCheckboxProps } from "./Checkbox.types";
import { CheckSvg } from "..";

/**
 * Eclipse Checkbox Component
 *
 * @returns JSX.Element
 */
const Checkbox: FC<HTMLCheckboxProps> = (props): JSX.Element => {
  const id = Math.random().toString(36);
  const [checked, setChecked] = useState(props.checked || false);

  return (
    <>
      <input
        {...props}
        id={props.id || id}
        type="checkbox"
        name="checkbox"
        className="hidden"
        checked={checked}
        onChange={(e) => {
          setChecked(!checked);

          if (props.onChange) {
            props.onChange(e);
          }
        }}
      />
      <label
        {...props}
        htmlFor={props.id || id}
        className={cn(
          "flex flex-row gap-2 items-center cursor-pointer text-white",
          props.className
        )}
      >
        {checked && (
          <span className="w-5 h-5 flex flex-col justify-center items-center bg-white">
            <CheckSvg className="w-5 h-5 fill-black" />
          </span>
        )}
        {!checked && <span className="w-5 h-5 border border-white"></span>}

        {props.placeholder}
      </label>
    </>
  );
};

/**
 * Export the Checkbox component
 */
export default Checkbox;
