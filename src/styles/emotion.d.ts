import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    sizes: {
      headerHeight: string;
    };
    colors: {
      white: string;
      black: string;
      green: string;
      blue: string;
      red: string;
      orange: string;
      yellow: string;
      beige: string;
      gold: string;
      silver: string;
      bronze: string;
      grey100: string;
      grey200: string;
      grey300: string;
      grey400: string;
      grey500: string;
      grey600: string;
      grey700: string;
      grey800: string;
    };
  }
}
