import { Ex } from "./components/Ex";
import { classNames } from "./helpers/classNames/classNames";
import "./styles/index.scss";
import { useTheme } from "./theme/useTheme";

export const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Toggle</button>
      <Ex />
    </div>
  );
};
