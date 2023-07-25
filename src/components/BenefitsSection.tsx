import React from "react";

function BenefitsSection() {
  return (
    <div className="mt-12">
      <div className="w-[673px]  text-orange-500 text-[22px] font-normal">
        Benefits
      </div>
      <div className="w-10/12 w-full">
        <span className="text-white text-[32px] font-bold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-4 mt-12 md:items-center md:justify-between">
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
                <path d="M1 156V1H156" stroke="#FF8300" stroke-width="2" />
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
                  stroke="#FF8300"
                  stroke-width="2"
                />
              </svg>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BenefitsSection;
