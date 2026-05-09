import { useEffect, useState } from "react";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { animateScroll } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const scrollToTop = () => {
  animateScroll.scrollToTop(options); /* To Top */
  //   animateScroll.scrollToBottom(options); /* To Bottom */
};

const options = {
  duration: 500,
  smooth: true,
};

const ScrollToTop = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed bottom-10 right-5 sm:right-10 z-10 flex flex-col items-end gap-3 transition-all">
      <a
        href="https://wa.me/14845380809"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact LambertWorks on WhatsApp"
        className="w-10 h-10 sm:w-12.5 sm:h-12.5 lg:w-15 lg:h-15 flex justify-center items-center rounded-full transition delay-150 duration-500 ease-in-out hover:scale-120 hover:cursor-pointer bg-[#25D366] hover:bg-[#1da851] text-white shadow-lg"
      >
        <FontAwesomeIcon icon={faWhatsapp} size="2xl" />
      </a>
      <a
        onClick={scrollToTop}
        role="button"
        aria-label="Scroll to top"
        className={`w-10 h-10 sm:w-12.5 sm:h-12.5 lg:w-15 lg:h-15 flex justify-center items-center rounded-full transition delay-150 duration-500 ease-in-out hover:scale-120 hover:cursor-pointer bg-primary hover:bg-primary-dark text-ink hover:text-white shadow-lg ${
          position < 200 && "scale-0"
        }`}
      >
        <FontAwesomeIcon icon={faAngleUp} size="2xl" />
      </a>
    </div>
  );
};

export default ScrollToTop;
