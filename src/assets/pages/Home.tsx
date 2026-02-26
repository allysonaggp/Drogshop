import ListaCategoria from "../components/categorias/listacadegoria/ListaCategoria";
import ModalCadastrarCategoria from "../components/categorias/modalcategoria/ModalCadastrarCategoria";



function Home() {
  return (
    <div>
      <h1 className="text-[#ff463f] mb-2 font-bold text-center ">        
        <ModalCadastrarCategoria/>
      </h1>
      <div className="flex justify-center">
        <ListaCategoria />
      </div>
    </div>
  );
}

export default Home;
