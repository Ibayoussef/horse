
import { img2 } from "../assets";
function BannerSection() {
  return (
    <div className="w-full h-[400px] text-center relative md:mt-0 mt-12">
      <div className="pt-24">
        <div className=" text-white text-[80px] font-normal">Running Wild</div>
        <div className="text-5xl font-normal text-white">Since 1945</div>
      </div>

      <img
        className="absolute top-0 left-0 object-cover w-full h-full -z-10"
        src={img2}
      />
    </div>
  );
}

export default BannerSection;
