import { createContext } from "react";

interface ThemeContextInterface {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

// for enable theme 
export const ThemeContext = createContext<ThemeContextInterface>({
  theme: "light",
  setTheme: () => {},
});
