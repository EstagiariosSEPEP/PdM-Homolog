export default function EixosSection() {
  return (
    <div>
      <div className=" w-full h-screen">
        <div className="grid grid-cols-3 grid-rows-3 gap-8 h-[88vh] content-center justify-center p-2">
          {/* UNIVERSO SP (2 col span) */}
          <div className="flex items-center justify-items-center justify-center col-span-2 row-span-1 bg-[var(--color-green)] rounded-br-[11rem] transition-all duration-[0.3s] ease-in-out card-hover card-hover-green">
            <img src="/svg/universo_sp.svg" alt="" />
          </div>

          {/* CIDADE EMPREENDEDORA (2 row span) */}
          <div className="flex items-center justify-items-center justify-center col-span-1 row-span-2 bg-[var(--color-blue-950)] rounded-bl-[11rem] card-hover card-hover-blue">
            <img src="/svg/cidade_empreendedora.svg" alt="" />
          </div>

          {/* VIVER SÃO PAULO (2 row span) */}
          <div className="flex items-center justify-items-center justify-center col-span-1 row-span-2 bg-[var(--color-purple-red)] rounded-tr-[11rem] card-hover card-hover-purple">
            <img src="/svg/viver_sao_paulo.svg" alt="" />
          </div>

          {/* LOGO CENTRAL */}
          <div className="text-white flex items-center justify-center">
            <img className="w-56" src="/svg/logo-pdm-black.svg" alt="" />
          </div>

          {/* CAPITAL DO FUTURO (2 col span) */}
          <div className="flex items-center justify-items-center justify-center col-span-2 bg-[var(--color-orange-red)] rounded-tl-[11rem] card-hover card-hover-orange">
            <img src="/svg/capital_do_futuro.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
