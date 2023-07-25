import { img1 } from "../assets";
function IntroSection() {
  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-col items-start justify-center w-full gap-4 mt-32 md:w-1/2 md:mt-0">
        <p className=" text-orange-500 text-[21px] font-normal">
          Stay Enlightened
        </p>
        <p className="text-[80px]">
          <span className="font-normal animate-colors">Horse</span>
          <span className="font-normal text-white">men</span>
        </p>
        <p className="text-white text-[16px] font-normal w-10/12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu
          volutpat odio facilisis mauris sit amet. Fringilla ut morbi tincidunt
          augue interdum velit euismod in pellentesque. Phasellus egestas tellus
          rutrum tellus pellentesque. Orci eu lobortis elementum nibh. Nec dui
          nunc mattis enim. Egestas integer eget aliquet nibh. Leo integer
          malesuada nunc vel risus commodo. Sit amet risus nullam eget felis
          eget nunc. Neque viverra justo nec ultrices dui sapien eget mi.
          Aliquam etiam erat velit scelerisque in. Urna et pharetra pharetra
          massa massa ultricies. Eu volutpat odio facilisis mauris sit amet
          massa. Vitae turpis massa sed elementum tempus. Tellus molestie nunc
          non blandit massa. Tempor orci eu lobortis elementum nibh tellus
          molestie nunc. Sit amet risus nullam eget felis eget nunc lobortis.
        </p>
        <button className="w-[250px] h-[50px] mt-8 relative  bg-orange-500 border rounded-[5px] shadow hover:text-orange-500 border-orange-500 hover:bg-transparent transition-all">
          <p className="text-base font-bold text-neutral-900 hover:text-orange-500">
            Check out the Rest
          </p>
        </button>
      </div>
      <div className="relative hidden w-1/2 h-screen md:block">
        <img
          className="absolute object-cover w-full h-full"
          src={img1}
          alt="img1"
        />
      </div>
    </div>
  );
}

export default IntroSection;
