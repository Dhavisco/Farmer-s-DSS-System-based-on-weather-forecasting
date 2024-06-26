import Icon from "../components/Icon";
import { navLists } from "../store/dummydata";

const Nav = ({ active, setActive }) => {
  return (
    <nav className="lg:py-2 lg:border-2 lg:h-screen lg:bg-[#f3f3f3]">
      <div className="hidden lg:block p-3 text-3xl cursor-pointer">
        <Icon />
        <div className="text-xs italic ml-12">Re-imagine your crops . . .</div>
      </div>
      <div className="lg:mt-16 flex justify-between lg:justify-start lg:items-start items-center lg:flex-col">
        {navLists.map((val, index) => (
          <div key={index} className="lg:py-4 py-2">
            <div
              className={`lg:p-6 p-3 lg:pt-3 flex lg:gap-4 items-center text-xl hover:cursor-pointer ${
                active === index
                  ? "lg:bg-[#F2FED1] lg:ml-[-1rem] lg:px-12 bg-[#abf600] border-2 border-b-[5px] border-black rounded-2xl"
                  : "hover:bg-white lg:ml-[-1rem] lg:px-12 rounded-2xl"
              }`}
              onClick={() => setActive(index)}
            >
              <div>{val.logo}</div>
              <div className="hidden lg:block">{val.name}</div>
            </div>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Nav;

// import { navLists } from "../store/dummydata";
// import Header from "./Header";
// import { useState} from "react";

// const Nav = () => {
//   const [active, setActive] = useState(0);

//   return (
//     <nav className="py-2  border-2 h-screen bg-[#f3f3f3]">
//       <div className="">
//         <Header />
//       </div>
//       <div className="mt-16 flex flex-col ">
//         {navLists.map((val, index) => (
//           <div key={index} className="py-4">
//             <div
//               className={`p-6 pt-3 flex gap-4 items-center text-xl hover:cursor-pointer ${
//                 active === index
//                   ? "bg-[#F2FED1] border-2 border-b-[5px] border-black rounded-r-lg"
//                   : "hover:bg-white"
//               }`}
//               onClick={() => {
//                 setActive(index);
//               }}
//             >
//               <div className="">{val.logo}</div>
//               <div>{val.name}</div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </nav>
//   );
// };

// export default Nav;
