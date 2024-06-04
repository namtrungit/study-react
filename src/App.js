import { createContext } from "react";
import "./App.css";
import store from "./app/store";
import { Provider } from "react-redux";
import Users from "./features/Users/Users";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const ThemeContext = createContext(null);

function App() {
  return (
    <Provider store={store}>
      <ThemeContext.Provider value="">
        <ToastContainer />
        <div className="App">
          <Users />
        </div>
      </ThemeContext.Provider>
    </Provider>
  );
}

export default App;
