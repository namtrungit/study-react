import { createContext } from "react";
import "./App.css";
import FormMemo from "./components/demo/useMemo/FormMemo";
import ArrayDemo from "./components/demo/customHook/ArrayDemo";
import store from "./app/store";
import { Provider } from "react-redux";
import { Counter } from "./features/counter/Counter";
export const ThemeContext = createContext(null);

function App() {
  return (
    <Provider store={store}>
      <ThemeContext.Provider value="">
        <div className="App">
          <Counter />
        </div>
      </ThemeContext.Provider>
    </Provider>
  );
}

export default App;
