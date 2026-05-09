import Projects from "./Projects";
import card1 from "../../assets/images/portfolio-images/card-1.png";
import card2 from "../../assets/images/portfolio-images/card-2.png";
import card3 from "../../assets/images/portfolio-images/card-3.png";
import card4 from "../../assets/images/portfolio-images/card-4.png";
import card5 from "../../assets/images/portfolio-images/card-5.png";
import card6 from "../../assets/images/portfolio-images/card-6.png";

const projectData = [
  {
    id: 1,
    image: card1,
    category: "DRYWALL & SHEETROCK",
    title: "Drywall Repair & Finishing",
    description:
        "Wall and ceiling repairs, sheetrock installation, texture matching, and smooth finishing for lived-in homes.",
    link: "#!",
  },
  {
    id: 2,
    image: card2,
    category: "INTERIOR PAINTING",
    title: "Interior Painting Project",
    description:
        "Room-by-room painting with careful prep, clean edges, protected surfaces, and durable finishes.",
    link: "#!",
  },
  {
    id: 3,
    image: card3,
    category: "CONCRETE WORK",
    title: "Concrete Patio Installation",
    description:
        "Concrete patios, walkways, and exterior surfaces built for daily use, drainage, and curb appeal.",
    link: "#!",
  },
  {
    id: 4,
    image: card4,
    category: "CARPENTRY",
    title: "Custom Carpentry Solutions",
    description:
        "Trim, framing, shelving, and wood repairs handled with tight measurements and a clean finish.",
    link: "#!",
  },
  {
    id: 5,
    image: card5,
    category: "BASEMENT REMODELING",
    title: "Finished Basement Remodel",
    description:
        "Basement upgrades that add usable family space, storage, lighting, and a more finished feel.",
    link: "#!",
  },
  {
    id: 6,
    image: card6,
    category: "OUTDOOR & PATIOS",
    title: "Outdoor Living Area Upgrade",
    description:
        "Exterior repairs and patio upgrades that make outdoor areas safer, cleaner, and easier to enjoy.",
    link: "#!",
  },
];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Recent Projects</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            A quick look at the types of repairs, remodels, and exterior upgrades LambertWorks handles for local homeowners.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
      <div className="text-center">
        <a
          href="#!"
          className="btn btn-primary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold"
        >
          Request Similar Work
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
