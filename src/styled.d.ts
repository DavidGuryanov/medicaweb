/* eslint-disable @typescript-eslint/no-empty-interface */
import { lightTheme } from './utils/theme';

type CustomTheme = typeof lightTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends CustomTheme {}
}
