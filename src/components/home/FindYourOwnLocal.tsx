import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

type Props = {};

const IMAGES = [
  "https://withlocals-com-res.cloudinary.com/image/upload/c_fill,f_auto,q_auto,w_256/website/homepage/locals-images/local-host-1",
  "https://withlocals-com-res.cloudinary.com/image/upload/c_fill,f_auto,q_auto,w_256/website/homepage/locals-images/local-host-2",
  "https://withlocals-com-res.cloudinary.com/image/upload/c_fill,f_auto,q_auto,w_256/website/homepage/locals-images/local-host-3",
  "https://withlocals-com-res.cloudinary.com/image/upload/c_fill,f_auto,q_auto,w_256/website/homepage/locals-images/local-host-4",
  "https://withlocals-com-res.cloudinary.com/image/upload/c_fill,f_auto,q_auto,w_256/website/homepage/locals-images/local-host-5",
  "https://withlocals-com-res.cloudinary.com/image/upload/c_fill,f_auto,q_auto,w_256/website/homepage/locals-images/local-host-6",
];
function FindYourOwnLocal({}: Props) {
  return (
    <div className="bg-biscuit overflow-hidden">
      <div className="container mx-auto grid grid-cols-2">
        <div className="grid grid-cols-3 grid-flow-row gap-4  w-fit -my-12">
          <div className="col-span-1 relative translate-y-[16%] h-60 w-[182px]">
            <Image src={IMAGES[0]} fill alt={""} className="rounded-b-lg" />
          </div>
          <div className="col-span-1 relative -translate-y-[20%] h-60 w-[182px]">
            <Image
              src={IMAGES[1]}
              fill
              alt={""}
              className="rounded-b-lg object-bottom object-scale-down"
            />
          </div>
          <div className="col-span-1 relative h-[192px] translate-y-[25%]  w-[182px]">
            <Image src={IMAGES[2]} fill alt={""} className="rounded-b-lg" />
          </div>
          <div className="col-span-1 relative translate-y-[20%] h-[192px]  w-[182px]">
            <Image
              src={IMAGES[3]}
              fill
              alt={""}
              className="rounded-t-lg object-cover object-top"
            />
          </div>
          <div className="col-span-1 relative -translate-y-[20%] h-60 w-[182px]">
            <Image src={IMAGES[4]} fill alt={""} className="rounded-t-lg" />
          </div>
          <div className="col-span-1 relative h-[192px] w-[182px]">
            <Image src={IMAGES[5]} fill alt={""} className="rounded-t-lg" />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-[32px] font-semibold text-green-dark">
            Find your <span className="text-green">own local</span>
          </h2>
          <p className="mt-6 mr-10 text-center  text-primary font-medium">
            Our local hosts can offer you a truly unique tour. Get in contact
            with your favourite local host for an offer 100% personalized to
            your wishes.
          </p>
          <div className="flex gap-4 bg-white w-[460px] group rounded-full relative mt-10">
            <input
              type="text"
              placeholder="Find your local in..."
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
      </div>
    </div>
  );
}

export default FindYourOwnLocal;
