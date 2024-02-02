import { cn } from "@/lib/utils/cn";
import React, { FC, JSX, SVGAttributes } from "react";

/**
 * Custom SVG Props
 */
type SVGProps = SVGAttributes<HTMLOrSVGElement>;
interface CustomSVGProps {
  className?: string;
}

/**
 * Ignore the following props
 */
const IGNORED_SVG_PROPS = ["className"];

/**
 * Eclipse Logo Long Component
 *
 * @returns JSX.Element
 */
const EclipseLogoLong: FC<SVGProps & CustomSVGProps> = (props): JSX.Element => {
  /**
   * Filter the props to remove the ignored props.
   *
   * This is done to prevent the ignored props from being passed to the svg.
   */
  const FILTERED_PROPS = Object.fromEntries(
    Object.entries(props).filter(([key]) => !IGNORED_SVG_PROPS.includes(key)),
  );

  /**
   * Return the Eclipse Logo Long component JSX
   */
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={1080}
      height={250}
      viewBox="0 0 1080 400"
      className={cn("relative fill-white", props.className)}
      {...FILTERED_PROPS}
    >
      <path
        vectorEffect="non-scaling-stroke"
        d="M-1.15 1.02c14.43-2.79 28.5 3.95 35.7 15.83 1.52-5.27 1.85-10.98.73-16.73-3.77-19.49-22.62-32.23-42.11-28.47-19.49 3.77-32.23 22.62-28.46 42.11a35.66 35.66 0 006.92 15.25c2.25-13.7 12.79-25.2 27.23-27.99"
        fill="#fff"
        transform="matrix(1.05 0 0 1.05 540 200) translate(-378.59 -50.03)"
      />
      <path
        vectorEffect="non-scaling-stroke"
        d="M79.62-42.21C77.84 1.34 41.09 35.19-2.46 33.41c-43.55-1.78-77.4-38.53-75.62-82.08.11-2.71.36-5.38.73-8a82.625 82.625 0 00-5.63 26.9C-84.86 16.05-49.23 54.72-3.4 56.6c45.82 1.88 84.49-33.75 86.37-79.58.39-9.48-.83-18.66-3.42-27.27.16 2.65.19 5.33.08 8.03"
        fill="#fff"
        transform="matrix(1.05 0 0 1.05 540 200) translate(-366.95 16.25)"
      />
      <path
        vectorEffect="non-scaling-stroke"
        d="M12.76 7.93C3.9 34.37-22.45 50.02-49.1 46.32A59.62 59.62 0 00-29.99 56.9c31.43 10.53 65.44-6.42 75.97-37.84 10.53-31.43-6.41-65.44-37.84-75.97a60.128 60.128 0 00-21.63-3.07c23.5 13.1 35.11 41.46 26.25 67.9"
        fill="#fff"
        transform="matrix(1.05 0 0 1.05 540 200) translate(-345.73 -24.12)"
      />
      <path
        vectorEffect="non-scaling-stroke"
        d="M55.62 84.59C6.75 105.8-50.06 83.38-71.27 34.52-92.48-14.35-70.06-71.15-21.2-92.37c15.34-6.66 31.45-9.01 47.01-7.61-18.93-3.34-39.02-1.36-57.97 6.87-51.42 22.32-75.01 82.1-52.69 133.52 22.32 51.42 82.1 75.01 133.52 52.69 18.95-8.23 34.12-21.55 44.6-37.66-9.6 12.32-22.32 22.49-37.66 29.14"
        fill="#fff"
        transform="matrix(1.05 0 0 1.05 540 200) translate(-381.71 -10.03)"
      />
      <path
        vectorEffect="non-scaling-stroke"
        fill="#fff"
        transform="matrix(1.05 0 0 1.05 540 200) translate(-189.52 -14.5)"
        d="M-22.88 -48.13L-22.88 -16.04 29.69 -16.04 29.69 16.33 -22.82 16.33 -22.82 48.14 55.06 48.14 55.06 80.18 -55.06 80.18 -55.06 -80.19 54.95 -80.19 54.95 -48.13 -22.88 -48.13z"
      />
      <path
        vectorEffect="non-scaling-stroke"
        d="M-54.52-80.94c4.22 4.94 8.54 9.79 12.82 14.67-.12-.14 6.61-5.71 7.21-6.17 7.62-5.79 16.44-10.01 25.91-11.65 15.11-2.62 31.66 1.08 44.28 9.8 6.71 4.63 12.25 10.76 16.52 17.68 5.11 8.28 7.53 17.35 8.71 27.03C62.2-19.15 61.07-9.07 58.1.78c-3.14 10.42-8.87 19.28-17.2 26.6C29.36 37.52 13.81 43.04-1.54 41.9c-9.02-.67-16.92-3.67-24.64-7.8-1.41-.76-2.82-1.55-4.23-2.37v53.19h-30.22l-.69-.69c-.04-20.64-.13-41.28-.12-61.91 0-12.14.02-24.29.03-36.43.01-12.21.03-24.41.05-36.62.01-10.07.04-20.14.04-30.21M-.19-53.87c-10.66.24-20.85 6.36-26.38 16.1-4.97 8.75-5.6 19.83-1.67 29.09C-24.34.49-16.06 7.91-6.28 10.1 16 15.09 34.1-6.89 30.19-28.07c-1.84-9.99-8.62-19.03-17.87-23.23A28.563 28.563 0 00-.2-53.87"
        fill="#fff"
        transform="matrix(1.05 0 0 1.05 540 200) translate(171.08 26.63)"
      />
      <path
        vectorEffect="non-scaling-stroke"
        d="M46.2-59.78v30.37h-4.28c-18.51 0-37.03-.14-55.53.15-2.77.04-6.54 1.26-8.08 3.28-4.15 5.45-.45 11.76 6.6 11.84 10.62.12 21.24-.17 31.85.09 9.84.25 18.9 3.26 26.28 9.97 17.18 15.59 14.12 44.95-5.96 57.75-6.4 4.08-13.42 6.25-21.12 6.22-22.82-.08-45.63-.04-68.45-.05-.27 0-.53-.12-1.04-.25V29.27h4.57c20.81 0 41.62.06 62.42-.08 2.39-.02 4.98-.78 7.1-1.91 3.17-1.69 3.65-5.2 2.2-7.86-.84-1.54-3.95-2.53-6.07-2.58-11.33-.26-22.68.12-34-.22-12.81-.38-23.35-6.25-30.07-16.81-9.11-14.31-9.35-29.44.54-43.79 6.41-9.3 15.5-15.32 26.84-15.61 21.92-.57 43.87-.17 66.19-.17"
        fill="#fff"
        transform="matrix(1.05 0 0 1.05 540 200) translate(299.3 6.14)"
      />
      <path
        vectorEffect="non-scaling-stroke"
        d="M-1.41 31.76c12.73 3.27 28.82-3.68 34.37-16.63 7.15 7.73 14.2 15.33 21.67 23.41.37.4-2.27 3.95-2.59 4.37-1.07 1.4-2.28 2.69-3.58 3.87-11.79 10.72-28.45 16.8-44.33 16.6-2.37-.03-4.73-.2-7.08-.51-15.33-2.01-29.44-9.91-39.15-21.95a62.265 62.265 0 01-4.53-6.41c-4.67-7.62-7.5-16.23-8.63-25.09-4.46-35.04 13.94-59.95 37.93-68.69 27.22-9.92 56.62-1.68 73.25 21.89C36.97-14.53 17.96 8.39-1.41 31.76m15.37-63.14c-14.94-2.26-26.75.92-34.57 14.06-4.62 7.75-5.51 27.21-.46 32.54C-9.48-.19 2.08-15.58 13.96-31.38"
        fill="#fff"
        transform="matrix(1.05 0 0 1.05 540 200) translate(419.06 4.92)"
      />
      <path
        vectorEffect="non-scaling-stroke"
        d="M55.47-35.96c-10.26 10.3-20.26 20.55-22.24 22.4-.12-.19-1.54-2.51-1.69-2.75-.59-.93-1.2-1.84-1.83-2.74-1.16-1.64-2.38-3.28-3.74-4.77-.94-1.03-1.95-2.01-3.02-2.9-3.05-2.53-6.69-4.3-10.55-5.15-3.53-.78-7.22-.79-10.78-.13-3.18.59-6.26 1.71-9.11 3.23-2.91 1.55-5.38 3.64-7.62 6.06-3.06 3.32-5.47 7.23-7.12 11.43-1.61 4.08-2.51 8.45-2.51 12.83 0 5.49 1.49 11.01 4.38 15.69 5.45 8.83 15.56 14.54 25.9 14.84 11.02.32 20.48-8.49 27.33-16.12 7.01 6.9 14.42 14.19 22.18 21.82.89.88-8.29 9.33-9.22 10.16-5.11 4.57-11.15 8.14-17.51 10.67C15.19 63.85.24 64.69-13.3 60.5c-17.77-5.5-31.79-20.88-38.17-38-.79-2.11-1.46-4.26-2.02-6.44-4.47-17.44-1.32-36.75 8.7-51.71S-18-60.92-.1-62.83c21.84-2.33 42.93 7.61 54.88 25.82.31.47.63.92.7 1.03"
        fill="#fff"
        transform="matrix(1.05 0 0 1.05 540 200) translate(-69.26 5.2)"
      />
      <rect
        vectorEffect="non-scaling-stroke"
        x={-15.275}
        y={-83.73}
        rx={0}
        ry={0}
        width={30.55}
        height={167.46}
        fill="#fff"
        transform="matrix(1.05 0 0 1.05 540 200) translate(16.77 -17.96)"
      />
      <path
        vectorEffect="non-scaling-stroke"
        d="M.35-.36c-.23.24-.46.48-.7.72.23-.24.46-.48.7-.72"
        fill="#fff"
        transform="matrix(1.05 0 0 1.05 540 200) translate(110.09 -53.14)"
      />
      <path
        vectorEffect="non-scaling-stroke"
        d="M.02-44.47c-8.22 0-14.9-6.45-15.33-14.56-.03.1-.06.19-.06.27.02 39.28.04 78.57.07 117.85.22.25.45.5.67.75h30V-59.84c0 8.49-6.88 15.37-15.37 15.37"
        fill="#fff"
        transform="matrix(1.05 0 0 1.05 540 200) translate(70.82 6.03)"
      />
      <path
        vectorEffect="non-scaling-stroke"
        d="M15.37 0c0 8.49-6.88 15.37-15.37 15.37-8.49 0-15.37-6.88-15.37-15.37 0-8.49 6.88-15.37 15.37-15.37 8.49 0 15.37 6.88 15.37 15.37"
        fill="#fff"
        transform="matrix(1.05 0 0 1.05 540 200) translate(70.84 -70.89)"
      />
      <path
        vectorEffect="non-scaling-stroke"
        d="M-74.53 10.07h14.81v2.25h-17.42v-24.63h16.89v2.25h-14.29v20.13zm-.28-11.37h13.02V.92h-13.02V-1.3zm27.03 13.62l10.1-13.65V.68l-9.5-12.98h2.99l7.99 10.84-1.16.04 7.99-10.87h2.82L-35.95.52v-1.83l10.06 13.65h-3.03L-37.44.76h1.09l-8.45 11.58h-2.99zm35.72 0v-24.63h9.22c2.09 0 3.88.33 5.38 1 1.5.67 2.66 1.63 3.47 2.89.81 1.26 1.21 2.77 1.21 4.56 0 1.79-.4 3.23-1.21 4.49-.81 1.26-1.97 2.22-3.47 2.9-1.5.68-3.3 1.02-5.38 1.02h-7.78l1.16-1.23v9.01h-2.6zm2.6-8.8l-1.16-1.27h7.71c2.46 0 4.33-.53 5.61-1.6C3.98-.42 4.62-1.92 4.62-3.87c0-1.95-.64-3.5-1.92-4.57-1.28-1.08-3.15-1.62-5.61-1.62h-7.71l1.16-1.23V3.52zm42.65 9.01c-1.85 0-3.57-.31-5.16-.93-1.58-.62-2.96-1.5-4.12-2.64a12.281 12.281 0 01-2.71-3.98c-.65-1.51-.97-3.17-.97-4.98 0-1.81.32-3.47.97-4.98.64-1.51 1.55-2.84 2.71-3.98 1.16-1.14 2.53-2.02 4.1-2.64 1.57-.62 3.3-.93 5.17-.93s3.57.31 5.14.93c1.57.62 2.94 1.5 4.1 2.62 1.16 1.13 2.06 2.45 2.71 3.98.64 1.53.97 3.19.97 5s-.32 3.47-.97 5c-.65 1.53-1.55 2.85-2.71 3.98s-2.53 2-4.1 2.62c-1.57.62-3.28.93-5.14.93zm0-2.32c1.48 0 2.84-.25 4.1-.76 1.25-.5 2.35-1.22 3.27-2.15.93-.93 1.65-2.01 2.16-3.24.52-1.23.77-2.59.77-4.06 0-1.47-.26-2.83-.77-4.06-.52-1.23-1.24-2.31-2.16-3.24a9.79 9.79 0 00-3.27-2.15c-1.26-.5-2.62-.76-4.1-.76-1.48 0-2.85.25-4.12.76-1.27.5-2.36 1.22-3.29 2.15-.93.93-1.65 2.01-2.18 3.24-.53 1.23-.79 2.59-.79 4.06 0 1.47.26 2.8.79 4.05.53 1.24 1.25 2.33 2.18 3.25.93.93 2.02 1.64 3.29 2.15 1.27.5 2.64.76 4.12.76zm34.77 2.32c-1.83 0-3.58-.3-5.26-.9-1.68-.6-2.97-1.37-3.89-2.3l1.02-2.01c.87.84 2.03 1.55 3.5 2.13 1.47.58 3.01.86 4.63.86s2.81-.19 3.78-.58c.97-.39 1.69-.91 2.15-1.57.46-.66.69-1.38.69-2.18 0-.96-.28-1.74-.83-2.32-.55-.59-1.27-1.05-2.16-1.39-.89-.34-1.88-.64-2.96-.9S66.47.84 65.39.54c-1.08-.29-2.07-.69-2.97-1.18-.9-.49-1.63-1.14-2.18-1.95-.55-.81-.83-1.87-.83-3.18 0-1.22.32-2.34.97-3.36.64-1.02 1.64-1.84 2.97-2.46 1.34-.62 3.05-.93 5.14-.93 1.38 0 2.76.19 4.12.58 1.36.39 2.53.92 3.52 1.6l-.88 2.08c-1.06-.7-2.18-1.22-3.36-1.55-1.18-.33-2.33-.49-3.43-.49-1.48 0-2.7.2-3.66.6-.96.4-1.67.93-2.13 1.6-.46.67-.69 1.43-.69 2.27 0 .96.28 1.74.83 2.32.55.59 1.28 1.04 2.18 1.37.9.33 1.89.62 2.97.88 1.08.26 2.15.54 3.22.84 1.07.31 2.05.7 2.96 1.18.9.48 1.63 1.12 2.18 1.92.55.8.83 1.84.83 3.13 0 1.2-.33 2.3-.99 3.33-.66 1.02-1.66 1.84-3.01 2.46-1.35.62-3.08.93-5.19.93z"
        fill="#fff"
        transform="matrix(1.05 0 0 1.05 540 200) translate(235.2 92.91)"
      />
    </svg>
  );
};

/**
 * Export the Eclipse Logo Long component
 */
export default EclipseLogoLong;
