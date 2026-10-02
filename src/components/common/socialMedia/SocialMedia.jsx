import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SocialMedia() {
  return (
    <a href="https://www.instagram.com/lambertworks/" target="_blank"
      rel="noopener noreferrer" aria-label="Visit LambertWorks on Instagram"
      className="text-charcoal hover:bg-primary p-3 hover:text-ink rounded-md">
      <FontAwesomeIcon icon={faInstagram} className="text-xl w-4.5 aspect-square" />
    </a>
  );
}
