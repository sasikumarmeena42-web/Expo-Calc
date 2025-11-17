import React, { createContext, useContext } from 'react';

export const ThemeContext = createContext<any>(null);

export const ThemeProvider = ({ value, children }: { value: any; children: React.ReactNode }) => {
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);

