import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import TestimonialTemplate from "./TestimonialTemplate";
import "./testimonial.css";

const testimonialData = [
  {
    message:
      "The drywall repair blended in cleanly and the room was left ready to paint.",
    quote: `The estimate was clear, the work area stayed organized, and the finished wall looked like the damage had never happened.`,
    name: "Plymouth Meeting Homeowner",
    designation: "Drywall Repair",
  },
  {
    message:
      "The painting and trim work made the space feel finished without dragging out the project.",
    quote: `LambertWorks showed up when expected, protected the floors, and handled the small details that make the final result look professional.`,
    name: "Local Client",
    designation: "Interior Painting & Trim",
  },
  {
    message:
      "The patio repair was explained clearly and completed with a clean, solid finish.",
    quote: `We appreciated the honest recommendations and the attention to making the outdoor area safer and easier to use.`,
    name: "Nearby Homeowner",
    designation: "Patio & Concrete Work",
  },
];

const Testimonial = () => {
  return (
    <div className="flex mx-auto justify-center px-2 max-w-218 pb-10 md:pb-25">
      <div className="w-full h-full cursor-grab">
        <p className="section-title mb-6 text-center">What Clients Notice</p>
        <Swiper
          id="testimonialSwiper"
          spaceBetween={30}
          navigation={false}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
        >
          {testimonialData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialTemplate testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
