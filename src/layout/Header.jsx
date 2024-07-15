import Alert from '../components/Alert'
import { RxAvatar } from "react-icons/rx";
const Header = ({page}) => {
  const curPage = page;
  return (
    <>
      <div className=" hidden lg:flex justify-between ml-14 items-center p-4 mb-4">
        <div className="flex items-center gap-4">
          <div className="font-semibold text-xl">
            <span className="bg-[#F2FED1] p-1">{curPage}</span>
          </div>
          <div className="">
            <Alert />
          </div>
        </div>
        <div className="text-lg flex items-center gap-4 tracking-wider text-gray-700 font-semibold">
          <div className="">
            Hello, <span className="text-gray-900">Farmer!</span>
          </div>
          <div>
            <div>
              <RxAvatar className="w-[3rem] h-[3rem] text-green-700" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header