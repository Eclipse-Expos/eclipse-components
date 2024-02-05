import React, { FC, Fragment, JSX, SyntheticEvent } from "react";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Snackbar, {
  SnackbarProps,
  SnackbarOrigin,
  SnackbarCloseReason,
} from "@mui/material/Snackbar";

/**
 * Eclipse Notification component
 *
 * @param props MUI SnackbarProps
 * @returns JSX.Element
 */
const Notification: FC<SnackbarProps> = (props): JSX.Element => {
  /**
   * Handle the close event
   *
   * @param e The event
   * @param r The reason for the close
   */
  const handleClose = (e: SyntheticEvent | Event, r?: SnackbarCloseReason) => {
    if (props.onClose) {
      props.onClose(e, r || "clickaway");
    }
  };

  /**
   * Default anchor origin for the snackbar
   */
  const DEFAULT_ANCHOR_ORIGIN: SnackbarOrigin = {
    vertical: "top",
    horizontal: "right",
  };

  /**
   * Default key for the snackbar
   */
  const DEFAULT_KEY =
    "snackbar-notification" +
    DEFAULT_ANCHOR_ORIGIN.horizontal +
    DEFAULT_ANCHOR_ORIGIN.vertical;

  /**
   * Default auto hide duration for the snackbar
   */
  const DEFAULT_AUTO_HIDE_DURATION = 6000;

  /**
   * Return the snackbar with the default anchor origin and key
   */
  return (
    <Snackbar
      {...props}
      autoHideDuration={props.autoHideDuration || DEFAULT_AUTO_HIDE_DURATION}
      anchorOrigin={props.anchorOrigin || DEFAULT_ANCHOR_ORIGIN}
      key={props.key || DEFAULT_KEY}
      onClose={handleClose}
      action={
        props.action || (
          <Fragment>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </Fragment>
        )
      }
    />
  );
};

/**
 * Export the Notification component by default
 */
export default Notification;
