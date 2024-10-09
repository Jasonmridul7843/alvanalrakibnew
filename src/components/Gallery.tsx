import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import gallery1 from '../assets/images/gallery1.jpg';
import gallery2 from '../assets/images/gallery2.jpg';
import gallery3 from '../assets/images/gallery3.jpg';
import gallery4 from '../assets/images/gallery4.jpg';

const images = [gallery1, gallery2, gallery3, gallery4];

const Gallery: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Gallery</h2>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="px-2">
              <img src={image} alt={`Gallery image ${index + 1}`} className="w-full h-[600px] object-cover rounded-lg" />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Gallery;