import { useState, useEffect } from "react";
import CustomButton from "../Button/button";

const animations = {
  "viver são paulo": { in: "tilt-in-bl", out: "tilt-out-tr" },
  "universo sp": { in: "tilt-in-tl", out: "tilt-out-br" },
  "cidade empreendedora": { in: "tilt-in-tr", out: "tilt-out-bl" },
  "capital do futuro": { in: "tilt-in-br", out: "tilt-out-tl" }
};

export default function CardSectionEixos({ eixo, onClose }) {
  const [isExiting, setIsExiting] = useState(false);
  const animationSet = animations[eixo.nome.toLowerCase()] || { in: "", out: "" };

  useEffect(() => {
    if (isExiting) {
      const timeout = setTimeout(() => {
        onClose();
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [isExiting, onClose]);

  return (
    <div
      className={`p-8 text-white flex flex-row flex-nowrap items-center justify-evenly gap-15 h-[49.5rem] w-[104rem] relative ${
        isExiting ? animationSet.out : animationSet.in
      }`}
      style={{ backgroundColor: eixo.cor_principal }}
    >
      <button
        onClick={() => setIsExiting(true)}
        className="absolute top-4 right-4 text-white text-2xl"
      >
        <i className="fa-solid fa-xmark"></i>
      </button>

      <div className="flex flex-col flex-nowrap items-start justify-center gap-12">
        <div>
          <img className="w-[25rem]" src={eixo.imagem_card} alt="" />
        </div>
        <ul className="listCard">
          {eixo.lista.map((item, i) => (
            <li key={i} className="itemListCard pb-1">
              <h4>{item}</h4>
            </li>
          ))}
        </ul>
        <div>
          <CustomButton
            type="link"
            label={eixo.buttom.texto}
            target={eixo.buttom.link}
            style={{ color: eixo.cor_principal }}
            className="all_buttons bg-[var(--color-white)] h-28 text-[2.8rem] uppercase font-family cursor-pointer"
          />
        </div>
      </div>

      <div className="w-[37rem] flex flex-col flex-nowrap items-start justify-center gap-8 h-full">
        {eixo.texto.map((paragrafo, i) => (
          <p className="paragrafo" key={i}>
            {paragrafo}
          </p>
        ))}
      </div>
    </div>
  );
}