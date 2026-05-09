const MonoBlog = ({ data }) => {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-100 hover:shadow-2xl bg-white shadow-gray-300 transition-all duration-300">
      <a href={data?.link}>
        <img
          src={data?.image}
          alt="Blog"
          className="w-full h-56.5 object-cover "
        />
        <div className="m-6">
          <p className="text-[10px] xs:text-[14px] font-normal text-gray-400 ">
            {data?.date}
          </p>
          <p className="text-[14px] xs:text-lg font-medium text-[#333333]">
            {data?.title.length > 52
              ? `${data?.title.slice(0, 52)}...`
              : data?.title}
          </p>
          <p className="mt-3 text-[12px] xs:text-[14px] text-gray-600">
            {data?.excerpt}
          </p>
          <p className="mt-4 text-[12px] xs:text-[14px] font-semibold text-charcoal">
            Request an estimate
          </p>
        </div>
      </a>
    </div>
  );
};

export default MonoBlog;
