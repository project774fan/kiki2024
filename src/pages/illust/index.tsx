import IllustParts from "../../components/parts/illust";

const Illust = () => {
  return (
    <div>
      <div className=" flex h-full items-start justify-center">
        <img
          src="img/ui-elements/illust_bg.png"
          alt="イラスト背景"
          className=" fixed h-full w-full scale-150"
        />

        <div className="grid grid-cols-3 gap-2 px-6 pt-4 sm:w-3/4 sm:grid-cols-5 sm:gap-20 sm:p-6 ">
          <IllustParts />
        </div>
      </div>
    </div>
  );
};

export default Illust;
