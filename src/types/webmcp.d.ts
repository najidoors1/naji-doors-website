import "react";

declare module "react" {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars -- Required to merge with React's generic attribute interface.
  interface FormHTMLAttributes<T> {
    toolname?: string;
    tooldescription?: string;
    toolautosubmit?: boolean;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars -- Required to merge with React's generic attribute interface.
  interface InputHTMLAttributes<T> {
    toolparamdescription?: string;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars -- Required to merge with React's generic attribute interface.
  interface SelectHTMLAttributes<T> {
    toolparamdescription?: string;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars -- Required to merge with React's generic attribute interface.
  interface TextareaHTMLAttributes<T> {
    toolparamdescription?: string;
  }
}
