const LeftUi = () => {
  return (
    <>
      <div className=" absolute left-14 top-8 z-10 h-32 w-12 rounded-l-lg bg-blue-800"></div>

      <div className=" absolute left-20 top-8 h-32 w-1/5 -skew-x-12  rounded-r-lg bg-blue-800 shadow">
        <Text />
        <KikiTalk />
      </div>
    </>
  );
};

export default LeftUi;

const KikiTalk = () => {
  //モーダル実装予定
  return <div className="ml-6 mt-6 skew-x-12">キキトーク</div>;
};

const Text = () => {
  return (
    <div className="ml-6 flex h-full skew-x-12 items-center">
      <div className="text-4xl italic">
        <p className=" text-yellow-500">Lv.</p>
        <p className="text-white">99</p>
      </div>

      <div className=" ml-6 w-full ">
        <p className=" mb-1 text-3xl text-white">パペット</p>
        <Gage />
        <p className="mt-1 text-2xl text-sky-400">99999999/99999999</p>
      </div>
    </div>
  );
};

const Gage = () => {
  return (
    <div className=" relative">
      <div className="mr-6 h-2 bg-gray-500"></div>
      <div className=" absolute left-0 top-0 z-10 h-2 w-1/2 bg-sky-400"></div>
    </div>
  );
};
