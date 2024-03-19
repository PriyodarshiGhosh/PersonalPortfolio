import { useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";

function App() {
  useEffect(() => {
    document.title = "Priyodarshi";
}, []);
  return (
      <Home />
  );
}

export default App;
