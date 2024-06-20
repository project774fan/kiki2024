import bg from "@/img/background.png";
import Image from "next/image";
const Background = () => {
  return (
    <div>
      <Image
        src={bg}
        alt="background"
        className="absolute hidden h-full w-full object-cover lg:block xl:block"
        style={{ position: "fixed" }}
      />

      <Image
        src={bg}
        alt="background"
        className="absolute h-full w-full bg-fixed object-cover md:block lg:hidden xl:hidden"
        style={{ position: "fixed" }}
      />
    </div>
  );
};

export default Background;
