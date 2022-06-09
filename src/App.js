import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AW } from "./AllStyle";
import Add from "./page/Add";
import Mydic from "./page/Mydic";
import Edit from "./page/Edit";

function App() {
  return (
    <AW>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mydic />} />
          <Route path="/add" element={<Add />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </AW>
  );
}

export default App;
