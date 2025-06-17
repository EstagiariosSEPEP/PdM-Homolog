import React from "react";
import transparencia from "../../../../services/data/transparencia.json";
import CustomButton from "../../../../components/Button/button";

export default function Transparencia() {
    const data = transparencia[0];
  return (
    <div className="relative top-[88rem]">
      <div>
        <div className="w-[110rem] left-12 h-1 bg-[black] absolute top-[-4rem]"></div>
        <div className="section-transparencia">
          <div className="relative left-0 top-12">
            <h2 className='text-[color:var(--color-blue-950)] h-40 pl-8 pr-4 py-4 h2-eixos w-[50rem]"'>
              {data.titulo}
            </h2>
            <div className="animated_line_transparencia"></div>
          </div>
          <div className="relative left-[17rem] top-[30rem] pt-8 w-[37rem]">
            <p className="mb-4 font-medium text">{data.descricao}</p>
          </div>
        </div>
        <div className="relative left-[60rem] top-44 w-[50rem] flex flex-col gap-12">
          <div>
            <h3 className="w-[40rem]">{data.paragrafo}</h3>
          </div>
          <div className="py-8">
            <CustomButton
              type="link"
              label={data?.button.texto}
              target={data?.button.link}
              className="all_buttons bg-[var(--color-navy)] text-[var(--color-white)] btn-down-about text-[2.6rem] uppercase font-family cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
