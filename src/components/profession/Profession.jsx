import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "Carpentry",
    description: "Custom woodwork, framing, trim installation, shelving, and repairs.",
  },
  {
    id: 2,
    title: "Concrete",
    description: "Concrete slabs, walkways, patios, repairs, and finishing work.",
  },
  {
    id: 3,
    title: "Basement Remodeling",
    description: "Transform unfinished basements into functional living spaces.",
  },
  {
    id: 4,
    title: "Painting",
    description: "Interior and exterior painting with clean finishes and durable materials.",
  },
  {
    id: 5,
    title: "Drywall & Sheetrock",
    description: "Drywall installation, patching, texture matching, and repairs.",
  },
  {
    id: 6,
    title: "Patios & Outdoor Areas",
    description: "Outdoor improvements including patios, seating areas, and concrete surfaces.",
  },
];

const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">Our Services</p>
      </div>
      <div className="">
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
