import { Checkbox as CB, CheckboxProps } from "@nextui-org/checkbox";
import React, { FC, JSX } from "react";

/**
 * NextUI Checkbox wrapper component
 *
 * @param props CheckboxProps -- From NextUI
 * @returns JSX.Element
 */
const Checkbox: FC<CheckboxProps> = (props): JSX.Element => {
  return (
    <CB {...props} radius="none">
      {props.children}
    </CB>
  );
};

/**
 * Default export
 */
export default Checkbox;
