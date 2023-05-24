import { ThemeContext } from "@app/context/context";
import { HomePage } from "@app/pages/homepage/homepage.component";
import { Theme } from "@app/types/theme";
import { useCallback, useMemo, useState } from "react";

export const App = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleIsDark = useCallback(() => {
    setIsDark(!isDark);
  }, [isDark]);

  const theme: Theme = useMemo(
    () => ({ isDark, toggleIsDark }),
    [isDark, toggleIsDark]
  );

  return (
    <ThemeContext.Provider value={theme}>
      <HomePage />
    </ThemeContext.Provider>
  );
};
