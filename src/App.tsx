import { ThemeContext } from "@app/context/context";
import { HomePage } from "@app/pages/homepage/homepage.component";

export const App = () => {
  return (
    <ThemeContext.Provider value="light">
      <HomePage />
    </ThemeContext.Provider>
  );
};
