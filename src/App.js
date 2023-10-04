import { useState } from "react";
import "./App.css";
import Content from "./components/Content";
import PageContext from "./PageContext";

function App() {
  return (
    <PageContext>
      <Content />
    </PageContext>
  );
}

export default App;
