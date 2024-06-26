import {
  LuLayoutDashboard,
  // Import other icons as needed
} from "react-icons/lu";
// import { RiFileList3Line } from "react-icons/ri";
import { BsClockHistory } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { PiPottedPlant} from "react-icons/pi";

export const navLists = [
  {
    name: "Dashboard",
    logo: <LuLayoutDashboard className="text-2xl" />,
    link: "/",
  },
  {
    name: "Crops",
    logo: <PiPottedPlant className="text-2xl" />,
    link: "#",
  },
  {
    name: "History",
    logo: <BsClockHistory className="text-2xl" />,
    link: "#",
  },
  {
    name: "Settings",
    logo: <IoSettingsOutline className="text-2xl" />,
    link: "#",
  },
];

// dummyData.js
// export const dummyRecommendedCrops = [
//   {
//     crop: "Lettuce",
//     suitability_score: 8,
//     growing_recommendation:
//       "Plant in cool, shaded areas. Requires regular watering and rich, well-drained soil.",
//     relevant_information:
//       "Lettuce is a leafy green vegetable that grows quickly and prefers cooler temperatures. It matures in 45-55 days.",
//   },
//   {
//     crop: "Tomatoes",
//     suitability_score: 5,
//     growing_recommendation:
//       "Plant in a sunny location with well-drained soil. Stake or cage the plants as they grow.",
//     relevant_information:
//       "Tomatoes are warm-season crops that require at least 6 hours of direct sunlight per day. They mature in 60-100 days.",
//   },
//   {
//     crop: "Carrots",
//     suitability_score: 7,
//     growing_recommendation:
//       "Plant in loose, sandy soil that is free of stones. Keep soil consistently moist during growth.",
//     relevant_information:
//       "Carrots are root vegetables that grow best in cool weather. They mature in 70-80 days.",
//   },
//   {
//     crop: "Lettuce",
//     suitability_score: 8,
//     growing_recommendation:
//       "Plant in cool, shaded areas. Requires regular watering and rich, well-drained soil.",
//     relevant_information:
//       "Lettuce is a leafy green vegetable that grows quickly and prefers cooler temperatures. It matures in 45-55 days.",
//   },
//   {
//     crop: "Tomatoes",
//     suitability_score: 9,
//     growing_recommendation:
//       "Plant in a sunny location with well-drained soil. Stake or cage the plants as they grow.",
//     relevant_information:
//       "Tomatoes are warm-season crops that require at least 6 hours of direct sunlight per day. They mature in 60-100 days.",
//   },
//   {
//     crop: "Carrots",
//     suitability_score: 4,
//     growing_recommendation:
//       "Plant in loose, sandy soil that is free of stones. Keep soil consistently moist during growth.",
//     relevant_information:
//       "Carrots are root vegetables that grow best in cool weather. They mature in 70-80 days.",
//   },
// ];
