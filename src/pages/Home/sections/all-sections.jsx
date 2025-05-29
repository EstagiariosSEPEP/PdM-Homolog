import { useEffect } from "react";
import { scrollToSection } from "../../../utils/scroll";

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
    <div>
    </div>
  );
}
