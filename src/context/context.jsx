import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getThemeFromLS());

  function getThemeFromLS() {
    return localStorage.getItem("theme") || "light"; // Provide a default value if the theme is not set in localStorage
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
