import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    deviceSize: {
      desktop: string,
      laptop: string,
      tablet: string,
      mobile: string
    },

    device: {
      desktop: string,
      laptop: string,
      tablet: string,
      mobile: string
    },

    bgColor: {
      light: string,
      dark: string
    },
  
    fontColor: {
        light: string,
        dark: string
    };
  
  }
}