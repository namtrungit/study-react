import { createContext } from "react";
import "./App.css";
import FormMemo from "./components/demo/useMemo/FormMemo";
import ArrayDemo from "./components/demo/customHook/ArrayDemo";

export const ThemeContext = createContext(null);

function App() {
  return (
    <ThemeContext.Provider value="">
      <div className="App">
        <ArrayDemo />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
