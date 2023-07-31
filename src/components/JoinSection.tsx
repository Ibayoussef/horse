import { img3, end } from "../assets";
import { Link } from "react-router-dom";
function JoinSection() {
  return (
    <div className="relative w-full h-full h-[1451px] mt-12">
      <div className="relative flex flex-row items-center justify-between w-full h-14">
        <div className=" text-primary sm:text-[28px] md:text-[40px] lg:text-[40px] xl:text-[50px] font-bold">
          Why Join Us?
        </div>
        <div>
          <span className="text-4xl font-bold text-primary sm:text-[28px] md:text-[40px] lg:text-[40px] xl:text-[50px]">
            HORSE
          </span>
          <span className="text-4xl font-bold text-stone-50 sm:text-[28px] md:text-[40px] lg:text-[40px] xl:text-[50px]">
            MEN
          </span>
        </div>
      </div>
      <div className="w-[584px] mt-[41px]">
        <span className="text-white text-[40px] font-bold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
      </div>
      <div className="flex justify-end w-full mt-16">
        <div className="w-[584px] h-[187px] relative">
          <div className="left-0 top-0 absolute text-primary text-[50px] font-bold">
            Ready?
          </div>
          <div className="w-[584px] left-0 top-[97px] absolute text-white text-[40px] font-bold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </div>
      </div>
      <div className="relative z-50 flex justify-start w-full mt-16">
        {" "}
        <Link to="horstest">
          <button className="w-[250px] h-[50px] bg-primary border rounded-[5px] shadow text-black hover:text-primary border-primary hover:bg-transparent transition-all">
            <p className="font-sans text-sm font-bold text-[20px]">
              TAKE THE TEST
            </p>
          </button>
        </Link>
      </div>

      <img className="absolute bottom-0 left-0 w-full" src={img3} />
      <img className="absolute left-0 w-full top-52 -z-10" src={end} />
    </div>
  );
}

export default JoinSection;
