import React from "react";
import { contractBase64 } from "./ccb";
import PdfViewer from "./PdfViewer";

function App() {
  return <PdfViewer data={atob(contractBase64)} />;
}

export default App;
