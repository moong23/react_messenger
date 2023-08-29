// theme.d.ts
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    palette: {
      black: string;
      gray1: string;
      gray2: string;
      blue1: string;
      blue2: string;
      blue3: string;
      green: string;
      white: string;
    };
    typography: {
      Body: any;
      SubText: any;
      Caption: any;
      Caption2: any;
    };
  }
}
