import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const ImageGallery = () => {
  const [imageData, setImageData] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const containerRef = useRef(null);
  const autoScrollInterval = useRef(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get("https://picsum.photos/v2/list?page=1&limit=10%22");
        setImageData(response.data);
        setSelectedImage(response.data[0]);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  useEffect(() => {
    // Start auto-scrolling when component mounts
    startAutoScroll();

    // Cleanup on component unmount
    return () => {
      stopAutoScroll();
    };
  }, []);

  const startAutoScroll = () => {
    autoScrollInterval.current = setInterval(() => {
      scrollRight();
    }, 1000); // Change the interval duration as needed
  };

  const stopAutoScroll = () => {
    clearInterval(autoScrollInterval.current);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= containerRef.current.offsetWidth;
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += containerRef.current.offsetWidth;
    }
  };

  return (
    <div className="container mx-auto mt-8 relative">
      <div className="text-2xl text-center font-bold text-white mb-4">Photo Gallery</div>
      <div
        className="flex overflow-hidden"
        ref={containerRef}
        onMouseEnter={stopAutoScroll}
        onMouseLeave={startAutoScroll}
      >
        {imageData.map((image) => (
          <div
            key={image.id}
            className="flex-shrink-0 w-64 mr-4 relative"
            onClick={() => handleImageClick(image)}
          >
            <div
              className={`overflow-hidden rounded-lg shadow-lg transform transition-transform ${
                selectedImage && selectedImage.id === image.id ? "scale-125" : "scale-100"
              }`}
            >
              <img src={image.thumbnailUrl} alt={image.title} className="w-full h-48 object-cover" />
              {selectedImage && selectedImage.id === image.id && (
                <div className="absolute inset-0 bg-black opacity-50"></div>
              )}
              {selectedImage && selectedImage.id === image.id && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-lg font-semibold text-white">{image.title}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white text-gray-700 px-2 py-1 rounded-full opacity-50 hover:opacity-100"
        onClick={scrollLeft}
      >
        &lt;
      </button>
      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white text-gray-700 px-2 py-1 rounded-full opacity-50 hover:opacity-100"
        onClick={scrollRight}
      >
        &gt;
      </button>
    </div>
  );
};

export default ImageGallery;
