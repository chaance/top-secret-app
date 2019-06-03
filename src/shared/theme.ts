import { lighten } from 'polished';

export interface ColorProps {
  [key: string]: string | object | null | undefined;
}

export interface ThemeModeProps {
  background: {
    main: string;
  };
  text: {
    main: string;
  };
  button: {
    default: {
      background: string;
      backgroundHover?: string;
      text: string;
      textHover?: string;
    };
    primary: {
      background: string;
      backgroundHover?: string;
      text: string;
      textHover?: string;
    };
    secondary: {
      background: string;
      backgroundHover?: string;
      text: string;
      textHover?: string;
    };
  };
}

export interface ThemeProps extends ColorProps {
  mode: 'light' | 'dark';
  light: ThemeModeProps;
  dark: ThemeModeProps;
}

export const black = '#11171f';

export const white = '#ffffff';

export const brandColors = {
  primary: '#b364e2',
  primaryDark: '#9546b0',
  secondary: '#00a7ce',
  secondaryDark: '#0075B0',
  white,
  black,
};

export const utilityColors = {
  success: '#71e510',
  danger: '#f25555',
  warning: '#ffb006',
  info: '#ffcf07',
};

export const grays = {
  s100: lighten(0.75, black),
  s200: lighten(0.7, black),
  s300: lighten(0.6, black),
  s400: lighten(0.5, black),
  s500: lighten(0.4, black),
  s600: lighten(0.3, black),
  s700: lighten(0.2, black),
  s800: lighten(0.1, black),
  s900: lighten(0.05, black),
};

export const lightTheme: ThemeModeProps = {
  background: {
    main: white,
  },
  text: {
    main: black,
  },
  button: {
    default: {
      background: grays.s100,
      backgroundHover: grays.s200,
      text: black,
    },
    primary: {
      background: brandColors.primary,
      backgroundHover: brandColors.primaryDark,
      text: white,
    },
    secondary: {
      background: brandColors.secondary,
      backgroundHover: brandColors.secondaryDark,
      text: white,
    },
  },
};

export const darkTheme: ThemeModeProps = {
  background: {
    main: grays.s900,
  },
  text: {
    main: white,
  },
  button: {
    default: {
      background: grays.s800,
      backgroundHover: grays.s700,
      text: white,
    },
    primary: {
      background: brandColors.primary,
      backgroundHover: lighten(0.2, brandColors.primary),
      text: black,
    },
    secondary: {
      background: brandColors.secondary,
      backgroundHover: lighten(0.2, brandColors.secondary),
      text: black,
    },
  },
};

export const theme: ThemeProps = {
  mode: 'light',
  brand: brandColors,
  utils: utilityColors,
  grays,
  light: lightTheme,
  dark: darkTheme,
};

export default theme;
