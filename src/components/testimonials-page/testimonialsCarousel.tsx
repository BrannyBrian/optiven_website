import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";
import { Modal } from "flowbite-react";

SwiperCore.use([Navigation, Autoplay]);

interface Testimonial {
  id: number;
  attributes: {
    clientName: string;
    clientTitle: string;
    clientComment: string;
  };
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

interface CustomStyle extends React.CSSProperties {
  "--swiper-pagination-color"?: string;
  "--swiper-navigation-color"?: string;
}

const TestimonialsCarousel: React.FC<TestimonialsProps> = ({
  testimonials,
}) => {
  const [openModal, setOpenModal] = useState<number | null>(null);

  const swiperStyle: CustomStyle = {
    "--swiper-pagination-color": "#8ABF2C",
    "--swiper-navigation-color": "#8ABF2C",
  };

  return (
    <div className="bg-white py-16 mb-8">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation
        autoplay={{ delay: 3000 }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        className="w-full h-full"
        style={swiperStyle}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={testimonial.id}>
            <div className="flex flex-col items-center h-full justify-center p-4 border-2 rounded-xl">
              <img
                alt={`${testimonial.attributes.clientName}`}
                className="w-20 h-20 mb-4 object-cover object-center rounded-full border-2 border-gray-200 bg-gray-100"
                src="/avatar.png"
              />
              <p className="leading-relaxed text-center">
                {testimonial.attributes.clientComment &&
                testimonial.attributes.clientComment.length > 200
                  ? testimonial.attributes.clientComment.substring(0, 140) +
                    "..."
                  : testimonial.attributes.clientComment}
                {testimonial.attributes.clientComment.length > 200 && (
                  <div
                    onClick={() => setOpenModal(index)}
                    className="text-green-600 italic cursor-pointer hover:underline"
                  >
                    read more
                  </div>
                )}
              </p>
              <span className="inline-block h-1 w-10 rounded bg-green-500 mt-6 mb-4" />
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                {testimonial.attributes.clientName}
              </h2>
              <p className="text-gray-500">
                {testimonial.attributes.clientTitle}
              </p>
            </div>
            {openModal === index && (
              <Modal show={true} onClose={() => setOpenModal(null)}>
                <Modal.Header>
                  <div className="text-xl">
                    {testimonial.attributes.clientName}
                  </div>
                </Modal.Header>
                <Modal.Body>
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    {testimonial.attributes.clientComment}
                  </p>
                </Modal.Body>
              </Modal>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialsCarousel;
