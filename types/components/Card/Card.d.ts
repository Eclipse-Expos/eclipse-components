/// <reference types="react" />
/**
 * Import the types necessary for the component
 */
import { CardProps } from "./Card.types";
/**
 * Import the styles for tailwind
 */
import "../../styles/styles.module.css";
/**
 * @title Eclipse Expos -- Card Component
 * @description Card component with a title and children
 * @param {CardProps} props - The props for the component.
 * @returns {JSX.Element} - Card component
 */
export default function Card({ title, children }: CardProps): JSX.Element;
