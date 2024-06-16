const RightUi = () => {
  const style = "w-1/12 h-16 bg-purple-100 opacity-80 mx-6 -skew-x-12 rounded-lg";
  return (
    <div className="hidden sm:block">
      <div className=" absolute  right-6 top-8 mr-12 flex w-full justify-end ">
        <div className={style}></div>
        <div className={style}></div>
        <div className={style}></div>
        <div className={style}></div>
      </div>
    </div>
  );
};

export default RightUi;
