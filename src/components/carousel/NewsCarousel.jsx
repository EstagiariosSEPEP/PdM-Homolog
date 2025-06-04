import React, { useEffect, useState } from "react";
import newsData from "../../services/data/news.json";

const NewsCarousel = () => {
  const [current, setCurrent] = useState(0);
  const total = newsData.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 4000);

    return () => clearInterval(interval);
  }, [total]);

  const handleSelect = (index) => {
    setCurrent(index);
  };

  return (
    <div className="flex items-center justify-evenly gap-4 absolute px-12 py-0 gap-32">
      <h3 className="text-white font-bold text-lg relative top-4">notícias</h3>

      <div className="flex flex-col items-start justify-evenly flex-nowrap relative w-[45rem] h-[2rem]">
        {newsData.map((news, index) => (
          <a
            key={index}
            href={news.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`absolute transition-all duration-700 ease-in-out ${
              index === current
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2 pointer-events-none"
            } text-white`}
          >
            {news.text}
          </a>
        ))}
        <div className="absolute top-[3.6rem] right-[26rem] flex gap-2">
          {newsData.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSelect(index)}
              className={`w-3 h-3 rounded-full ${
                index === current ? "bg-white" : "bg-gray-400"
              } focus:outline-none`}
              aria-label={`Ir para notícia ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsCarousel;