import { useState, useEffect } from "react";
import { images } from "./constants";
const ImageSlider = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const handlePreviousImage = () => {
    activeImageIndex === 0
      ? setActiveImageIndex(images.length - 1)
      : setActiveImageIndex(activeImageIndex - 1);
  };

  const handlNextImage = () => {
    setActiveImageIndex((activeImageIndex + 1) % images.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handlNextImage();
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [activeImageIndex]);

  return (
    <div className="flex justify-center mt-10 gap-10">
      <button onClick={handlePreviousImage}>Previous</button>
      {images.map((url, i) => (
        <img
          key={url}
          className={
            `w-[630px] h-[360px] rounded-xl object-contain ` +
            (activeImageIndex === i ? "block" : "hidden")
          }
          src={url}
          alt="carousel"
        />
      ))}
      <button onClick={handlNextImage}>Next</button>
    </div>
  );
};

export default ImageSlider;
