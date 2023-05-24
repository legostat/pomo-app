import { Theme } from "@app/types/theme";
import { createContext } from "react";

const theme: Theme = {
  isDark: false,
  toggleIsDark: () => {},
};

export const ThemeContext = createContext<Theme>(theme);
