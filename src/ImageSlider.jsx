import { useState } from "react";

const images = [
  "https://wallhalla.com/thumbs/18",
  "https://wallpapers.com/images/high/random-background-1920-x-1080-3k1zpqg6g46q1z37.webp",
  "https://wallpapers.com/images/high/random-background-ky6jwiw1a3s5nc2u.webp",
  "https://wallhalla.com/thumbs/17",
  "https://wallhalla.com/thumbs/43",
];

const ImageSlider = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  return (
    <div className="flex justify-center mt-10 gap-10">
      <button
        onClick={() => {
          activeImageIndex === 0
            ? setActiveImageIndex(images.length - 1)
            : setActiveImageIndex(activeImageIndex - 1);
        }}
      >
        Previous
      </button>
      {images.map((url, i) => (
        <img
          key={url}
          className={
            `w-[630px] h-[360px] object-contain ` +
            (activeImageIndex === i ? "block" : "hidden")
          }
          src={url}
          alt="carousel"
        />
      ))}
      <button
        onClick={() => {
          setActiveImageIndex((activeImageIndex + 1) % images.length);
        }}
      >
        Next
      </button>
    </div>
  );
};

export default ImageSlider;
