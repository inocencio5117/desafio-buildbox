import React from "react";
import { Header } from "./components/Header";
import { Painel } from "./components/Painel";

import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <>
      <Header />
      <Painel />
      <GlobalStyle />
    </>
  );
}

export default App;
