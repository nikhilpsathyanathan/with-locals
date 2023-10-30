"use client";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const SLIDER_DATA = [
  {
    title: "The 10 Tastings of Singapore: Street Food",
    image:
      "https://withlocals-com-res.cloudinary.com/image/upload/c_fill,f_auto,g_faces,q_auto,w_286,h_200,dpr_1.0/e2a8827b03ab219bac72897a91d9ae20",
    ratingsCount: 476,
    duration: "3 hours • food tours",
    price: "€62.84",
    guideImages: [
      "https://withlocals-com-res.cloudinary.com/image/upload/c_fill,f_auto,q_auto,g_face,ar_1,c_thumb,z_0.6,w_96/77b975d0755f4c7e267b7887b65557ca",
      "https://withlocals-com-res.cloudinary.com/image/upload/c_fill,f_auto,q_auto,g_face,ar_1,c_thumb,z_0.6,w_48/8e292157ff43ca21650bd912ebaae19c",
    ],
  },
  {
    title: "Highlights & Hidden Gems of Lisbon",
    image:
      "https://withlocals-com-res.cloudinary.com/image/upload/c_fill,f_auto,g_faces,q_auto,w_286,h_200,dpr_1.0/62ae3a68e0b8d3a808b64cb70974aeb6",
    ratingsCount: 1803,
    duration: "3 hours • city highlights tours",
    price: "€27,64",
    guidesCount: 42,
    guideImages: [
      "https://withlocals-com-res.cloudinary.com/image/upload/c_fill,f_auto,q_auto,g_face,ar_1,c_thumb,z_0.6,w_48/091e69633c7b6839b6c1beaf70abace7",
      "https://withlocals-com-res.cloudinary.com/image/upload/c_fill,f_auto,q_auto,g_face,ar_1,c_thumb,z_0.6,w_96/34b086b68ea3e7915721a3d79d73e1e8",
    ],
  },
  {
    title: "Highlights & Hidden Gems of Marrakech",

    image:
      "https://withlocals-com-res.cloudinary.com/image/upload/c_fill,f_auto,g_faces,q_auto,w_286,h_200,dpr_1.0/1f3f3e5be8f6f059dc7f504c3d9da09e",
    ratingsCount: 763,
    duration: "3 hours • city highlights tours",
    price: "€24.99",
    guideImages: [
      "https://withlocals-com-res.cloudinary.com/image/upload/c_fill,f_auto,q_auto,g_face,ar_1,c_thumb,z_0.6,w_48/3adc4c79fedc5baf8df437024f05e0fa",
      "https://withlocals-com-res.cloudinary.com/image/upload/c_fill,f_auto,q_auto,g_face,ar_1,c_thumb,z_0.6,w_96/4cb7fae38b71f803d678ef59c02f9680",
    ],
  },
  {
    title: "The 10 Tastings of Naples",

    image:
      "https://withlocals-com-res.cloudinary.com/image/upload/c_fill,f_auto,g_faces,q_auto,w_286,h_200,dpr_1.0/77395d1b03f4bd8babb9e6beb94e0588",
    ratingsCount: 554,
    duration: "3 hours • food tours",
    price: "€72.31",
    guideImages: [
      "https://withlocals-com-res.cloudinary.com/image/upload/c_fill,f_auto,q_auto,g_face,ar_1,c_thumb,z_0.6,w_48/a5b82233833af721375fe1db1272ddd3",
      "https://withlocals-com-res.cloudinary.com/image/upload/c_fill,f_auto,q_auto,g_face,ar_1,c_thumb,z_0.6,w_96/6d6fcdbae8d8d82201c91ae30dcaf7b8",
    ],
  },
  {
    title: "Highlights & Hidden Gems of Milan",

    image:
      "https://withlocals-com-res.cloudinary.com/image/upload/c_fill,f_auto,g_faces,q_auto,w_286,h_200,dpr_1.0/5f9671a43b89862058d92f0a552e29a5",
    ratingsCount: 441,
    duration: "3 hours • city highlights tours",
    price: "€42.40",
    guideImages: [
      "https://withlocals-com-res.cloudinary.com/image/upload/c_fill,f_auto,q_auto,g_face,ar_1,c_thumb,z_0.6,w_48/a5b82233833af721375fe1db1272ddd3",
      "https://withlocals-com-res.cloudinary.com/image/upload/c_fill,f_auto,q_auto,g_face,ar_1,c_thumb,z_0.6,w_96/6d6fcdbae8d8d82201c91ae30dcaf7b8",
    ],
  },
];

