import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    deviceSize: {
      laptop: string,
      tablet: string,
      mobile: string
    },

    device: {
      laptop: string,
      tablet: string,
      mobile: string
    },

    bg: {
      green: string
    }
  }
}