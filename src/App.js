import React, { useReducer } from "react";
import { Store } from "./store";
import modules from "./store/modules";
import Teste from "./pages/Teste";

function App() {
  const store = useReducer(modules);

  return (
    <Store.Provider value={store}>
      <Teste />
    </Store.Provider>
  );
}

export default App;
