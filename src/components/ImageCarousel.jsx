// import React, { useState, useEffect } from "react";

const images = [
  "static/images/sideeye.jpeg",
  "static/images/bisc-hat.jpeg",
  "static/images/bisc-face.jpeg",
  "static/images/bowtie.jpeg",
];

export default function ImageCarousel() {
  return (
    <div className="flex gap-4 justify-center p-4">
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Image ${i}`}
          width={300}
          height={200}
          className="rounded-lg shadow w-[15%] h-[15%]"
        />
      ))}
    </div>
  );
}
