import { useState } from "react";
import eixosTematicos from "../../services/data/eixos_tematicos.json";
import CardSectionEixos from "../card/CardSectionEixos";

export default function EixosSection() {
  const [hovered, setHovered] = useState("");
  const [selectedEixo, setSelectedEixo] = useState(null);

  const handleClick = (nomeChave) => {
    const eixoSelecionado = eixosTematicos.find((eixo) =>
      eixo.nome.toLowerCase().includes(nomeChave)
    );
    setSelectedEixo(eixoSelecionado);
  };

  return (
    <div className="w-full h-screen flex items-center justify-center relative">
      <div className="grid grid-cols-3 grid-rows-3 gap-8 h-[88vh] content-center justify-center p-2 w-[104rem]">
        <div
          className="flex items-center justify-center col-span-2 row-span-1 bg-[var(--color-green)] rounded-br-[11rem] transition-all duration-[0.3s] ease-in-out card-hover card-hover-green"
          onMouseEnter={() => setHovered("universo")}
          onMouseLeave={() => setHovered("")}
          onClick={() => handleClick("universo")}
        >
          <img
            src={
              hovered === "universo"
                ? "/svg/universo_sp_colorido.svg"
                : "/svg/universo_sp.svg"
            }
            alt=""
          />
        </div>
        <div
          className="flex items-center justify-center col-span-1 row-span-2 bg-[var(--color-blue-950)] rounded-bl-[11rem] card-hover card-hover-blue"
          onMouseEnter={() => setHovered("cidade")}
          onMouseLeave={() => setHovered("")}
          onClick={() => handleClick("cidade")}
        >
          <img
            src={
              hovered === "cidade"
                ? "/svg/cidade_empreendedora_colorido.svg"
                : "/svg/cidade_empreendedora.svg"
            }
            alt=""
          />
        </div>
        <div
          className="flex items-center justify-center col-span-1 row-span-2 bg-[var(--color-orange-red)] rounded-tr-[11rem] card-hover card-hover-purple"
          onMouseEnter={() => setHovered("viver")}
          onMouseLeave={() => setHovered("")}
          onClick={() => handleClick("viver")}
        >
          <img
            src={
              hovered === "viver"
                ? "/svg/viver_sp_colorido.svg"
                : "/svg/viver_sao_paulo.svg"
            }
            alt=""
          />
        </div>
        <div className="text-white flex items-center justify-center">
          <img className="w-56" src="/svg/logo-pdm-black.svg" alt="" />
        </div>
        <div
          className="flex items-center justify-center col-span-2 bg-[var(--color-purple-red)] rounded-tl-[11rem] card-hover card-hover-orange"
          onMouseEnter={() => setHovered("capital")}
          onMouseLeave={() => setHovered("")}
          onClick={() => handleClick("capital")}
        >
          <img
            src={
              hovered === "capital"
                ? "/svg/capital_futuro_colorido.svg"
                : "/svg/capital_do_futuro.svg"
            }
            alt=""
          />
        </div>
        {selectedEixo && (
          <div className="absolute top-15 left-0 z-50 w-full flex items-center justify-center">
            <CardSectionEixos
              eixo={selectedEixo}
              onClose={() => setSelectedEixo(null)}
            />
          </div>
        )}
      </div>
    </div>
  );
}