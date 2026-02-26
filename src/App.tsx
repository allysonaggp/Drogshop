import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./assets/components/navbar/Navbar";
import Carrossel from "./assets/components/swiper/Carrossel";
import Footer from "./assets/components/footer/Footer";
import Home from "./assets/pages/Home";
import DeletarCategoria from "./assets/components/categorias/deletarcategoria/DeletarCategoria";
import FormCategoria from "./assets/components/categorias/formcategoria/FormCategoria";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />
          <div className="justify-center">
            <Carrossel />
          </div>
          <div className="min-h-[40vh]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
              <Route path="/editarcategoria/:id" element={<FormCategoria />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
