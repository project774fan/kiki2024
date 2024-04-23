import IllustParts from "../../components/parts/illust";

const Msg = () => {
  return (
    <div>
      <div className="flex h-full items-start justify-center ">
        <div className="grid grid-cols-2 gap-1  p-1 sm:grid-cols-3 sm:gap-2 sm:p-2 lg:grid-cols-4  lg:gap-4 lg:p-4 2xl:grid-cols-4 2xl:gap-6 2xl:p-6">
          <IllustParts />
        </div>
      </div>
    </div>
  );
};

export default Msg;
