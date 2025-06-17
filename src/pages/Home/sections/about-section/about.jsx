import React from "react";
import AboutData from "../../../../services/data/about.json";
import CustomButton from "../../../../components/Button/button";

export default function About() {
  return (
    <div className="py-8">
      <div className="p-4 w-full h-[111vh]">
        <div className="section-about"></div>
        <div>
          <div className="absolute w-[43rem]">
            <h2 className="title-about">{AboutData.titulo}</h2>
            <div className="animated_line"></div>
          </div>
          <div className="w-[46rem] text-justify absolute left-[65rem] top-[71rem] flex items-center justify-center flex-col flex-nowrap gap-4">
            {AboutData.descricao.map((paragrafo, index) => (
              <p key={index} className="mb-4 font-medium text">
                {paragrafo}
              </p>
            ))}
            <div className="flex justify-end items-center w-full h-60">
              <div>
                <CustomButton
                  type="link"
                  label={AboutData.button.texto}
                  target={AboutData.button.link}
                  className="all_buttons bg-[var(--color-cyan-dark)] text-[var(--color-white)] h-28 text-[2.5rem] uppercase font-family cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-nowrap items-end justify-center gap-16 pl-0 pr-right py-0">
        <div>
          <h3>{AboutData.button_download.descricao}</h3>
        </div>
        <div>
          <CustomButton
            type="download"
            label={AboutData.button_download.texto}
            target={AboutData.button_download.link}
            className="all_buttons bg-[var(--color-navy)] text-[var(--color-white)] btn-down-about text-[2.6rem] uppercase font-family cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
