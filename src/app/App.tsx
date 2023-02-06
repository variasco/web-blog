import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import { Navbar } from "widgets/Navbar";
import { AppRouter } from "./providers/router";
import { useTheme } from "./providers/ThemeProvider";
import "./styles/index.scss";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <button onClick={toggleTheme}>Toggle theme</button>
      <AppRouter />
    </div>
  );
};

export default App;
