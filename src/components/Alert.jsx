const Alert = () => {
  return (
    <>
      <div className="flex justify-between gap-1 items-start fade-in p-3 py-4 lg:p-2.5 relative w-5/6 lg:w-full bg-[#fafafa] border-solid border-[#000000] border-[1px] border-b-[5px] text-sm lg:text-base shadow-md rounded-xl lg:rounded-3xl lg:h-[3.5rem]">
        <div className="flex-row items-start">
          <div className="font-semibold text-base pb-2 lg:hidden">
            Weather Alert
          </div>
          <div className="text-xs flex-col items-center text-gray-600 lg:text-gray-800 lg:text-sm lg:pr-1">
            <div>Receive weather alert via email</div>
            <div className="italic text-[0.7rem] text-white">
              <span className="bg-black p-[0.15rem] m-[0.4rem] rounded-full">
                Coming Soon ...
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="py-[4px] px-5 bg-[#00a884] text-black hover:border-[#000000d7] border-[1px] hover:border-b-4 hover:transition delay-150 duration-300 ease-in-out rounded-xl font-medium text-xs">
            Click here
          </button>
        </div>
      </div>
    </>
  );
};

export default Alert;
