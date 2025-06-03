import React, { useState } from "react";
import Grid_menu_navbar from "../grid/grid_menu_navbar";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [animacao, setAnimacao] = useState("");

  const toggleMenu = () => {
    setAnimacao("slide-down");
    setIsOpen(true);
  };

  const closeMenu = () => {
    setAnimacao("slide-up");
    setTimeout(() => {
      document.activeElement?.blur();
      setIsOpen(false);
    }, 500);
  };

  return (
    <div>
      <div className="flex flex-row flex-nowrap items-center justify-between p-2">
        <img
          className="w-40 h-10"
          src="/svg/logo_PrefSP_com_fundo_horizontal_preto_monocromatico.svg"
          alt="Logo da Prefeitura de São Paulo"
        />
        <div>
          <button
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-controls="main-menu"
          >
            <h2>menu</h2>
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          id="main-menu"
          role="dialog"
          className={`${animacao} fixed inset-0 bg-white z-50`}
        >
          <Grid_menu_navbar onClose={closeMenu} />
        </div>
      )}
    </div>
  );
}