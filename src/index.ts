/**
 * This is a barrel file. It allows us to import all of the components that will
 * be exported via our component library. This is useful because it allows us to
 * import all of the components from a single file, rather than having to import
 * each component individually.
 *
 * The tutorial for the component library is here:
 *    https://www.airplane.dev/blog/how-to-build-a-react-component-library
 */

/**
 * Import the styles to enable tailwind classes in the consuming application.
 */
import "./styles/styles.module.css";

/**
 * Export all of the components that will be available to the consuming application.
 */
export * from "./components";
