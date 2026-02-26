import { useParams, useNavigate } from "react-router-dom";
import type Categoria from "../../../model/Categoria";
import { atualizar, buscar, cadastrar } from "../../../services/services";
import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";

function FormCategoria() {
  const navigate = useNavigate();
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, categoria, setCategoria);
    } catch (error: any) {
      if (error.toString().includes("404")) {
        console.error("Categoria não encontrada");
      } else if (error.toString().includes("401")) {
        alert("Não autorizado. Faça login novamente.");
        navigate("/");
      }
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
  }

  function retornar() {
    navigate("/");  
  }

  async function gerarNovaCategoria(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (id !== undefined) {
      try {
        await atualizar("/categorias", categoria, setCategoria);
        alert("A categoria foi atualizada com sucesso!");
      } catch (error: any) {
        alert("Erro ao atualizar a categoria.");
      }
    } else {
      try {
        await cadastrar("/categorias", categoria, setCategoria);
        alert("Categoria cadastrada com sucesso!");
        retornar()
      } catch (error: any) {
        alert("Erro ao cadastrar a categoria.");
      }
    }
    retornar();
  }

  return (
    <div className="container lg:px-20  flex flex-col items-center justify-center mx-auto">
      <h1 className="text-4xl text-center my-8 text-[#ff463f]">
        {id === undefined ? "Cadastrar Categoria" : "Editar Categoria"}
      </h1>

      <form className="container  flex flex-col gap-4 text-center" onSubmit={gerarNovaCategoria}>
        <div className="flex flex-col gap-2">
          <label htmlFor="descricao">Descrição da categoria</label>
          <input
            type="text"
            placeholder="Descreva sua categoria aqui"
            name="descricao"
            className="border-2 border-slate-700 rounded p-2"
            value={categoria.descricao || ""}
            onChange={atualizarEstado}
          />
        </div>

        <button
          className=" w-[12rem] rounded text-slate-100 bg-green-400 hover:bg-green-800 w-1/2 py-2 mx-auto flex justify-center"
          type="submit"
        >
          <span>{id === undefined ? "Cadastrar" : "Atualizar"}</span>
        </button>
      </form>
    </div>
  );
}

export default FormCategoria;