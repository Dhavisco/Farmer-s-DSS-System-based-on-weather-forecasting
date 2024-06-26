import { PiPottedPlant } from "react-icons/pi";

const Icon = () => {
  return (
    <div className="flex items-center gap-[2px] font-semibold">
      <span>
        <PiPottedPlant className="" />
      </span>
      <span className="text-sm lg:text-3xl">CropsDSS</span>
    </div>
  );
}

export default Icon