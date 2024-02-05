"use client";

import { useState, FormEvent } from "react";
import {
  TextField,
  Button,
  StarBackground,
  LoadingSpinner,
  Notification,
  MainWrapper,
  EclipseLogoLong,
} from "../lib/components";
import "./index.css";

enum InputStatus {
  DEFAULT,
  LOADING,
  ERROR,
  SUCCESS,
  ALREADY_REGISTERED,
  EMPTY_FIELDS,
}

export default function Home() {
  return (
    <>
      <StarBackground />

      <MainWrapper>
        <EclipseLogoLong />
        <Components />
      </MainWrapper>
    </>
  );
}

/**
 * Home Page Components
 *
 * @returns JSX.Element
 */
function Components(): JSX.Element {
  /**
   * States
   */
  const [status, setStatus] = useState<InputStatus>(InputStatus.DEFAULT);
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");

  /**
   * When the user clicks the register button
   *
   * @returns void
   */
  const onSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();

    /**
     * Set the status of the input to loading
     *
     * This will show the loading spinner
     */
    setStatus(InputStatus.LOADING);

    /**
     * If the email or name is empty, then set the status to empty fields.
     *
     * This will show an error message to the user
     */
    if (!email || !name) {
      setStatus(InputStatus.EMPTY_FIELDS);
      return;
    }

    /**
     * Try to register the user
     */
    try {
      /**
       * If the user is not null, then set the status to success
       */
      setStatus(InputStatus.SUCCESS);
    } catch {
      /**
       * If an error occurs, then set the status to error
       */
      setStatus(InputStatus.ERROR);
    }
  };

  /**
   * Return the main form
   */
  return (
    <form
      className="relative flex flex-col items-center justify-center gap-4 p-4"
      onSubmit={onSubmit}
    >
      {/**
       * If the status is not success or loading, then show the input fields
       */}
      {status !== InputStatus.SUCCESS && status !== InputStatus.LOADING && (
        <>
          <TextField
            type="text"
            className="w-72 sm:w-[32rem]"
            required={true}
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            type="email"
            className="w-72 sm:w-[32rem]"
            required={true}
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button className="w-72 sm:w-[32rem]">Pre-register</Button>
        </>
      )}

      {/**
       * If the input is loading, then show the loading spinner
       */}
      {status === InputStatus.LOADING && <LoadingSpinner className="mt-10" />}

      {/**
       * If an error occurs, then show the error message
       */}
      <Notification
        open={status === InputStatus.ERROR}
        message="An error has occurred. Please try again with a different email."
      />

      {/**
       * If the user is already registered, then show the error message
       */}
      <Notification
        open={status === InputStatus.ALREADY_REGISTERED}
        message="You are already registered! Check your email for more information."
      />

      {/**
       * If the user hasn't filled out all the fields, then show the error message
       */}
      <Notification
        open={status === InputStatus.EMPTY_FIELDS}
        message="Please fill out all fields"
      />

      {/**
       * If the user has successfully registered, then show the success message
       */}
      {status === InputStatus.SUCCESS && (
        <div className="flex flex-col items-center justify-center gap-2 tracking-wide">
          <h1 className="text-4xl font-black tracking-wide text-primary">
            Thanks for registering!
          </h1>
          <p className="mt-1 text-primary">Let&#39;s break some records.</p>
        </div>
      )}
    </form>
  );
}
