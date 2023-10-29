import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";

type Props = {};

function Hero({}: Props) {
  return (
    <div className=" relative">
      <div className="absolute h-28 w-full bottom-0 bg-white"></div>

      <div className="grid grid-cols-2 gap-5 relative container  mx-auto">
        <div>
          <h1 className="text-magenta-dark text-[40px] font-bold leading-[48px] mt-16">
            Enchanting experiences,
            <br /> with <span className="text-magenta">incredible locals</span>
          </h1>
          <p className="text-xl font-medium leading-7 mb-20 mt-4">
            Book unique and memorable travel <br /> experience guided by locals
          </p>

          <div className="flex gap-4 bg-white w-[460px] group rounded-full relative mt-10">
            <input
              type="text"
              placeholder="Where are you going?"
              className="h-14 rounded-full pl-6 border border-transparent focus:border-magenta focus:ring-1 focus:ring-magenta focus:outline-none w-full m-1"
            />
            <div className="inline-flex items-center inset-y-1 text-lg py-4 px-5 text-green-dark right-1 absolute bg-yellow rounded-full overflow-hidden">
              <MagnifyingGlassIcon className="h-6 w-6" />
              <div className="px-2 transition-all ease-in w-[72px] opacity-100 duration-500 group-focus-within:w-0  group-focus-within:opacity-0 group-focus-within:p-0">
                Search
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-areas-hero-image gap-5 w-fit">
          <div className="grid-in-one ">
            <Image
              className="rounded-lg"
              src="https://withlocals-com-res.cloudinary.com/image/upload/c_fill,f_auto,g_faces,q_auto,w_184,h_285,dpr_1.0/website/homepage/image-grid/marrakech/marrakech-0"
              width={184}
              height={285}
              alt={""}
            />
          </div>
          <div className="grid-in-two ">
            <Image
              className="rounded-lg"
              src="https://withlocals-com-res.cloudinary.com/image/upload/c_fill,f_auto,g_faces,q_auto,w_184,h_285,dpr_1.0/website/homepage/image-grid/marrakech/marrakech-1"
              width={184}
              height={285}
              alt={""}
            />
          </div>
          <div className="grid-in-three ">
            <Image
              className="rounded-lg"
              src="https://withlocals-com-res.cloudinary.com/image/upload/c_fill,f_auto,g_faces,q_auto,w_184,h_184,dpr_1.0/website/homepage/image-grid/marrakech/marrakech-2"
              width={184}
              height={184}
              alt={""}
            />
          </div>
          <div className="grid-in-four ">
            <Image
              className="rounded-lg"
              src="https://withlocals-com-res.cloudinary.com/image/upload/c_fill,f_auto,g_faces,q_auto,w_184,h_285,dpr_1.0/website/homepage/image-grid/marrakech/marrakech-3"
              alt={""}
              width={184}
              height={285}
            />
          </div>
          <div className="grid-in-five ">
            <Image
              className="rounded-lg"
              src="https://withlocals-com-res.cloudinary.com/image/upload/c_fill,f_auto,g_faces,q_auto,w_184,h_285,dpr_1.0/website/homepage/image-grid/marrakech/marrakech-4"
              width={184}
              height={285}
              alt={""}
            />
          </div>
          <div className="grid-in-controls ">
            <div className=" flex justify-between items-center mb-10 text-green-dark h-10 gap-1 cursor-pointer">
              <ChevronLeftIcon className="w-6 h-6" />
              <div className="inline-flex items-center group justify-center flex-1 text-center h-full gap-1 rounded font-medium hover:bg-green-dark hover:text-white">
                <MapPinIcon className="w-5 h-5 fill-green group-hover:fill-white" />
                <div>Marrakech</div>
              </div>
              <ChevronRightIcon className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
