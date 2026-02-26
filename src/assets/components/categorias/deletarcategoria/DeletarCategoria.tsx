/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type Categoria from "../../../model/Categoria";
import { buscar, deletar } from "../../../services/services";

function DeletarCategoria() {
  const navigate = useNavigate();
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, categoria, setCategoria);
    } catch (error: any) {
      if (error.toString().includes("404")) {
        alert("Erro ao deletar o tema");
      }
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  async function deletarCategoria() {
    try {
      await deletar(`/categorias/${id}`);
      alert("Tema apagado com secesso");
    } catch (error: any) {
      if (error.toString().includes("404")) {
        alert("Erro ao deletar o tema");
      }
    }
    retornar();
  }
  function retornar() {
    navigate("/");
  }
  return (
    <div className="container w-1/3 mx-auto">
      <h1 className="text-4xl text-[#ff463f] text-center my-4">Deletar Categoria</h1>
      <p className="text-center  mb-4">Você tem certeza que deseja apagar a cCategoria a seguir?</p>

      <div className=" flex flex-col gap-1 overflow-hidden justify-between">
        <p className="flex my-4 shadow-2xs justify-between items-center gap-1 bg-gradient-to-br from-slate-50 to-neutral-50 px-4  py-2  rounded-[.5rem]">
          {categoria.descricao}
        </p>
        <div className="flex gap-2">
          <button className="text-slate-100 bg-green-400 hover:bg-green-600 w-full py-2" onClick={retornar}>
            Voltar
          </button>
          <button className="text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2" onClick={deletarCategoria}>
            <span>Apagar</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletarCategoria;
