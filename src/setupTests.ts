import "@testing-library/jest-dom";

// Extend Jest's matchers with the DOM testing library's matchers
// This allows TypeScript to recognize the toBeInTheDocument matcher
declare global {
     namespace jest {
          interface Matchers<R> {
               toBeInTheDocument(): R;
          }
     }
}
