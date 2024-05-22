"use client";
import { useState } from "react";

export default function AlternativImage() {
  const [currentImage, setCurrentImage] = useState("");

  const altImages = {
    alt1: "https://www.elgiganten.se/image/dv_web_D1800010021004136/465970/apple-airpods-max-tradlosa-around-ear-horlurar-pink--pdp_zoom-3000.jpg",
    alt2: "https://www.elgiganten.se/image/dv_web_D1800010021004148/465965/apple-airpods-max-tradlosa-around-ear-horlurar-green--pdp_zoom-3000.jpg",
    alt3: "https://www.elgiganten.se/image/dv_web_D1800010021004121/465968/apple-airpods-max-tradlosa-around-ear-horlurar-sky-blue--pdp_zoom-3000.jpg",
    alt4: "https://www.elgiganten.se/image/dv_web_D1800010021004254/465968/apple-airpods-max-tradlosa-around-ear-horlurar-sky-blue--pdp_zoom-3000.jpg",
  };

  return (
    <div className="flex flex-row justify-between h-24">
      <div className="flex flex-row space-x-2">
        {Object.values(altImages).map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Alt ${index + 1}`}
            className="w-32 h-32 rounded-md cursor-pointer"
            onClick={() => setCurrentImage(url)}
          />
        ))}
      </div>
    </div>
  );
}
