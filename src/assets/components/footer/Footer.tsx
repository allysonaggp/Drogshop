import { FacebookLogo, InstagramLogo } from "phosphor-react";

function Footer() {
  return (
    <div className="bg-[#f3f3f3] gap-4 lg:gap-20 lg:flex grid grid-cols-2  justify-center p-5">
      {/* Institucional */}
      <div className="hidden flex flex-col gap-2">
        <p className="font-bold text-[#fe4540] text-sm">Institucional</p>
        <div className="flex flex-col text-[#a7a4a2] text-sm">
          <a href="">Nossa Historia</a>
          <a href="">Nossas Farmácias</a>
          <a href="">Sustentabilidade</a>
          <a href="">Trabalhe Conosco</a>
        </div>
      </div>

      {/* serviços */}
      <div className="flex flex-col gap-2">
        <p className="font-bold text-[#fe4540] text-sm">Serviços</p>
        <div className="flex flex-col text-[#a7a4a2] text-sm">
          <a href="">Programa Mais Saúde</a>
          <a href="">Serviços de Saúde</a>
          <a href=""> Vacinação Corporativa</a>
          <a href="">Manipulação</a>
          <a href="">Compre e Retire</a>
        </div>
      </div>

      {/* Atendimento */}
      <div className="flex flex-col gap-2">
        <p className="font-bold text-[#fe4540] text-sm">Atendimento</p>
        <div className="flex flex-col text-[#a7a4a2] text-sm">
          <a href="">Central de Atendimento</a>
          <a href="">Tire suas dúvidas por Whatsapp</a>
          <a href="">Como comprar no site</a>
          <a href="">Prazo de entrega</a>
          <a href="">Reembolso</a>
          <a href="">Troca</a>
          <a href="">Devolução</a>
        </div>
      </div>

      {/* Segurança e privacidade */}
      <div className="flex flex-col gap-2 mb-3">
        <p className="font-bold text-[#fe4540] text-sm">Segurança e privacidade</p>
        <div className="flex flex-col text-[#a7a4a2] text-sm">
          <a href=""> Como protegemos seus dados</a>
          <a href="">Política de Privacidade</a>
          <a href="">Portal do Titular dos Dados</a>
        </div>
      </div>
      {/* Nossas Redes */}
      <div className="flex flex-col gap-2">
        <p className="font-bold text-[#fe4540] text-sm">Nossas Redes</p>

        {/* logos das redes sociais */}
        <div className="flex ml-2 ">
          <InstagramLogo className="text-[#a7a4a2]" size={32} />
          <FacebookLogo className="text-[#a7a4a2]" size={32} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
