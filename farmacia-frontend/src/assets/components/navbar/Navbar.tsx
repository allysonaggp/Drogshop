
import { Package, ShoppingCartSimple, User } from "phosphor-react";
function Navbar() {
  return (
    <div className="flex items-center justify-center gap-4 bg-indigo-200 mx-auto">
      <div className="flex items-center gap-2 bg-amber-300 p-2 m-1">
        <img src="" alt="logo DrogShop" />
        {/* login */}
        <User className="text-red-800" size={32} />
        <div>
          <p className="font-bold text-slate-600 text-sm">Boas-Vindas!</p>
          <p className="font-bold text-slate-800 text-sm">Entrar ou cadastrar</p>
        </div>
      </div>

      {/* Acompanhar Pedidos */}
      <div className="flex items-center gap-2 bg-amber-300 p-2 m-1">
        <Package className="text-red-800" size={32} />
        <div>
          <p className="font-bold text-slate-600 text-sm">Boas-Vindas!</p>
          <p className="font-bold text-slate-800 text-sm">Entrar ou cadastrar</p>
        </div>
      </div>

      {/* Carrinho de Compras */}
      <div className="flex items-center gap-2 bg-amber-300 p-2 m-1">
        <ShoppingCartSimple className="text-red-800" size={32} />
        <div>
          <p className="font-bold text-slate-600 text-sm">Boas-Vindas!</p>
          <p className="font-bold text-slate-800 text-sm">Entrar ou cadastrar</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
