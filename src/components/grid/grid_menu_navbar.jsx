import React from "react";

export default function Grid_menu_navbar({ onClose }) {
  return (
    <div>
      <div className="grid grid-cols-[3fr_1fr] gap-4 p-4 h-screen">
        {/* Grid principal (coluna esquerda) */}
        <div className="grid grid-cols-4 grid-rows-3 gap-7 w-[98rem] h-[55rem]">
          <div className="bg-[var(--color-dark-red)] text-white p-4 flex items-start justify-center rounded-br-[5rem] hover:shadow-[-1px_0px_20px_13px_var(--color-dark-red)] hover:scale-105 transition-transform duration-300 min-h-[28rem] cursor-pointer">
            <button className="text-start w-full cursor-pointer">
              <h2>sobre o pdm</h2>
            </button>
          </div>

          <div className="bg-[var(--color-green)] col-span-2 text-white p-4 flex items-center justify-center rounded-br-[5rem] hover:shadow-[-1px_0px_20px_13px_var(--color-green)] hover:scale-105 transition-transform duration-300 cursor-pointer">
            <button className="flex items-center justify-center w-full cursor-pointer">
              <img src="/svg/universo_sp.svg" alt="" />
            </button>
          </div>

          <div className="bg-[var(--color-orange)] row-span-2 text-white p-4 flex items-center justify-center rounded-bl-[5rem] hover:shadow-[-1px_0px_20px_13px_var(--color-orange)] hover:scale-105 transition-transform duration-300 cursor-pointer">
            <button className="text-start w-full cursor-pointer">
              <img src="/svg/viver_sao_paulo.svg" alt="" />
            </button>
          </div>

          <div className="bg-[var(--color-red)] relative h-44 top-44 text-white p-4 flex items-start justify-start rounded-bl-[5rem] hover:shadow-[-1px_0px_20px_13px_var(--color-red)] hover:scale-105 transition-transform duration-300 break-words cursor-pointer">
            <button className="text-start w-full cursor-pointer">
              <h2 className="relative left-4">programas de metas anteriores</h2>
            </button>
          </div>

          <div className="bg-[var(--color-purple-red)] row-span-2 text-white p-4 flex items-center justify-center rounded-tr-[5rem] hover:shadow-[-1px_0px_20px_13px_var(--color-purple-red)] hover:scale-105 transition-transform duration-300 cursor-pointer">
            <button className="text-start w-full cursor-pointer">
              <img src="/svg/capital_do_futuro.svg" alt="" />
            </button>
          </div>

          <div className="bg-[var(--color-blue-1000)] text-white p-4 flex items-center justify-center rounded-br-[5rem] hover:shadow-[-1px_0px_20px_13px_var(--color-blue-1000)] hover:scale-105 transition-transform duration-300 cursor-pointer">
            <button className="text-start w-full cursor-pointer">
              <div className="flex flex-col flex-nowrap items-center">
                <h2 className="w-40 relative right-12">conheça as metas</h2>
                <img className="w-25 relative left-20" src="/svg/logo-pdm.svg" alt="" />
              </div>
            </button>
          </div>

          <div className="bg-[var(--color-cyan-medium)] h-52 text-white p-4 flex items-end justify-center rounded-tr-[5rem] relative top-[4.55rem] hover:shadow-[-1px_0px_20px_13px_var(--color-cyan-medium)] hover:scale-105 transition-transform duration-300 cursor-pointer">
            <button className="text-start w-full cursor-pointer">
              <h2>participação social</h2>
            </button>
          </div>

          <div className="z-[1] bg-[var(--color-blue-950)] col-span-2 text-white p-4 flex items-center justify-center rounded-tl-[5rem] hover:shadow-[-1px_0px_20px_13px_var(--color-blue-950)] hover:scale-105 transition-transform duration-300 cursor-pointer">
            <button className="flex items-center justify-center w-full cursor-pointer">
              <img src="/svg/cidade_empreendedora.svg" alt="" />
            </button>
          </div>
        </div>

        {/* Grid lateral (coluna direita) */}
        <div className="grid grid-rows-[26.5rem_10rem_8rem_8rem] gap-4 w-full h-[55rem]">
          <div className="bg-[var(--color-dark-green)] text-white p-4 flex items-end justify-center rounded-tl-[5rem] hover:shadow-[-1px_0px_20px_13px_var(--color-dark-green)] hover:scale-105 transition-transform duration-900 cursor-pointer">
            <button className="text-start w-full cursor-pointer">
              <h2>regionalização</h2>
            </button>
          </div>

          <div className="bg-[var(--color-green-light)] text-white h-[11.5rem] p-4 flex items-start justify-center rounded-bl-[5rem] hover:shadow-[-1px_0px_20px_13px_var(--color-green-light)] hover:scale-105 transition-transform duration-900 cursor-pointer">
            <button className="text-start w-full cursor-pointer">
              <h2>transparência</h2>
            </button>
          </div>

          <div className="w-full z-0">
            <button className="relative top-6 text-start w-full h-28 bg-[var(--color-red-dark)] text-white p-4 flex items-center justify-center rounded-bl-[5rem] hover:shadow-[-1px_0px_20px_13px_var(--color-red-dark)] hover:scale-105 transition-transform duration-900 cursor-pointer z-0">
              <h2>página inicial</h2>
            </button>
          </div>

          <div>
            <button
              className="w-full h-30 text-[color:var(--color-blue-1000)] p-4 border-[color:var(--color-blue-1000)] border-[0.4rem] border-solid flex items-center justify-center rounded-tr-[5rem] hover:scale-105 transition-transform duration-900 cursor-pointer"
              onClick={onClose}
              aria-label="Fechar menu"
            >
              <h2>sair</h2>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
