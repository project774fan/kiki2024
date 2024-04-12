import bg from "../../../public/img/background.png";
import Image from "next/image";
const Background = () => {
  return (
    <div>
      <Image
        src={bg}
        alt="background"
        className="absolute hidden h-screen w-screen object-cover lg:block xl:block"
        style={{ position: "fixed" }}
      />

      <Image
        src={bg}
        alt="background"
        className="absolute h-screen w-screen bg-fixed object-cover md:block lg:hidden xl:hidden"
        style={{ position: "fixed" }}
      />
    </div>
  );
};

export default Background;
