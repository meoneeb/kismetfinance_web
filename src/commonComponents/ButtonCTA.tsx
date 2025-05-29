import { ArrowRightIcon } from "@heroicons/react/24/outline";

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
      <div className="flex h-12 items-center">
        <div className="aspect-square w-12 bg-transparent p-3">
          <ArrowRightIcon className="size-5 text-white" />
        </div>
        <div className="flex h-full items-center px-4 font-medium text-white">
          {label}
        </div>
      </div>
      <div className="absolute left-0 top-0 -z-10 h-12 w-12 bg-primary transition-all duration-300 group-hover:w-full"></div>
    </button>
  );
}
