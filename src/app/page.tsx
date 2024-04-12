import Menu from "@/components/ui-elements/menu";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";
import Background from "@/components/ui-elements/background";

export default function Home() {
  return (
    <div>
      <Background />
      <Menu />
    </div>
  );
}
