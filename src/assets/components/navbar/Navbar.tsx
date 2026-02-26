import { MagnifyingGlass, Package, ShoppingCartSimple, User } from "phosphor-react";
function Navbar() {
  return (
    <div className="mt-2 mb-[-1.5rem] ">
      <div className="flex flex-col mx-6 col-end-2 lg:flex-row lg:justify-center items-center lg:gap-8 ">
        {/* logo */}
        <img
          className="ml-[-1rem] w-[12rem] my-[-2rem]"
          src="https://raw.githubusercontent.com/allysonaggp/Drogshop/refs/heads/master/src/assets/img/logoDrogShop.png"
          alt="logo DrogShop"
        />

        {/* placeholder */}
        <div className="w-[25rem] lg:w-11rem  lg:px-3 lg:mr-5 px-3 py-1.5 flex p-1 bg-slate-200 rounded-full ">
          <input type="text" placeholder="Buscar produto" name="Buscar-na-DrogShop" className="w-110 text-slate-800" />
          <a href="">
            <MagnifyingGlass className="text-slate-800 " size={23} />
          </a>
        </div>

        <div className="hidden lg:flex gap-5 ">
          {/* login */}
          <div>
            <a href="" className="flex items-center gap-2  ">
              <User className="text-[#fe4540]" size={32} />
              <div className="w-[8rem]">
                <p className="font-bold text-slate-600 text-sm">Boas-Vindas!</p>
                <p className="font-bold text-slate-800 text-sm">Entrar ou cadastrar</p>
              </div>
            </a>
          </div>

          {/* Acompanhar Pedidos */}
          <div>
            <a href="" className="flex items-center gap-2  ">
              <Package className="text-[#fe4540]" size={32} />
              <div>
                <p className="font-bold text-slate-600 text-sm">Acompanhar</p>
                <p className="font-bold text-slate-800 text-sm">Pedidos</p>
              </div>
            </a>
          </div>

          {/* Carrinho de Compras */}
          <div>
            <a href="" className="flex items-center gap-2 ">
              <ShoppingCartSimple className="text-[#fe4540]" size={32} />
              <div>
                <p className="font-bold text-slate-600 text-sm">Carrinho</p>
                <p className="font-bold text-slate-800 text-sm">R$:0,00</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
