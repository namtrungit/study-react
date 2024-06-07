import { createContext } from "react";
import "./App.css";
import store from "./app/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SampleUseState from "./components/demo/useState/SampleUseState";
export const ThemeContext = createContext(null);

function App() {
  return (
    <Provider store={store}>
      <ThemeContext.Provider value="">
        <ToastContainer />
        <div className="App">
          <SampleUseState />
        </div>
      </ThemeContext.Provider>
    </Provider>
  );
}

export default App;
