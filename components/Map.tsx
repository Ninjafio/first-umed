"use client";

import React, { useEffect } from "react";

const Map = () => {
  return (
    <div
      style={{
        overflow: "hidden",
        left: 0,
        maxWidth: '100%',
      }}
    >
      <iframe
        src="https://yandex.ru/map-widget/v1/?ll=61.339293%2C55.183602&mode=whatshere&whatshere%5Bpoint%5D=61.338539%2C55.183720&whatshere%5Bzoom%5D=17&z=17.88"
        height="350"
        allowFullScreen={true}
        style={{
          position: "relative",
          border: "none",
          width: '100%',
        }}
      ></iframe>
    </div>
  );
};

export default Map;
