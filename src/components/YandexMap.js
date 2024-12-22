import React, { useEffect, useRef } from "react";

const YandexMap = () => {
  const mapContainer = useRef(null);

  useEffect(() => {
    const loadMap = () => {
      if (!window.ymaps) return;
      window.ymaps.ready(() => {
        const map = new window.ymaps.Map(mapContainer.current, {
          center: [55.521832, 28.675014], 
          zoom: 13,
        });

        const placemarkCoordinates = [55.521832, 28.675014];


        const placemark = new window.ymaps.Placemark(placemarkCoordinates, {
          // balloonContent: "Метка ",
        });
        map.geoObjects.add(placemark);

  
        const offset = 0.01; 
        map.setCenter(
          [placemarkCoordinates[0], placemarkCoordinates[1] - offset],
          15
        );
      });
    };

    const script = document.createElement("script");
    script.src = `https://api-maps.yandex.ru/2.1/?apikey=${process.env.YANDEX_KEY}&lang=ru_RU`;
    script.type = "text/javascript";
    script.onload = loadMap;
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return <div ref={mapContainer} style={{ width: "100%", height: "400px" }} />;
};

export default YandexMap;
