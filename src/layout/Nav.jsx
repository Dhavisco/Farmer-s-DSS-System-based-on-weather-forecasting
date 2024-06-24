import { navLists } from "../store/dummydata";
import Header from "./Header";

const Nav = ({ active, setActive }) => {
  return (
    <nav className="py-2 border-2 h-screen bg-[#f3f3f3]">
      <div>
        <Header />
      </div>
      <div className="mt-16 flex flex-col">
        {navLists.map((val, index) => (
          <div key={index} className="py-4">
            <div
              className={`p-6 pt-3 flex gap-4 items-center text-xl hover:cursor-pointer ${
                active === index
                  ? "bg-[#F2FED1] border-2 border-b-[5px] border-black rounded-r-lg"
                  : "hover:bg-white"
              }`}
              onClick={() => setActive(index)}
            >
              <div>{val.logo}</div>
              <div>{val.name}</div>
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
