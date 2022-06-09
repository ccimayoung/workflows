import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AW } from "./AllStyle";
import Add from "./page/Add";
import Mydic from "./page/Mydic";

function App() {
  return (
    <AW>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Add />} />
          <Route path="/mydic" element={<Mydic />} />
        </Routes>
      </BrowserRouter>
    </AW>
  );
}

export default App;
