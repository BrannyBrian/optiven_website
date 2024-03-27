import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";

SwiperCore.use([Navigation, Autoplay]);

interface Partner {
  id: number;
  partnerName: string;
  partnerLogo: string;
}

interface PartnersProps {
  partners: Partner[];
}

interface CustomStyle extends React.CSSProperties {
  "--swiper-pagination-color"?: string;
  "--swiper-navigation-color"?: string;
}

const Partners: React.FC<PartnersProps> = ({ partners }) => {
  const swiperStyle: CustomStyle = {
    "--swiper-pagination-color": "#8ABF2C",
    "--swiper-navigation-color": "#8ABF2C",
  };

  return (
    <div className="bg-gray-100 py-32">
      <h2 className="text-3xl text-center mb-24 -mt-24">Our Partners</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation
        autoplay={{ delay: 3000 }}
        breakpoints={{
          400: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        className="w-full h-full"
        style={swiperStyle}
      >
        {partners.map((partner) => (
          <SwiperSlide key={partner.id}>
            <div className="flex flex-col items-center h-full justify-center">
              <img
                src={partner.partnerLogo}
                alt={partner.partnerName}
                className="h-auto w-auto"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Partners;
