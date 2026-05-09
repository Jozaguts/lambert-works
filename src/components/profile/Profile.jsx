import repairImage from "../../assets/images/honey-do-list.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileSignature } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

const Profile = () => {
  return (
    <div
      className={`relative mx-4 xxl:mx-0.5 -bottom-20 lg:-bottom-28 z-10 rounded-2xl bg-white drop-shadow-2xl max-xl:mb-5 shadow-white xl:p-28 lg:p-20 md:p-16 sm:p-10 p-4`}
      id="profile"
    >
      <div className="flex max-md:flex-col justify-between items-center gap-8 lg:gap-14">
        <div className="xxl:max-w-106 w-auto h-auto xxl:max-h-126">
          <div className="max-w-106 h-117 object-fill overflow-hidden rounded-xl">
            <img
              className="bg-soft-white h-full w-full object-cover"
              src={repairImage}
              alt="Drywall repair work for a honey-do list"
            />
          </div>
        </div>

        <div className="max-sm:w-full w-[33rem]">
          <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.08em] text-primary-dark max-md:text-center">
            The Honey-Do List
          </p>
          <h2
            className={`text-2xl xxs:text-3xl sm:text-4xl lg:text-[42px] text-[min(24px,42px)] max-md:text-center font-semibold mb-6 leading-tight`}
          >
            The list you’ll finally get to check off.
          </h2>
          <div
            className={`text-xs xs:text-[16px] lg:text-lg font-normal max-md:text-center text-gray-600`}
          >
            <p className={``}>
              You know the list. It starts with “fix that squeaky drawer” and somehow turns into patch the wall, hang the shelf, repair the trim, touch up the paint, fix the pantry door, and figure out what that noise is.
            </p>
            <p className="mt-3">
              That is the work LambertWorks does most: practical household repairs, touch-ups, installs, and small fixes bundled into one clear walkthrough with a local handyman near Plymouth Meeting.
            </p>
            <p className="mt-3 font-medium text-charcoal">
              Send the list. We’ll help you sort it, price it, and start checking things off.
            </p>
          </div>
          <div className="mt-8 flex max-md:justify-center">
            <a
              className="btn xxs:btn-lg px-6 max-xs:px-2 xxs:py-3 btn-primary text-xs xxs:text-[14px] sm:text-[16px]"
              href="#services"
            >
              See What Fits the List
            </a>
            <Link
              className={`btn xxs:btn-lg px-6 max-xs:px-2 xxs:py-3 hover:border-primary bg-white duration-300 transition-all hover:text-primary  ms-4 text-xs xxs:text-[14px] sm:text-[16px]`}
              to="contact"
              smooth={true}
              duration={900}
              offset={-120}
            >
              <FontAwesomeIcon icon={faFileSignature} /> Request Estimate
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
