

const CropDetailsModal = ({ crop, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center lg:mg-1 m-14">
      <div className="bg-[#f1e9e9] rounded-lg shadow-lg p-8 max-w-md">
        <button
          className="top-4 right-4 border-2 border-yellow-500 hover:border-yellow-600 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h3 className="text-xl font-semibold mb-4">{crop.crop}</h3>
        <p className="mb-1.5 text-base font-light">Suitability Score: {crop.suitability_score}/10</p>
        <h4 className="text-lg font-semibold mb-1.5">Growing Recommendation</h4>
        <p className="mb-4 text">{crop.growing_recommendation}</p>
        <h4 className="text-lg font-semibold mb-1.5">Relevant Information</h4>
        <p>{crop.relevant_information}</p>
      </div>
    </div>
  );
};

export default CropDetailsModal;