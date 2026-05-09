const trustItems = [
  "Plymouth Meeting",
  "Whitemarsh Township",
  "Conshohocken Area",
  "Residential Repairs",
  "Small Commercial Spaces",
  "Clear Estimates",
];

const HappyClients = () => {
  return (
    <div className="content py-10 md:py-25 flex flex-col items-center px-2">
      <div className="max-w-144.25 text-center">
        <p className="section-title mb-6">Trusted for Local Work</p>
        <p className="text-[14px] sm:text-lg text-soft-dark font-normal">
          Homeowners call LambertWorks for clear estimates, careful repairs,
          and remodeling work that fits real daily use.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-3 pt-8 md:pt-10">
        {trustItems.map((item) => (
          <span
            className="rounded-md border border-gray-200 bg-white px-4 py-2 text-[13px] sm:text-[15px] font-medium text-[#424E60] shadow-sm"
            key={item}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default HappyClients;
