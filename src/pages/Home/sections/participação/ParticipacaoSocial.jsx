import React from "react";
import participacaoSocial from "../../../../services/data/participacao_social.json";
import CustomButton from "../../../../components/Button/button";

export default function ParticipacaoSocial() {
  const data = participacaoSocial[0];
  return (
    <div className="py-4">
        <div className='w-[110rem] left-12 h-1 bg-[black] absolute'></div>
      <div className="flex flex-col py-8">
        <div className="section-participacao-social flex flex-col flex-nowrap">
          <div className="relative left-[-2.5rem] pt-8 w-[40rem] top-9">
            <h2 className="text-[color:var(--color-blue-950)] h-40 pl-8 pr-4 py-4 h2-eixos w-[40rem]">
              {data.titulo}
            </h2>
            <div className="animated_line"></div>
          </div>
          <div className="w-[33rem] flex flex-col items-start justify-center gap-12 absolute right-[78rem] top-[28rem]">
            {data.descricao?.map((paragrafo, index) => (
              <p
                key={index}
                className="mb-4 font-medium text"
                dangerouslySetInnerHTML={{ __html: paragrafo }}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="relative left-[60rem] top-[61rem] w-[40rem] flex flex-col gap-12">
          <div>
            <h4 className="text-paragrafo">{data.paragrafo}</h4>
          </div>
          <div>
            <CustomButton
              type="link"
              label={data?.button.texto}
              target={data?.button.link}
              className="all_buttons bg-[var(--color-navy)] text-[var(--color-white)] btn-down-about text-[2.6rem] uppercase font-family cursor-pointer"
            />
          </div>
        </div>
    </div>
  );
}