function GetInspired() {
  return (
    <div className="bg-white text-primary container mx-auto px-5 overflow-auto">
      <h2 className="text-magenta-dark text-[27px] font-semibold">
        Get inspired by <span className=" text-magenta">our tours</span>
      </h2>

      <p className="font-medium text-lg mb-6">
        Make memories that last with our privately guided tours
      </p>

      {/* Cards */}
      <div className="overflow-auto">
        <Swiper
          spaceBetween={20}
          slidesPerView={4}
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
            <SwiperSlide key={destination.title}>
              <div className=" bg-biscuit rounded-lg overflow-hidden transform translate-y-1 hover:translate-y-0 duration-200 ease-in-out">
                <div className="relative h-52 w-ful ">
                  <Image
                    src={destination.image}
                    fill
                    alt={destination.title}
                    className=" object-center object-cover"
                  />

                  <div className="absolute -bottom-2 left-4 flex -space-x-2">
                    <div className="inline-flex -space-x-4 flex-wrap-reverse ">
                      {destination.guideImages.map((guideImage) => (
                        <Image
                          key={guideImage}
                          src={guideImage}
                          width={56}
                          height={56}
                          alt={""}
                          className="rounded-full border-2 border-white"
                        />
                      ))}
                    </div>
                    <div className="bg-green-dark rounded-full text-xs font-medium h-fit self-end  text-white px-4 py-[2px]">
                      Choose your local
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <div className="font-semibold text-lg h-16">
                    {destination.title}
                  </div>
                  <div className="text-xs font-medium space-y-[2px]">
                    <div className="inline-flex fill-magenta items-center gap-1 ">
                      5.0
                      {[1, 2, 3, 4, 5].map((i) => (
                        <svg
                          key={i}
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          role="none"
                        >
                          <g>
                            <path d="M11.971883,4.57647868 C11.8934673,4.33537963 11.6687536,4.17152591 11.4147803,4.17152591 L7.70466388,4.17152591 L6.55651744,0.641648573 C6.39851563,0.159450476 5.60148431,0.159450476 5.44348251,0.641648573 L4.29533607,4.17152591 L0.585219689,4.17152591 C0.331246419,4.17152591 0.106532743,4.33537963 0.0281170327,4.57647868 C-0.0491282936,4.81757773 0.0363097188,5.08208445 0.241126872,5.23072319 L3.24316115,7.41231846 L2.09618509,10.9421958 C2.01893976,11.1844652 2.10437777,11.4478016 2.30919493,11.5964403 C2.51518246,11.745079 2.79139302,11.745079 2.99738056,11.5964403 L5.99941478,9.41484503 L9.00261944,11.5964403 C9.10561321,11.6713449 9.22499235,11.7087971 9.34671226,11.7087971 C9.46726178,11.7087971 9.5878113,11.6713449 9.69080507,11.5964403 C9.89562223,11.4478016 9.98106024,11.1844652 9.90264453,10.9421958 L8.75683885,7.41231846 L11.7588731,5.23072319 C11.9636903,5.08208445 12.0491283,4.81757773 11.971883,4.57647868"></path>
                          </g>
                        </svg>
                      ))}
                      {`${destination.ratingsCount} reviews`}
                    </div>
                    <div>{`${destination.duration}`}</div>
                    <div className="font-semibold">{`from ${destination.price} per person`}</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className="flex justify-between mt-5">
            <button className="inline-flex items-center font-semibold text-sm bg-biscuit text-magenta rounded-lg px-3 hover:bg-magenta hover:text-white">
              View all tours <ChevronRightIcon className="w-4 h-4" />
            </button>
            <div className="inline-flex gap-2 ">
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

export default GetInspired;
