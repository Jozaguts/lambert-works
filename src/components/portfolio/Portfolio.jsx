import Projects from "./Projects";
import drywallRepair from "../../assets/images/IMG_6898.jpg";
import interiorPainting from "../../assets/images/IMG-20260401.jpg";
import concreteWork from "../../assets/images/53A11B98-E6B1-481F-A9FC-8465589049FB.jpg.jpg";
import carpentryWork from "../../assets/images/IMG_6595.jpg";
import basementRemodel from "../../assets/images/IMG-20260401-WA0010.jpg.jpg";
import outdoorUpgrade from "../../assets/images/IMG_7150-1.jpg";

const projectData = [
  {
    id: 1,
    image: drywallRepair,
    category: "DRYWALL & SHEETROCK",
    title: "Drywall Repair & Finishing",
    description:
        "Wall and ceiling repairs, sheetrock installation, texture matching, and smooth finishing for lived-in homes.",
    link: "#!",
  },
  {
    id: 2,
    image: interiorPainting,
    category: "INTERIOR PAINTING",
    title: "Interior Painting Project",
    description:
        "Room-by-room painting with careful prep, clean edges, protected surfaces, and durable finishes.",
    link: "#!",
  },
  {
    id: 3,
    image: concreteWork,
    category: "CONCRETE WORK",
    title: "Concrete Patio Installation",
    description:
        "Concrete patios, walkways, and exterior surfaces built for daily use, drainage, and curb appeal.",
    link: "#!",
  },
  {
    id: 4,
    image: carpentryWork,
    category: "CARPENTRY",
    title: "Custom Carpentry Solutions",
    description:
        "Trim, framing, shelving, and wood repairs handled with tight measurements and a clean finish.",
    link: "#!",
  },
  {
    id: 5,
    image: basementRemodel,
    category: "BASEMENT REMODELING",
    title: "Finished Basement Remodel",
    description:
        "Basement upgrades that add usable family space, storage, lighting, and a more finished feel.",
    link: "#!",
  },
  {
    id: 6,
    image: outdoorUpgrade,
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
