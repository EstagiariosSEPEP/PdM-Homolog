import Line from "../../components/line/line";
import { useEffect } from "react";
import { scrollToSection } from "../../utils/scroll";

function Home() {
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault(); // Evita o salto direto
        const id = link.getAttribute("href").substring(1);
        scrollToSection(id);
      });
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", () => {});
      });
    };
  }, []);

  return (
    <Line />
  );
}

export default Home;