import ToggleThemeButton from "../buttons/toggle-theme-button";
import "../../styles/headers.scss";
import "../../styles/theme-variables.scss";

export const Header = () => {
  return (
    <header className="header">
      <span className="title">Open Weather Application</span>
      <ToggleThemeButton />
    </header>
  );
};
