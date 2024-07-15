// // import PropTypes from "prop-types";
// import { useState } from "react";
// import { CiSearch } from "react-icons/ci";
// import { useStore } from "../../store/store";

// const WeatherInput = () => {
//   const [userInput, setUserInput] = useState();
//   const { setUserString } = useStore((state) => ({
//     setUserString: state.setUserString,
//   }));
//   const inputHandler = (e) => {
//     setUserInput(e.target.value);

//   };

//   return (
//     <div className="mb-4 w-4/5 relative ">
//       <input
//         type="text"
//         value={userInput}
//         onChange={inputHandler}
//         placeholder="Enter your Current Location e.g Lagos"
//         className="w-full p-2 pl-10 border border-gray-300 rounded"
//       />
//       <div className="relative  flex items-center -top-[2rem] z-30">
//         <div className="absolute left-0 inset-y-0 pl-3 pointer-events-none ">
//           <svg
//             className="h-5 w-5 text-gray-500"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M8 6h13M8 12h13m-7 6h7"
//             />
//           </svg>
//         </div>
//         <div
//           className="absolute right-0 pr-3 cursor-pointer pt-5"
//           onClick={() => setUserString(userInput)}
//         >
//           <CiSearch className="text-2xl cursor-pointer z-20" />
//         </div>
//       </div>
//     </div>
//   );
// };

// // Specifying proptypes
// // WeatherInput.propTypes = {
// //   city: PropTypes.string.isRequired,
// //   setCity: PropTypes.func.isRequired,
// // };

// export default WeatherInput;

import PropTypes from "prop-types";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useStore } from "../../store/store";

const WeatherInput = ({ setCity }) => {
  const [userInput, setUserInput] = useState("");
  const { setUserString } = useStore((state) => ({
    setUserString: state.setUserString,
  }));

  const inputHandler = (e) => {
    setUserInput(e.target.value);
  };

  const searchHandler = () => {
    setUserString(userInput);
    setCity(userInput); // Update the city state
  };

   const handleKeyDown = (e) => {
     if (e.key === "Enter") {
       searchHandler();
     }
   };

  return (
    <div className="mb-4 w-4/5 relative ">
      <input
        type="text"
        value={userInput}
        onChange={inputHandler}
        onKeyDown={handleKeyDown}
        placeholder="Enter your Current Location e.g Lagos"
        className="w-full p-2 pl-10 border border-gray-300 rounded"
      />
      <div className="relative  flex items-center -top-[2rem] z-30">
        <div className="absolute left-0 inset-y-0 pl-3 pointer-events-none ">
          <svg
            className="h-5 w-5 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 6h13M8 12h13m-7 6h7"
            />
          </svg>
        </div>
        <div
          className="absolute right-0 pr-3 cursor-pointer pt-5"
          onClick={searchHandler}
        >
          <CiSearch className="text-2xl cursor-pointer z-20" />
        </div>
      </div>
    </div>
  );
};

export default WeatherInput;

WeatherInput.propTypes = {
  setCity: PropTypes.func.isRequired,
};