import React from "react";
import { contractBase64 } from "./ccb";

function App() {
  return (
    <a
      href={`data:application/octet-stream;base64,${contractBase64}`}
      download="contrato+focus.pdf"
    >
      Contrato
    </a>
  );
}

export default App;
