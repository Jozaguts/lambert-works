import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "Honey-Do List Repairs",
    description: "Bundle drywall patches, loose trim, paint touch-ups, shelves, door fixes, and small repairs into one visit.",
  },
  {
    id: 2,
    title: "Carpentry",
    description: "Trim, framing, shelving, repairs, and practical woodwork finished cleanly.",
  },
  {
    id: 3,
    title: "Concrete",
    description: "Slabs, walkways, patios, patch repairs, and durable surface finishing.",
  },
  {
    id: 4,
    title: "Basement Remodeling",
    description: "Turn unfinished or outdated basements into usable, comfortable space.",
  },
  {
    id: 5,
    title: "Painting",
    description: "Interior and exterior painting with proper prep, sharp lines, and lasting coverage.",
  },
  {
    id: 6,
    title: "Drywall & Sheetrock",
    description: "Sheetrock installation, patching, texture matching, sanding, and repair.",
  },
  {
    id: 7,
    title: "Patios & Outdoor Areas",
    description: "Patio improvements, seating areas, exterior fixes, and outdoor surfaces.",
  },
];

const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">Honey-Do List Services</p>
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
