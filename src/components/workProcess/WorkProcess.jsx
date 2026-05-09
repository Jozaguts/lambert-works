import {
  faCircleCheck,
  faClipboardList,
  faHammer,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import WorkSteps from "./WorkSteps";

const workStepData = [
  {
    id: 1,
    title: "Look Over the Job",
    description:
      "We review the area, listen to what you need, and point out the practical repair or remodel options.",
    icon: faMagnifyingGlass,
  },
  {
    id: 2,
    title: "Clear Estimate",
    description:
      "You get a straightforward scope with expected labor, materials, and timing before work begins.",
    icon: faClipboardList,
  },
  {
    id: 3,
    title: "Do the Work",
    description:
      "The job is completed with careful prep, safe work habits, and respect for your home.",
    icon: faHammer,
  },
  {
    id: 4,
    title: "Final Walkthrough",
    description:
      "We check the details with you, clean the work area, and make sure the result is ready to use.",
    icon: faCircleCheck,
  },
];

const WorkProcess = () => {
  return (
    <div
      className="content grid xl:grid-cols-2 xl:items-center px-2 py-5 md:py-10 lg:py-25 xl:py-35 max-xxl:px-4"
      id="work-process"
    >
      <div className="lg:pe-10 xl:pe-35.75 max-xs:mb-3 max-xl:mb-8">
        <p className="section-title max-xl:text-center">How the Work Gets Done</p>
        <p className="mt-6 mb-4 md:text-[18px] text-sm font-normal max-xl:text-center text-gray-500">
          A simple process for homeowners who want clear answers, clean work, and no surprises.
        </p>
      </div>

      <div className="grid xs:grid-cols-2 justify-end my-2 w-fit mx-auto ">
        {workStepData.map((data, index) => {
          return (
            <WorkSteps
              data={data}
              style={`max-xs:mt-3 p-4 sm:p-8 bg-white aspect-auto sm:max-w-78 ${
                index % 2 == 1 ? "xs:ms-3 xs:mt-6 " : "xs:mb-6"
              }`}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WorkProcess;
