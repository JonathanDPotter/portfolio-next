import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({
  theme: "",
  setTheme: (a: string) => {},
  themesOpen: false,
  setThemesOpen: (a: boolean) => {},
});

const ThemeProvider = (props: any) => {
  // initializes theme to previously chosen theme
  const [theme, setTheme] = useState<string>("dark");
  // state for if theme modal is open
  const [themesOpen, setThemesOpen] = useState(false);
  const value = { theme, setTheme, themesOpen, setThemesOpen };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return <ThemeContext.Provider value={value} {...props} />;
};

export const useTheme = () => useContext(ThemeContext);

export default ThemeProvider;
