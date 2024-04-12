import Link from "next/link";

const Menu = () => {
  return (
    <footer className=" fixed bottom-10 right-10 left-10 ">
      <div className=" flex h-auto items-center justify-center overscroll-contain  bg-white bg-opacity-60 py-1  pl-6 ">
        <div className="text-center text-xs sm:text-sm">
          <div>的ちゃんによる非公式サイトです</div>
          <div className="flex">
            <Link href="/message">ボタン</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Menu;
