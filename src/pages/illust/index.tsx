import TriangleBG from "@/components/ui-elements/triangleBG";
import IllustParts from "../../components/parts/illust";

import Link from "next/link";
import TopBtn from "@/components/ui-elements/topBtn";

const Illust = () => {
  return (
    <div>
      <div className=" flex h-full items-start justify-center">
        <TriangleBG style={"fixed"} />

        <div className="grid grid-cols-3 gap-2 px-6 pt-4 sm:w-3/4 sm:grid-cols-5 sm:gap-20 sm:p-6 ">
          <IllustParts />
          <TopBtn />
        </div>
      </div>
    </div>
  );
};

export default Illust;
