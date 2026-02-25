import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./assets/pages/Home";
import Navbar from "./assets/components/navbar/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
