import IllustParts from "../../components/parts/illust";

const Illust = () => {
  return (
    <div>
      <div className=" flex h-full items-start justify-center">
        <img
          src="img/ui-elements/illust_background.png"
          alt="イラスト背景"
          className=" fixed h-full w-full scale-150"
        />

        <div className="grid w-3/4 grid-cols-5 gap-20  p-6 ">
          <IllustParts />
        </div>
      </div>
    </div>
  );
};

export default Illust;
