import { useEffect, useState } from "react";
import type Categoria from "../../../model/Categoria";
import CardCategoria from "../cardcategoria/CardCategoria";
import { buscar } from "../../../services/services";

function ListaCategoria() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  useEffect(() => {
    buscarCategorias();
  }, [categorias.length]);

  async function buscarCategorias() {
    try {
      await buscar("/categorias", categorias, setCategorias);
    } catch (error: any) {
      if (error.toString().includes("404")) {
        console.error("Erro ao Procurar as categorias");
      }
    }
  }

  return (
    
    <div className="w-[72rem]  mb-6 grid grid-cols-4 gap-2">
      {categorias.map((categoria) => (
        <CardCategoria key={categoria.id} categoria={categoria} />
      ))}
    </div>
  );
}

export default ListaCategoria;
