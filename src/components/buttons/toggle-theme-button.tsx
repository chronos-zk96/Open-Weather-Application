import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme-context";
import { DayModeIcon } from "../icons/day-mode-icon";
import { NightModeIcon } from "../icons/night-mode-icon";

const ToggleThemeButton = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = (): void => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button className="button-circle" onClick={toggleTheme}>
      {theme === "dark" ? <DayModeIcon /> : <NightModeIcon />}
    </button>
  );
};

export default ToggleThemeButton;
