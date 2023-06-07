import { useEffect } from "react";
import { Provider } from "react-redux"; 
import { store } from './src/store';
import Main from "./src/main";
import { fetchInitialTheme } from "./src/store/slices/themeSlice";

const App = () => {
  useEffect(() => {
    store.dispatch(fetchInitialTheme());
  }, []);

  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
