import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;

      primaryHover: string;
      text: string;
      span: string;
      divider: string;
      button: string;

      background: string;
    };
  }
}
