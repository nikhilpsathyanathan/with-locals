import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

const DATA = [
  {
    name: "2. Hong kong",
    description:
      "HK is a foodie paradise, and its cuisine is as flavorful as it is rich in culture and history.",
    img: "https://withlocals-com-res.cloudinary.com/image/upload/c_fill,f_auto,q_auto,w_400/website/lists/food-hk",
    guidesImage: [
      "https://withlocals-com-res.cloudinary.com/image/upload/c_fill,f_auto,q_auto,g_face,ar_1,c_thumb,z_0.6,w_48/091e69633c7b6839b6c1beaf70abace7",
      "https://withlocals-com-res.cloudinary.com/image/upload/c_fill,f_auto,q_auto,g_face,ar_1,c_thumb,z_0.6,w_96/34b086b68ea3e7915721a3d79d73e1e8",
    ],
    guidesCount: 65,
    toursCount: 107,
  },
  {
    name: "3. Rome",
    description:
      "When in Rome, do as the Romans do: discover the beauty of Italian food! From authentic plates of pasta & pizzas to the best gelatos!.",
    img: "https://withlocals-com-res.cloudinary.com/image/upload/c_fill,f_auto,q_auto,w_400/website/lists/food-rome",
    guidesImage: [
      "https://withlocals-com-res.cloudinary.com/image/upload/c_fill,f_auto,q_auto,g_face,ar_1,c_thumb,z_0.6,w_48/3adc4c79fedc5baf8df437024f05e0fa",
      "https://withlocals-com-res.cloudinary.com/image/upload/c_fill,f_auto,q_auto,g_face,ar_1,c_thumb,z_0.6,w_96/4cb7fae38b71f803d678ef59c02f9680",
    ],
    guidesCount: 65,
    toursCount: 107,
  },
  {
    name: "4. Kuala Lumpur",
    description:
      "Kuala Lumpur's cuisine is rich in many flavors. The melting pot of dishes is sure to tantalize your taste buds!",
    img: "https://withlocals-com-res.cloudinary.com/image/upload/c_fill,f_auto,q_auto,w_400/website/lists/food-kl",
    guidesImage: [
      "https://withlocals-com-res.cloudinary.com/image/upload/c_fill,f_auto,q_auto,g_face,ar_1,c_thumb,z_0.6,w_48/f007c7bfb69f3679e8c51b57ad52d2f7",
      "https://withlocals-com-res.cloudinary.com/image/upload/c_fill,f_auto,q_auto,g_face,ar_1,c_thumb,z_0.6,w_96/0d84f1de190587474ba8258db6029141",
    ],
    guidesCount: 34,
    toursCount: 27,
  },
  {
    name: "5. Milan",
    description:
      "Thanks to its iconic dishes and cosmopolitan atmosphere, Milan is the perfect place to make your taste buds dance.",
    img: "https://withlocals-com-res.cloudinary.com/image/upload/c_fill,f_auto,q_auto,w_400/website/lists/food-milan",
    guidesImage: [
      "https://withlocals-com-res.cloudinary.com/image/upload/c_fill,f_auto,q_auto,g_face,ar_1,c_thumb,z_0.6,w_48/a5b82233833af721375fe1db1272ddd3",
      "https://withlocals-com-res.cloudinary.com/image/upload/c_fill,f_auto,q_auto,g_face,ar_1,c_thumb,z_0.6,w_96/6d6fcdbae8d8d82201c91ae30dcaf7b8",
    ],
    guidesCount: 24,
    toursCount: 38,
  },
];

function FiveFoodDestinations() {
  return (
    <div className="bg-white text-primary container mx-auto px-5 overflow-auto">
      <h2 className="text-magenta-dark text-[27px] font-semibold">
        Top <span className=" text-magenta">5 destinations</span> for foodies
      </h2>

      <div className="flex justify-between items-center">
        <p className="font-medium text-lg mb-6">
          Make memories that last with our privately guided tours
        </p>
        <button className="inline-flex items-center font-semibold text-sm bg-biscuit text-magenta rounded-lg px-3 py-1 hover:bg-magenta hover:text-white">
          See all food tours <ChevronRightIcon className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-3 grid-rows-2 gap-5 overflow-clip">
        <div className=" col-span-2 grid grid-cols-2 rounded-lg overflow-clip transform translate-y-1 hover:translate-y-0 duration-200 ease-in-out">
          <div className="relative">
            <Image
              src="https://withlocals-com-res.cloudinary.com/image/upload/c_fill,f_auto,q_auto,w_400/website/lists/food-madrid"
              fill
              alt={""}
              className="justify-center object-cover"
            />
          </div>
          <div className="bg-biscuit flex flex-col p-5 pt-7">
            <h2 className="text-2xl font-semibold">1.Madrid</h2>
            <p className="flex-1 font-semibold text-base  h-[5.5rem]">
              From modern to traditional cuisine. From cocktail bars to
              centuries-old cafes. Savor the very best. Madrid has it all!
            </p>
            <div className="flex justify-between items-center ">
              <div className="inline-flex -space-x-4">
                {[
                  "https://withlocals-com-res.cloudinary.com/image/upload/c_fill,f_auto,q_auto,g_face,ar_1,c_thumb,z_0.6,w_96/77b975d0755f4c7e267b7887b65557ca",
                  "https://withlocals-com-res.cloudinary.com/image/upload/c_fill,f_auto,q_auto,g_face,ar_1,c_thumb,z_0.6,w_48/8e292157ff43ca21650bd912ebaae19c",
                ].map((guideImage) => (
                  <Image
                    key={guideImage}
                    src={guideImage}
                    width={48}
                    height={48}
                    alt={""}
                    className="rounded-full border-2 border-white"
                  />
                ))}
                <div className="rounded-full border-2 w-12 h-12 border-white  text-white inline-flex items-center justify-center bg-green">{`+${22}`}</div>
              </div>

              <div className="bg-magenta rounded-full text-base text-white px-6 py-3 font-medium ">{`Discover ${27} tours`}</div>
            </div>
          </div>
        </div>
        {DATA.map((data) => (
          <div
            key={data.name}
            className=" bg-biscuit rounded-lg overflow-hidden transform translate-y-1 hover:translate-y-0 duration-200 ease-in-out"
          >
            <div className=" h-48 w-full relative">
              <Image
                src={data.img}
                fill
                alt={data.name}
                className=" object-center object-cover"
              />
            </div>
            <div className="p-5">
              <h2 className="text-2xl font-semibold mb-2">{data.name}</h2>
              <div className="font-semibold text-base  h-[5.5rem] mb-5">
                {data.description}
              </div>
              <div className="flex justify-between items-center">
                <div className="inline-flex -space-x-4">
                  {data.guidesImage.map((guideImage) => (
                    <Image
                      key={guideImage}
                      src={guideImage}
                      width={48}
                      height={48}
                      alt={""}
                      className="rounded-full border-2 border-white"
                    />
                  ))}
                  <div className="rounded-full border-2 w-12 h-12 border-white  text-white inline-flex items-center justify-center bg-green">{`+${data.guidesCount}`}</div>
                </div>

                <div className="border border-magenta rounded-full text-base font-medium text-magenta px-6 py-3">{`Discover ${data.toursCount} tours`}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FiveFoodDestinations;
