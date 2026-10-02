import ResponsiveImage from "../../components/common/ResponsiveImage";
import images from "../../data/images.json";
const person = images["collage.webp"];
import "./introduction.css";
import InformationSummary from "./InformationSummary";

// Information summary data
const informationSummaryData = [
  {
    id: 1,
    title: "Years on the Job",
    description: "10+",
  },
  {
    id: 2,
    title: "Honey-Do Lists",
    description: "250+",
  },
  {
    id: 3,
    title: "Local Clients",
    description: "100+",
  },
];

const Introduction = () => {
  return (
    <div
      className="flex max-lg:flex-col-reverse sm:justify-between items-center pt-10 lg:pt-31.5 lg:mb-27.5 max-xl:gap-2 p-2 max-xxl:px-4"
      id="introduction"
    >
      <div className="w-full flex flex-col justify-between max-lg:text-center">
        <div className="pt-13 me-31.5 w-full lg:w-auto transition-all duration-500">
          <h1 className="text-3xl xxs:text-4xl sm:max-xl:text-5xl xl:text-6xl font-semibold w-full">
            Handyman in Plymouth Meeting, PA
          </h1>
          <p className="text-xs xxs:text-lg lg:text-[18px] my-6">
            Send the repair list you keep putting off. LambertWorks helps homeowners near <span className="bg-highlight">Plymouth Meeting, Blue Bell, and Skippack, PA</span> get clear estimates and clean, finished work for drywall, paint, trim, patios, installs, and practical home fixes.
          </p>
          <p className="mb-5 text-sm text-soft-dark">
            Need wall patches or paint prep? <a className="font-semibold text-primary-dark underline underline-offset-4" href="/blog/drywall-repair-plymouth-meeting-pa/">Drywall repair in Plymouth Meeting</a>, Conshohocken, Lafayette Hill and Norristown.
          </p>
          <p className="text-center lg:text-start">
            <a
              className="btn-primary btn btn-xs xxs:btn-lg text-white"
              href="#contact"
            >
              Start My Repair List
            </a>
            <a
                className="btn-secondary ml-2 btn btn-xs xxs:btn-lg text-white"
                href="#projects"
            >
              What We Can Handle
            </a>
          </p>
        </div>
        <div className="mx-auto lg:mx-0 relative">
          <div className="grid max-xxs:grid-flow-col grid-cols-3 w-fit mt-10 gap-1">
            {informationSummaryData.map((item) => (
              <InformationSummary key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
      <div
        style={{ aspectRatio: `${person.width} / ${person.height}` }}
        className={`max-w-134 w-full h-auto max-lg:mx-auto relative`}
      >
        <ResponsiveImage
          className={`shadow-2xl shadow-gray-200 w-full h-full  absolute bottom-0 object-cover bg-white rounded-3xl`}
          src={person}
          loading="eager"
          fetchPriority="high"
          sizes="(max-width: 1024px) 100vw, 536px"
          alt="LambertWorks home repair, carpentry and painting projects"
        />
      </div>
    </div>
  );
};

export default Introduction;
