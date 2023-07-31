import { img1 } from "../assets";
import { Link } from "react-scroll";

function IntroSection() {
  return (
    <div className="relative">
      <div className="flex flex-row items-center justify-between w-full mt-4">
        <div>
          <span className="text-4xl font-bold text-primary sm:text-[28px] md:text-[40px] lg:text-[40px] xl:text-[50px]">
            HORSE
          </span>
          <span className="text-4xl font-bold text-stone-50 sm:text-[28px] md:text-[40px] lg:text-[40px] xl:text-[50px]">
            MEN
          </span>
        </div>
        <div className="text-4xl font-bold text-primary sm:text-[28px] md:text-[40px] lg:text-[40px] xl:text-[50px]">
          Stay Enlightened
        </div>
      </div>
      <div>
        <div className="w-full xl:w-[95%] h-[455px] absolute flex flex-col justify-between top-[185px] z-50 2xl:z-0 sm:z-50">
          <div className="font-sans text-white text-4xl sm:text-5xl md:text-[61px] font-bold self-start pl-[19%]">
            GO BEYOND
          </div>
          <div className="self-end font-sans text-4xl font-bold relative -top-8 text-white sm:text-5xl md:text-[61px]">
            REACH HIGHER
          </div>
        </div>
      </div>

      <img
        className="relative object-contain mx-auto -top-[80px]"
        src={img1}
        alt="img1"
      />
      <div className="absolute bottom-[180px] right-[62px]">
        <Link
          to="targetSection"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <button className="w-[250px] h-[50px] bg-primary border rounded-[5px] shadow text-black hover:text-primary border-primary hover:bg-transparent transition-all">
            <p className="font-sans text-sm font-bold text-[20px]">JOIN US</p>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default IntroSection;
