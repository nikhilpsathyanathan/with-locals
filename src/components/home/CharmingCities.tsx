"use client";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const SLIDER_DATA = [
  {
    location: "Bangkok",
    description:
      "Going to Bangkok and wondering what to do? No need to worry, there’s plenty of things to do in Bangkok with a local.",
    image:
      "https://withlocals-com-res.cloudinary.com/image/upload/c_fill,f_auto,g_faces,ar_1.27,w_828/b2b6b12709dd9420cb17599242bfaf95",
    toursCount: 43,
    guidesCount: 36,
    guideImages: [
      "https://withlocals-com-res.cloudinary.com/image/upload/c_fill,f_auto,q_auto,g_face,ar_1,c_thumb,z_0.6,w_96/77b975d0755f4c7e267b7887b65557ca",
      "https://withlocals-com-res.cloudinary.com/image/upload/c_fill,f_auto,q_auto,g_face,ar_1,c_thumb,z_0.6,w_48/8e292157ff43ca21650bd912ebaae19c",
    ],
  },
  {
    location: "Istanbul",
    description:
      "Going to Istanbul and wondering what to do? No need to worry, there’s plenty of things to do in Istanbul with a local.",
    image:
      "https://withlocals-com-res.cloudinary.com/image/upload/c_fill,f_auto,g_faces,ar_1.27,w_400/36d5b9336c20d148f6616f9348ebc9bd",
    toursCount: 34,
    guidesCount: 42,
    guideImages: [
      "https://withlocals-com-res.cloudinary.com/image/upload/c_fill,f_auto,q_auto,g_face,ar_1,c_thumb,z_0.6,w_48/091e69633c7b6839b6c1beaf70abace7",
      "https://withlocals-com-res.cloudinary.com/image/upload/c_fill,f_auto,q_auto,g_face,ar_1,c_thumb,z_0.6,w_96/34b086b68ea3e7915721a3d79d73e1e8",
    ],
  },
  {
    location: "Amsterdam",
    description:
      "Tour Amsterdam with a local guide and discover the city's beauty, culture, and attractions. From the canals to the museums, there's so much to see and do.",
    image:
      "https://withlocals-com-res.cloudinary.com/image/upload/c_fill,f_auto,g_faces,ar_1.27,w_828/012a279e3da0775bd8212b492ec34c4f",
    toursCount: 60,
    guidesCount: 36,
    guideImages: [
      "https://withlocals-com-res.cloudinary.com/image/upload/c_fill,f_auto,q_auto,g_face,ar_1,c_thumb,z_0.6,w_48/3adc4c79fedc5baf8df437024f05e0fa",
      "https://withlocals-com-res.cloudinary.com/image/upload/c_fill,f_auto,q_auto,g_face,ar_1,c_thumb,z_0.6,w_96/4cb7fae38b71f803d678ef59c02f9680",
    ],
  },
  {
    location: "Paris",
    description:
      "Going to Paris and wondering what to do? No need to worry, there’s plenty of things to do in Paris with a local.",
    image:
      "https://withlocals-com-res.cloudinary.com/image/upload/c_fill,f_auto,g_faces,ar_1.27,w_400/45b7e5c754238bd646de177ac2425bc7",
    toursCount: 60,
    guidesCount: 36,
    guideImages: [
      "https://withlocals-com-res.cloudinary.com/image/upload/c_fill,f_auto,q_auto,g_face,ar_1,c_thumb,z_0.6,w_48/a5b82233833af721375fe1db1272ddd3",
      "https://withlocals-com-res.cloudinary.com/image/upload/c_fill,f_auto,q_auto,g_face,ar_1,c_thumb,z_0.6,w_96/6d6fcdbae8d8d82201c91ae30dcaf7b8",
    ],
  },
];

function CharmingCities() {
  return (
    <div className="bg-white text-primary container mx-auto px-5 overflow-auto">
      <h2 className="text-magenta-dark text-[27px] font-semibold">
        Go local in <span className=" text-magenta">Charming Cities</span>
      </h2>

      <p className="font-medium text-lg mb-6">
        Find a private guided tour with one of our locals
      </p>

      {/* Cards */}
      <div className="overflow-auto">
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          pagination={{
            enabled: true,
          }}
          modules={[Navigation, Pagination]}
          navigation={{
            prevEl: "#prev_slide",
            nextEl: "#next_slide",
            disabledClass: "border-gray/50 text-gray/50",
          }}
        >
          {SLIDER_DATA.map((destination) => (
            <SwiperSlide key={destination.location}>
              <div className=" bg-biscuit rounded-lg overflow-hidden transform translate-y-1 hover:translate-y-0 duration-200 ease-in-out">
                <div className="relative h-72 w-ful ">
                  <Image
                    src={destination.image}
                    fill
                    alt={destination.location}
                    className=" object-center object-cover"
                  />
                  <div className="absolute bottom-5 text-white text-[32px] leading-10 font-semibold flex flex-col items-center w-full">
                    <div className="border-b-2 border-white font-medium text-xl">
                      Things to do in
                    </div>
                    <div> {destination.location}</div>
                  </div>
                </div>
                <div className="p-5">
                  <div className="font-semibold text-base text-center h-[5.5rem] mb-5">
                    {destination.description}
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="inline-flex -space-x-4">
                      {destination.guideImages.map((guideImage) => (
                        <Image
                          key={guideImage}
                          src={guideImage}
                          width={48}
                          height={48}
                          alt={""}
                          className="rounded-full border-2 border-white"
                        />
                      ))}
                      <div className="rounded-full border-2 w-12 h-12 border-white  text-white inline-flex items-center justify-center bg-green">{`+${destination.guidesCount}`}</div>
                    </div>

                    <div className="bg-magenta rounded-full text-base text-white px-6 py-3">{`Explore ${destination.toursCount} tours`}</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className="flex justify-between mt-5">
            <button className="inline-flex items-center font-semibold text-sm bg-biscuit text-magenta rounded-lg px-3 ">
              View all Cites <ChevronRightIcon className="w-4 h-4" />
            </button>
            <div className="inline-flex gap-2">
              <div
                id="prev_slide"
                className="w-8 h-8 rounded-full border border-gray/60 text-gray-dark hover:text-white hover:bg-magenta"
              >
                <ChevronLeftIcon className="w-8 h-8  rounded-full   p-1" />
              </div>
              <div
                id="next_slide"
                className="w-8 h-8 rounded-full border border-gray/60 text-gray-dark hover:text-white hover:bg-magenta"
              >
                <ChevronRightIcon className="w-8 h-8  rounded-full  p-1" />
              </div>
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
}

export default CharmingCities;
