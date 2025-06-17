import React from "react";
import NewsCarousel from "../../../../components/carousel/NewsCarousel";

const Introduction = () => {
  return (
    <section className="relative w-full h-[44rem] overflow-hidden">
      {/* Imagem de fundo genérica */}
      <img
        src="https://s5.static.brasilescola.uol.com.br/be/2021/08/avenida-paulista.jpg"
        alt="Plano de fundo"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Container principal com a logo */}
      <div className="relative flex flex-col md:flex-row items-center justify-between w-full h-full">
        <div className="bg-white h-96 relative rounded-tr-[10rem] top-40 w-[55rem] p-4">
          <img
            src="/svg/logo_PdM_Completo_colorido.svg"
            alt="Programa de Metas"
            className=""
          />
        </div>
        <div className="relative w-44 h-28 rounded-[10rem] right-[58rem] top-[19rem] bg-[var(--color-white)]"></div>

        {/* Espaço reservado para o carrossel */}
        <div className="w-[65rem] h-28 rounded-bl-[7rem] left-[55rem] top-[37.5rem] z-10 absolute p-4 bg-[var(--color-navy)]">
          {/* Placeholder de conteúdo - Carrossel será adicionado depois */}
          <div className="">
            <NewsCarousel/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;