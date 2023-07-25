import { img3 } from "../assets";
import { Link } from "react-router-dom";
function JoinSection() {
  return (
    <div className="relative w-full h-full mt-12">
      <img className="md:w-[600px] md:h-[835px]" src={img3} />
      <div className="md:w-[600px] h-[400px] bg-white absolute bottom-12 md:right-60 p-12">
        <div className="w-[315px] text-orange-500 text-[18px] font-normal">
          Why join us?
        </div>
        <div className="w-full">
          <span className="text-black text-[22px] font-bold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
        </div>
        <Link to="horstest">
          <button className="w-[250px] h-[50px] mt-8 relative  bg-orange-500 border rounded-[5px] shadow hover:text-orange-500 border-orange-500 hover:bg-transparent transition-all">
            <p className="text-base font-bold text-neutral-900 hover:text-orange-500">
              Take the test
            </p>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default JoinSection;
