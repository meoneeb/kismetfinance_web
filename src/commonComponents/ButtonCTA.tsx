import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ButtonCTAProps {
  label?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export default function ButtonCTA({
  label = "Demo Text",
  onClick,
  type = "button",
}: ButtonCTAProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="group relative z-10 overflow-hidden bg-secondary"
    >
      <div className="flex h-20 items-center justify-center">
        <div className="flex aspect-square w-20 items-center justify-center bg-transparent">
          <FontAwesomeIcon icon={faArrowRight} className="size-6 text-white" />
        </div>
        <div className="flex h-full items-center px-4 text-base font-medium text-white md:text-xl">
          {label}
        </div>
      </div>
      <div className="absolute left-0 top-0 -z-10 h-20 w-20 bg-primary transition-all duration-300 group-hover:w-full"></div>
    </button>
  );
}
