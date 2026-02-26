import { Pencil, Trash } from "phosphor-react";
import type Categoria from "../../../model/Categoria";
import { Link } from "react-router-dom";

interface CardCategoriaProps {
  categoria: Categoria;
}
function CardCategoria({ categoria }: CardCategoriaProps) {
  return (
    <div className="flex justify-between shadow-2xs items-center gap-1 bg-gradient-to-br from-slate-50 to-neutral-50 px-4  py-2  rounded-[.5rem]">
      <p className=" text-[#666363] text-shadow-sm  text-sm ">{categoria.descricao}</p>

      <div className="flex flex-col gap-[.2rem]">
        <Link to={`/deletarcategoria/${categoria.id}`}>
          <Trash className="rounded bg-red-500 text-white" size={15} />
        </Link>

        <Link to={`editarcategoria/${categoria.id}`}>
          <Pencil className="rounded bg-green-500 text-white" size={15} />
        </Link>
      </div>
    </div>
  );
}

export default CardCategoria;
