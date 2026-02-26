import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css"
import FormCategoria from "../formcategoria/FormCategoria";


function ModalCadastrarCategoria() {
  return (
     <>
      <Popup
        trigger={
          <button className=" py-1  hover:mx-1 hover:text-slate-700 ">Cadastrar categoria</button>
        }
        modal
        contentStyle={{
          borderRadius: "1rem",
          paddingBottom: "2rem",
        }}
      >
        <FormCategoria/>
      </Popup>
    </>
  )
}

export default ModalCadastrarCategoria