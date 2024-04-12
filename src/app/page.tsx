import TitleBar from "@/components/ui-elements/titlebar";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

export default function Home() {
  return (
    <div>
      <TitleBar />
      <div>
        <Link href="/message">ボタン</Link>
      </div>
    </div>
  );
}
