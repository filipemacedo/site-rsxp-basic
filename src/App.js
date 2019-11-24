import React, { useReducer } from "react";
import { Store } from "./store";
import modules from "./store/modules";

function App() {
  const store = useReducer(modules);

  return (
    <Store.Provider value={store}>
    </Store.Provider>
  );
}

export default App;
