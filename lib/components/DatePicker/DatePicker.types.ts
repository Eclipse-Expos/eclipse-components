import { DateRange } from "react-day-picker";
import { CalendarProps } from "../Calendar";

export type DatePickerProps = CalendarProps & {
  onDateSelect?: (date: Date[] | Date | DateRange | undefined) => void;
};
