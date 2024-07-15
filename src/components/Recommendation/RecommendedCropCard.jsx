import { useState } from "react";
import CropDetailsModal from "./CropDetailsModal";
import PropTypes from 'prop-types';

const RecommendedCropCard = ({ crop, weatherData }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const getScoreColor = (score) => {
     if (score >= 7) return "text-green-500";
     if (score >= 5) return "text-yellow-500";
     return "text-red-500";
  }

  return (
    <>
      <div
        className="bg-gray-100 my-1 rounded-lg shadow-md p-4 cursor-pointer"
        onClick={handleShowModal}
      >
        <h3 className="lg:text-lg font-semibold">{crop.crop}</h3>
        <p
          className={`lg:text-sm text-xs font-base ${getScoreColor(
            crop.suitability_score
          )}`}
        >
          Suitability Score: {crop.suitability_score}/10
        </p>
        <button className="lg:text-sm text-xs text-black-400 font-normal mt-2 hover:font-medium">
          See More
        </button>
      </div>
      {showModal && <CropDetailsModal crop={crop} weatherData={weatherData} onClose={handleCloseModal} />}
    </>
  );
};

RecommendedCropCard.propTypes = {
  crop: PropTypes.shape({
    crop: PropTypes.string,
    suitability_score: PropTypes.number.isRequired,
  }).isRequired,
};

export default RecommendedCropCard;