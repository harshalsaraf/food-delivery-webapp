import React from "react";
import { Carousel } from "antd";

const Carouselimg = () => {
  const contentStyle = {
    height: "400px",
    lineHeight: "160px",
    textAlign: "center",
  };

  const imageStyle = {
    width: "100%",
    height: "500px",
    objectFit: "cover", // Adjust this value based on your needs (cover, contain, fill, etc.)
  };

  return (
    <div className="carousel">
      <Carousel autoplay>
        <div style={contentStyle}>
          <img
            src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Image 1"
            style={imageStyle}
          />
        </div>
        <div style={contentStyle}>
          <img
            src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Image 2"
            style={imageStyle}
          />
        </div>
        <div style={contentStyle}>
          <img
            src="https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Image 3"
            style={imageStyle}
          />
        </div>
        <div style={contentStyle}>
          <img
            src="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Image 4"
            style={imageStyle}
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Carouselimg;
