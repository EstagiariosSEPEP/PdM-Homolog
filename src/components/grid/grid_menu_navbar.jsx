import React from "react";

export default function Grid_menu_navbar({ onClose }) {
  return (
    <div>
      <div className="grid grid-cols-[3fr_1fr] gap-4 p-4 h-screen">
        {/* Grid principal (coluna esquerda) */}
        <div className="grid grid-cols-4 grid-rows-3 gap-4 w-[66rem] h-[38rem]">
          <div className="bg-[var(--color-dark-red)] text-white p-4 flex items-start justify-center rounded-br-[2rem] hover:shadow-[-1px_0px_20px_13px_var(--color-dark-red)] hover:scale-105 transition-transform duration-300 min-h-[18rem] cursor-pointer">
            <button className="text-start w-full cursor-pointer">
              <h4>sobre o pdm</h4>
            </button>
          </div>

          <div className="bg-[var(--color-green)] col-span-2 text-white p-4 flex items-center justify-center rounded-br-[2rem] hover:shadow-[-1px_0px_20px_13px_var(--color-green)] hover:scale-105 transition-transform duration-300 cursor-pointer">
            <button className="text-start w-full cursor-pointer">
              <img src="/svg/universo_sp.svg" alt="" />
            </button>
          </div>

          <div className="bg-[var(--color-orange)] row-span-2 text-white p-4 flex items-center justify-center rounded-bl-[2rem] hover:shadow-[-1px_0px_20px_13px_var(--color-orange)] hover:scale-105 transition-transform duration-300 cursor-pointer">
            <button className="text-start w-full cursor-pointer">
              <img src="/svg/viver_sao_paulo.svg" alt="" />
            </button>
          </div>

          <div className="bg-[var(--color-red)] relative top-[5.5rem] text-white p-4 flex items-start justify-start rounded-bl-[2rem] hover:shadow-[-1px_0px_20px_13px_var(--color-red)] hover:scale-105 transition-transform duration-300 h-[9rem] break-words cursor-pointer">
            <button className="text-start w-full cursor-pointer">
              <h4>programas de metas anteriores</h4>
            </button>
          </div>

          <div className="bg-[var(--color-purple-red)] row-span-2 text-white p-4 flex items-center justify-center rounded-tr-[2rem] hover:shadow-[-1px_0px_20px_13px_var(--color-purple-red)] hover:scale-105 transition-transform duration-300 cursor-pointer">
            <button className="text-start w-full cursor-pointer">
              <img src="/svg/capital_do_futuro.svg" alt="" />
            </button>
          </div>

          <div className="bg-[var(--color-blue-1000)] text-white p-4 flex items-center justify-center rounded-br-[2rem] hover:shadow-[-1px_0px_20px_13px_var(--color-blue-1000)] hover:scale-105 transition-transform duration-300 cursor-pointer">
            <button className="text-start w-full cursor-pointer">
              <div className="flex flex-col flex-nowrap items-end">
                <h4 className="w-40">conheça as metas</h4>
                <img className="w-20" src="/svg/logo-pdm.svg" alt="" />
              </div>
            </button>
          </div>

          <div className="bg-[var(--color-cyan-medium)] h-40 text-white p-4 flex items-end justify-center rounded-tr-[2rem] relative top-[2.3rem] hover:shadow-[-1px_0px_20px_13px_var(--color-cyan-medium)] hover:scale-105 transition-transform duration-300 cursor-pointer">
            <button className="text-start w-full cursor-pointer">
              <h4>participação social</h4>
            </button>
          </div>

          <div className="bg-[var(--color-blue-950)] col-span-2 text-white p-4 flex items-center justify-center rounded-tl-[2rem] hover:shadow-[-1px_0px_20px_13px_var(--color-blue-950)] hover:scale-105 transition-transform duration-300 cursor-pointer">
            <button className="text-start w-full cursor-pointer">
              <img src="/svg/cidade_empreendedora.svg" alt="" />
            </button>
          </div>
        </div>

        {/* Grid lateral (coluna direita) */}
        <div className="grid grid-rows-[20rem_5rem_5rem_auto] gap-2 w-full h-full">
          <div className="bg-[var(--color-dark-green)] text-white p-4 flex items-center justify-center rounded-tl-[2rem] hover:shadow-[-1px_0px_20px_13px_var(--color-dark-green)] hover:scale-105 transition-transform duration-900 cursor-pointer">
            <button className="text-start w-full cursor-pointer">
              <h4>regionalização</h4>
            </button>
          </div>

          <div className="bg-[var(--color-green-light)] text-white p-4 flex items-center justify-center rounded-bl-[2rem] hover:shadow-[-1px_0px_20px_13px_var(--color-green-light)] hover:scale-105 transition-transform duration-900 cursor-pointer">
            <button className="text-start w-full cursor-pointer">
              <h4>transparência</h4>
            </button>
          </div>

          <div className="w-full">
            <button className="text-start w-full bg-[var(--color-red-dark)] text-white p-4 flex items-center justify-center rounded-bl-[2rem] hover:shadow-[-1px_0px_20px_13px_var(--color-red-dark)] hover:scale-105 transition-transform duration-900 cursor-pointer">
              <h4>página inicial</h4>
            </button>
          </div>

          <div>
            <button
              className="w-full text-[color:var(--color-blue-1000)] p-4 border-[color:var(--color-blue-1000)] border-[0.4rem] border-solid flex items-center justify-center rounded-tr-[2rem] hover:scale-105 transition-transform duration-900 cursor-pointer"
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
