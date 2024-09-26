const images = [
  "https://wallpapers.com/images/high/random-background-1680-x-1080-p8npj4s3zlsvsbrf.webp",
  "https://wallpapers.com/images/high/random-background-1920-x-1080-3k1zpqg6g46q1z37.webp",
  "https://wallpapers.com/images/high/random-background-ky6jwiw1a3s5nc2u.webp",
  "https://wallhalla.com/thumbs/17",
  "https://wallhalla.com/thumbs/43",
];

const ImageSlider = () => {
  return (
    <div className="flex justify-center mt-10">
      <img className="w-[630px]" src={images[0]} />
    </div>
  );
};

export default ImageSlider;
