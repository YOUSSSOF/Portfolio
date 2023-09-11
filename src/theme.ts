import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

export const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

export const pallet = {
  blue600: "#3A71FF",
  purple600: "#3C308B",
};

export const breakpoints = {
  sm: "30em", // 480px
  md: "48em", // 768px
  lg: "62em", // 992px
  xl: "80em", // 1280px
  "2xl": "96em", // 1536px
};



const theme = extendTheme({
  config,
  components: {
    Drawer: {
      parts: ["body"],
      variants: {
        primary: {
          secondary: {
            dialog: {
              maxW: "220px",
            },
          },
        },
      },
    },
  },
  fonts: {
    heading: `'YekanBakh',Inter`,
    body: `'YekanBakh',Inter`,
  },
  styles: {
    global: () => ({
      body: {
        bg: "",
      },
    }),
  },
});

export default theme;
