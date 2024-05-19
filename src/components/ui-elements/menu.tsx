import Link from "next/link";
import Image from "next/image";
import msgBtn from "../../../public/img/ui-elements/massageBtn.png";
import illustBtn from "../../../public/img/ui-elements/illustBtn.png";
import eventBtn from "../../../public/img/ui-elements/eventBtn.png";
import hokuroBtn from "../../../public/img/ui-elements/hokuroBtn.png";

const Menu = () => {
  const linkStyle = "ml-5 mr-10 -translate-y-1/4 hover:scale-105";
  return (
    <footer className=" fixed bottom-10 left-10 right-10">
      <div className=" absolute bottom-0 mx-5 flex  h-1/2  w-full  -skew-x-12 items-center overscroll-contain rounded-md bg-white bg-opacity-70 shadow-xl"></div>
      <div className="relative ml-5 flex w-3/4">
        <Link href="/message" className={linkStyle}>
          <Image src={msgBtn} alt="メッセージ" />
        </Link>
        <Link href="/gacha" className={linkStyle}>
          <Image src={illustBtn} alt="メッセージ" />
        </Link>
        <Link href="/message" className={linkStyle}>
          <Image src={eventBtn} alt="メッセージ" />
        </Link>
        <Link href="/message" className={linkStyle}>
          <Image src={hokuroBtn} alt="メッセージ" />
        </Link>
      </div>
    </footer>
  );
};
export default Menu;
