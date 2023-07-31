import { mid } from "../assets";
function BenefitsSection() {
  return (
    <div className="relative w-full mt-12" id="targetSection">
      <div className="relative flex flex-row items-center justify-between w-full h-14">
        <div className=" text-primary sm:text-[28px] md:text-[40px] lg:text-[40px] xl:text-[50px] font-bold">
          Benefits
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
      <img
        className="absolute top-0 left-0 object-cover w-full h-full -z-10"
        src={mid}
        alt="mid"
      />
      <div className="flex flex-row justify-between">
        <div className="w-[584px] h-[800px] flex">
          <span className="text-white text-[40px] font-bold mt-28">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
        </div>
        <div className="flex flex-row flex-wrap self-center justify-center gap-12 mt-12 md:items-center md:justify-between">
          {[1, 2, 3].map((p) => {
            return (
              <div className="flex flex-col" key={p}>
                <svg
                  className="self-start"
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="80"
                  viewBox="0 0 156 156"
                  fill="none"
                >
                  <path d="M1 156V1H156" stroke="#d30000" stroke-width="11" />
                </svg>
                <div
                  className="self-center text-center"
                  style={{
                    width: 200,
                    color: "white",
                    fontSize: 32,
                    fontFamily: "Philosopher",
                    fontWeight: "400",
                    wordWrap: "break-word",
                  }}
                >
                  Reach the wealth you desire
                </div>
                <svg
                  className="self-end"
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="80"
                  viewBox="0 0 158 157"
                  fill="none"
                >
                  <path
                    d="M156.687 0.688048L155.999 155.687L1.00003 154.999"
                    stroke="#d30000"
                    stroke-width="11"
                  />
                </svg>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default BenefitsSection;
