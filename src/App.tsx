import { useState } from "react";
import "./App.scss";

import { ThemeContext } from "./contexts/theme-context";
import { Header } from "./components/layout/header";
import WeatherPage from "./pages/weather-page";

function App() {
  // initially set as light theme
  const [theme, setTheme] = useState("light");

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div className={`theme-${theme}`}>
          <Header />
          <WeatherPage />
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
