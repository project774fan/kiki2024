import TriangleBG from "@/components/ui-elements/triangleBG";
import IllustParts from "../../components/parts/illust";
import TopBtn from "@/components/ui-elements/topBtn";
import Head from "next/head";

const Illust = () => {
  return (
    <>
      <Head>
        <title>イラスト｜シスイアーカイブ</title>
      </Head>
      <div>
        <div className=" flex h-full items-start justify-center">
          <TriangleBG style={"fixed"} />
          <div className="grid grid-cols-3 gap-2 px-6 pt-4 sm:w-11/12 sm:grid-cols-4 md:gap-5 lg:w-4/5 lg:grid-cols-5 xl:w-3/4 xl:gap-20 xl:p-6 ">
            <IllustParts />
            <TopBtn />
          </div>
        </div>
      </div>
    </>
  );
};

export default Illust;
