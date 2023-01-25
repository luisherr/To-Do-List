import React from "react";
import { TodoProvider } from "../TodoContext";
import { AppUI } from "../App/AppUI";

function App() {

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
