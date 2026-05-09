import img1 from "../../assets/images/blog/blog-1.jpg";
import img2 from "../../assets/images/blog/blog-2.jpg";
import img3 from "../../assets/images/blog/blog-3.jpg";
import img4 from "../../assets/images/blog/blog-4.jpg";
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
    image: img1,
    date: "Homeowner Guide",
    comments: 0,
    title: "When to Repair Drywall vs. Replace the Sheetrock",
    link: "#!",
  },
  {
    id: 2,
    image: img2,
    date: "Maintenance Tip",
    comments: 0,
    title: "Small Home Repairs That Prevent Bigger Problems",
    link: "#!",
  },
  {
    id: 3,
    image: img3,
    date: "Project Planning",
    comments: 0,
    title: "Planning a Basement Remodel Without Wasting Space",
    link: "#!",
  },
  {
    id: 4,
    image: img4,
    date: "Exterior Work",
    comments: 0,
    title: "What to Know Before Adding or Repairing a Patio",
    link: "#!",
  },
  {
    id: 5,
    image: img2,
    date: "Painting Prep",
    comments: 0,
    title: "Why Paint Prep Matters More Than the Paint Brand",
    link: "#!",
  },
  {
    id: 6,
    image: img1,
    date: "Local Service",
    comments: 0,
    title: "Hiring a Handyman Near Plymouth Meeting, PA",
    link: "#!",
  },
];

const Blog = () => {
  return (
    <div className="content py-25 px-2 relative" id="blog">
      <div className="max-w-135 text-center mx-auto pb-17.5">
        <p className="section-title pb-6">Home Repair Notes</p>
        <p className="text-xs xs:text-[16px] md:text-lg text-gray-400">
          Practical topics for homeowners comparing repairs, remodels, painting, concrete, patios, and maintenance work.
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
