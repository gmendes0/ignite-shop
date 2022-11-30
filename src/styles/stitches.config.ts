import { createStitches } from "@stitches/react";

export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  keyframes,
  styled,
  theme,
} = createStitches({
  theme: {
    /**
     * Todas as propriedades de cor (backgroundColor, color, borderColor), essas
     * cores vão estar disponíveis
     */
    colors: {
      white: "#ffffff",

      gray900: "#121214",
      gray800: "#202024",
      gray300: "#c4c4cc",
      gray100: "#e1e1e6",

      green500: "#00875f",
      green300: "#00b37e",
    },
  },
});
