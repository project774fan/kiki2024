import Menu from "@/components/ui-elements/menu";
import LeftUi from "@/components/ui-elements/left";
import RightUi from "@/components/ui-elements/right";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";
import Background from "@/components/ui-elements/background";
import Start from "@/pages/start";

export default function Home() {
  return (
    <div className="h-screen w-screen">
      <Start />
    </div>
  );
}
