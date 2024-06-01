"use client";

import * as React from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";

import { cn } from "../../utils/cn";
import { Button } from "../Button";
import { Calendar } from "../Calendar/Calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../Popover";
import { DatePickerProps } from "./DatePicker.types";

const DatePicker: React.FC<DatePickerProps> = (props) => {
  const { onDateSelect: _onDateSelect, ...rest } = props;

  const [date, setDate] = React.useState<Date>();

  const onDateSelect = (date: Date | undefined) => {
    setDate(date);

    if (_onDateSelect) {
      _onDateSelect(date);
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[240px] justify-start text-left font-normal",
            !date ? "text-muted-foreground" : ""
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Select a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          {...rest}
          mode="single"
          selected={date}
          onSelect={onDateSelect}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};

export { DatePicker };
