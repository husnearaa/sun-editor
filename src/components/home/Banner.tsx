// import Image from "next/image";
import BannerBg from "@/assets/image/bannerbg.jpg";
// import BannerImg from "@/assets/banner.png";
// import Link from "next/link";
// import { HiArrowLongRight } from "react-icons/hi2";

const Banner = () => {
  return (
   <div
  className="w-full"
  style={{
    backgroundImage: `url(${BannerBg.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="container md:h-[600px] lg:h-[900px] flex items-center justify-center">
    <p className="lg:text-lg my-8 text-sm text-center text-white">
      Discover a collection of engaging online games and interactive tools
      designed to support learning, <br /> therapy, and personal growth.
      Whether you&apos;re a child building skills through play, an adult
      seeking <br /> stress relief, or a therapist guiding clients,
      there&apos;s something here for everyone.
    </p>
  </div>
</div>

  );
};

export default Banner;
