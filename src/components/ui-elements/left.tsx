const LeftUi = () => {
  return (
    <div className=" relative">
      <div className="absolute left-2 top-8 z-10 hidden h-16 w-12 rounded-l-lg bg-indigo-900 sm:left-14 sm:block sm:h-32"></div>

      <div className=" absolute -left-3 top-8 h-16  w-4/5 -skew-x-12 rounded-r-lg bg-indigo-900  shadow sm:left-20 sm:h-32 sm:w-1/5">
        <Text />
      </div>
    </div>
  );
};

export default LeftUi;

const Text = () => {
  return (
    <div className="ml-6 flex h-full skew-x-12 items-center">
      <div className="  sm:text-4xl">
        <p className="-skew-x-12 text-yellow-500">Lv.</p>
        <p className="-skew-x-12 text-white">99</p>
      </div>

      <div className=" ml-6 w-full ">
        <p className=" mb-1 text-base text-white sm:text-3xl">パペット</p>
        <Gage />
        <p className="mt-1 text-base text-sky-400 sm:text-2xl">99999999/999999999</p>
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
