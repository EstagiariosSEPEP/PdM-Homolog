import { useEffect } from "react";
import { scrollToSection } from "../../../utils/scroll";
import Introduction from "./introduction-section/introduction";
import About from "./about-section/about";
import Eixos from "./eixos-section/eixos";
import ParticipacaoSocial from "./participação/ParticipacaoSocial";
import Regionalizacao from "./regionalizacao/Regionalizacao";

export default function AllSections() {
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');
    const handleClick = (event) => {
      event.preventDefault(); // Evita o salto direto
      const id = event.currentTarget.getAttribute("href").substring(1);
      scrollToSection(id);
    };

    links.forEach((link) => {
      link.addEventListener("click", handleClick);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleClick);
      });
    };
  }, []);

  return (
    <div className="pt-24 flex flex-col justify-center flex-nowrap ">
        <div><Introduction/></div>
        <div><About/></div>
        <div><Eixos/></div>
        <div><ParticipacaoSocial/></div>
        <div><Regionalizacao/></div>
    </div>
  );
}
