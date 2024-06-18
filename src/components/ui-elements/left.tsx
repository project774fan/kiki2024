const LeftUi = () => {
  return (
    <div className=" relative">
      <div className="absolute left-2  top-8 z-10 hidden h-16 w-12  rounded-l-lg bg-indigo-900 sm:left-14 sm:block md:h-24 xl:h-32"></div>

      <div className=" absolute -left-3 top-8 h-16  w-4/5 -skew-x-12 rounded-r-lg bg-indigo-900 shadow  sm:left-20 md:h-24 md:w-1/3 xl:h-32 xl:w-1/4">
        <Text />
      </div>
    </div>
  );
};

export default LeftUi;

const Text = () => {
  return (
    <div className="ml-6 flex h-full skew-x-12 items-center">
      <div className=" text-xl md:text-3xl xl:text-4xl ">
        <p className="-skew-x-12 text-yellow-500">Lv.</p>
        <p className="-skew-x-12 font-bold text-white">99</p>
      </div>

      <div className=" ml-3 w-full xl:ml-6 ">
        <p className=" text-base text-white sm:mb-1 md:text-xl xl:text-3xl">パペット</p>
        <Gage />
        <p className="text-base text-sky-400 sm:mt-1 md:text-xl xl:text-2xl">999999/9999999</p>
      </div>
    </div>
  );
};

const Gage = () => {
  return (
    <div className=" relative">
      <div className="w-fll mr-6 h-2 bg-gray-500"></div>
      <div className=" absolute left-0 top-0 z-10 h-2 w-1/2 bg-sky-400"></div>
    </div>
  );
};
