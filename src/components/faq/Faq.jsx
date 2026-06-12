import {
  faEnvelopeOpenText,
  faHammer,
  faImages,
  faLocationDot,
  faScrewdriverWrench,
  faTruckPickup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const faqItems = [
  {
    icon: faScrewdriverWrench,
    question: "Do you handle small repair lists?",
    answer:
      "Yes. Honey-do lists are a core LambertWorks service. You can group drywall patches, trim repairs, door adjustments, shelves, paint touch-ups, caulking, and other small fixes into one estimate.",
  },
  {
    icon: faImages,
    question: "Can I send photos before an estimate?",
    answer:
      "Yes. Photos help explain the scope, especially for drywall, patios, trim, concrete, and room repairs. For bigger or unclear projects, a walkthrough gives the best estimate.",
  },
  {
    icon: faLocationDot,
    question: "What areas do you serve?",
    answer:
      "LambertWorks serves Plymouth Meeting, Blue Bell, Skippack, Whitemarsh Township, Conshohocken, Lafayette Hill, Norristown, and nearby Montgomery County, PA.",
  },
  {
    icon: faHammer,
    question: "What kind of work fits LambertWorks?",
    answer:
      "The best fit is practical residential repair and improvement work: drywall, painting, trim, carpentry, patios, concrete touch-ups, basement finishing, installs, and bundled household fixes.",
  },
  {
    icon: faTruckPickup,
    question: "Do you bring materials?",
    answer:
      "It depends on the job. Some projects are easier when LambertWorks sources materials, while others can use materials you already have. The estimate will clarify what is needed before work starts.",
  },
  {
    icon: faEnvelopeOpenText,
    question: "How do I start?",
    answer:
      "Send your project details through the form or email hello@lambertworks.us. Include your location, timing, project type, and a short repair list so the next step is clear.",
  },
];

const Faq = () => {
  return (
    <section className="bg-soft-white px-2 py-10 md:py-20" id="faq">
      <div className="content">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-title">Questions Before You Start</p>
          <p className="mt-5 text-[14px] sm:text-lg text-soft-dark">
            Clear answers for homeowners deciding whether to send a repair list,
            request photos, or schedule a walkthrough.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {faqItems.map((item) => (
            <details
              className="group rounded-lg border border-warm-border bg-white p-5 shadow-sm"
              key={item.question}
            >
              <summary className="flex cursor-pointer list-none items-center gap-4 text-[15px] font-semibold text-charcoal sm:text-lg">
                <span className="center h-10 w-10 shrink-0 rounded-md bg-warm-surface text-charcoal group-open:bg-primary">
                  <FontAwesomeIcon icon={item.icon} />
                </span>
                <span>{item.question}</span>
              </summary>
              <p className="mt-4 pl-14 text-[13px] leading-6 text-gray-600 sm:text-[15px]">
                {item.answer}
              </p>
            </details>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            className="btn btn-primary px-6 py-3 text-[14px] font-semibold sm:text-[16px]"
            href="#contact"
          >
            Request My Free Estimate
          </a>
        </div>
      </div>
    </section>
  );
};

export default Faq;
