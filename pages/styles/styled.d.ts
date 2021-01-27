import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    colors: {
      rainbow: string;
      darkGrey: string;
      white: string;
      red: string;
      yellow: string;
      purple: string;
      orange: string;
      green: string;
      pink: string;
      turquoise: string;
      shamrock: string;
      mirage: string;
      malibu: string;
      mineShaft: string;
      blue: string;
    }
  }
}