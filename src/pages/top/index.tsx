import Menu from "@/components/ui-elements/menu";
import LeftUi from "@/components/ui-elements/left";
import RightUi from "@/components/ui-elements/right";
import Link from "next/link";
import Image from "next/image";

import Background from "@/components/ui-elements/background";

const Top = () => {
  return (
    <div className="h-screen w-screen">
      <Background />
      <LeftUi />
      <RightUi />
      <Menu />
    </div>
  );
};

export default Top;
