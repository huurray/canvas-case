import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    sizes: {
      headerHeight: string;
    };
    colors: {
      white: string;
      black: string;
    };
  }
}
