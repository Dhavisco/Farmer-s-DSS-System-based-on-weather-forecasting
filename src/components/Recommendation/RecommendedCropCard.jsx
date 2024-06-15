import { useState } from "react";
import CropDetailsModal from "./CropDetailsModal";

const RecommendedCropCard = ({ crop }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div
        className="bg-gray-100 my-1 rounded-lg shadow-md p-4 cursor-pointer"
        onClick={handleShowModal}
      >
        <h3 className="text-lg font-semibold">{crop.crop}</h3>
        <p className="text-sm font-light">Suitability Score: {crop.suitability_score}/10</p>
        <button className="text-sm text-yellow-400 font-medium float-right hover:text-yellow-500">See More</button>
      </div>
      {showModal && <CropDetailsModal crop={crop} onClose={handleCloseModal} />}
    </>
  );
};
export default RecommendedCropCard;