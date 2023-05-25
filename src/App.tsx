import { useState } from "react";
import { ThemeContext } from "@app/context/context";
import { HomePage } from "@app/pages/homepage/homepage.component";

import type { Theme } from "@app/types/theme";

export const App = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleIsDark = () => {
    setIsDark(!isDark);
  };

  const theme: Theme = { isDark, toggleIsDark };

  return (
    <ThemeContext.Provider value={theme}>
      <HomePage />
    </ThemeContext.Provider>
  );
};
