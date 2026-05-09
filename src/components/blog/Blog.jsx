import handymanRepairs from "../../assets/images/IMG_6449.jpg";
import drywallRepair from "../../assets/images/IMG_6898.jpg";
import basementRemodel from "../../assets/images/IMG-20260401-WA0010.jpg.jpg";
import exteriorRepairs from "../../assets/images/IMG_7150-1.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import MonoBlog from "./MonoBlog";
import "swiper/css";
import "swiper/css/pagination";
import "./blog.css";

// Breakpoints for swiperJS
const custom_breakpoints = {
  640: {
    slidesPerView: 2,
    spaceBetween: 15,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 15,
  },
  1220: {
    slidesPerView: 4,
    spaceBetween: 24,
  },
};

const blogData = [
  {
    id: 1,
    image: handymanRepairs,
    date: "Handyman Plymouth Meeting",
    title: "Handyman in Plymouth Meeting, PA: Small Repairs That Keep a Home Moving",
    excerpt:
      "A practical repair-list guide for homeowners near Cherry Ln, Whitemarsh Township, Lafayette Hill, and Montgomery County.",
    link: "#contact",
  },
  {
    id: 2,
    image: drywallRepair,
    date: "Drywall Repair",
    title: "Drywall Repair in Plymouth Meeting: Patch, Sand, Paint, and Finish",
    excerpt:
      "How to think about sheetrock patches, sanding, paint prep, and clean wall repairs before requesting an estimate.",
    link: "#contact",
  },
  {
    id: 3,
    image: basementRemodel,
    date: "Basement Remodeling",
    title: "Basement Remodeling Near Plymouth Meeting Without Wasting Space",
    excerpt:
      "Simple ways to turn an unfinished basement into useful space with drywall, paint, trim, storage, and careful planning.",
    link: "#contact",
  },
  {
    id: 4,
    image: exteriorRepairs,
    date: "Decks, Patios & Exterior",
    title: "Deck, Patio, and Exterior Repairs Around Whitemarsh and Conshohocken",
    excerpt:
      "A local exterior-repair guide for safer steps, patio fixes, concrete touch-ups, and outdoor areas that need attention.",
    link: "#contact",
  },
];

const Blog = () => {
  return (
    <div className="content py-25 px-2 relative" id="blog">
      <div className="max-w-135 text-center mx-auto pb-17.5">
        <p className="section-title pb-6">Home Repair Notes</p>
        <p className="text-xs xs:text-[16px] md:text-lg text-gray-400">
          Local repair notes for Plymouth Meeting homeowners comparing drywall, basements, patios, painting, carpentry, and practical handyman work.
        </p>
      </div>
      <Swiper
        grabCursor={true}
        breakpoints={custom_breakpoints}
        pagination={{ clickable: true }}
        modules={[Pagination]}
      >
        {blogData?.map((data, index) => (
          <SwiperSlide
            key={index}
            className="mb-10" /* pagination margin bottom to 40px */
            style={{ backgroundColor: "rgba(0,0,0,0)" }}
          >
            <MonoBlog data={data} key={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Blog;
