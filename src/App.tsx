import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Test } from "./pages";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/horstest" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
