import { useState } from "react";

interface ImageSliderProps {
  images: string[];
}

const ImageSlider = ({ images }: ImageSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative w-full max-w-[450px] h-[400px] mx-auto">
      {/* تصاویر */}
      <div className="w-full h-full overflow-hidden rounded-lg shadow-lg">
        <img
          src={`http://${images?.[currentIndex]}`}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
          alt={`Product image ${currentIndex}`}
        />
      </div>

      {/* دکمه‌های ناوبری */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-3 transform -translate-y-1/2 text-[#fff] bg-tint-5 text-white rounded-full shadow-lg p-3 hover:bg-tint-6 transition duration-300"
      >
        {">"}
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-3 transform -translate-y-1/2 text-[#fff] bg-tint-5 text-white rounded-full shadow-lg p-3 hover:bg-tint-6 transition duration-300"
      >
        {"<"}
      </button>

      {/* نقاط ناوبری */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {images?.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-primary" : "bg-gray-4"
            } transition-all duration-300`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
