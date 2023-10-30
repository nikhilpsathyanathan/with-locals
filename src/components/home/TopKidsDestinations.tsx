import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

const DATA = [
  {
    name: "2. Ancient Rome",
    description:
      "The Eternal City is filled with treasures! Ready to discover them with your family? Top it off with yummy pizzas & gelatos!.",
    img: "https://withlocals-com-res.cloudinary.com/image/upload/c_fill,f_auto,q_auto,w_400/website/lists/ff-rome",
    guidesImage: [
      "https://withlocals-com-res.cloudinary.com/image/upload/c_fill,f_auto,q_auto,g_face,ar_1,c_thumb,z_0.6,w_48/091e69633c7b6839b6c1beaf70abace7",
      "https://withlocals-com-res.cloudinary.com/image/upload/c_fill,f_auto,q_auto,g_face,ar_1,c_thumb,z_0.6,w_96/34b086b68ea3e7915721a3d79d73e1e8",
    ],
    guidesCount: 65,
    toursCount: 107,
  },
  {
    name: "3. Creative Barcelona",
    description:
      "Whether your kids are into playing at the beach, eating yummy food or running at the park - the sunny city of Barcelona has it all!",
    img: "https://withlocals-com-res.cloudinary.com/image/upload/c_fill,f_auto,q_auto,w_400/website/lists/ff-barcelona",
    guidesImage: [
      "https://withlocals-com-res.cloudinary.com/image/upload/c_fill,f_auto,q_auto,g_face,ar_1,c_thumb,z_0.6,w_48/3adc4c79fedc5baf8df437024f05e0fa",
      "https://withlocals-com-res.cloudinary.com/image/upload/c_fill,f_auto,q_auto,g_face,ar_1,c_thumb,z_0.6,w_96/4cb7fae38b71f803d678ef59c02f9680",
    ],
    guidesCount: 58,
    toursCount: 63,
  },
  {
    name: "4. majestic Porto",
    description:
      "Porto is perfect for traveling with kids. From cool parks to the seaside and Family Friendly attractions - there's plenty of fun for everyone!",
    img: "https://withlocals-com-res.cloudinary.com/image/upload/c_fill,f_auto,q_auto,w_400/website/lists/ff-porto",
    guidesImage: [
      "https://withlocals-com-res.cloudinary.com/image/upload/c_fill,f_auto,q_auto,g_face,ar_1,c_thumb,z_0.6,w_48/f007c7bfb69f3679e8c51b57ad52d2f7",
      "https://withlocals-com-res.cloudinary.com/image/upload/c_fill,f_auto,q_auto,g_face,ar_1,c_thumb,z_0.6,w_96/0d84f1de190587474ba8258db6029141",
    ],
    guidesCount: 41,
    toursCount: 40,
  },
  {
    name: "5. Active Budapest",
    description:
      "When in Budapest, your family is in for a treat! Delicious food, cool boat rides, and much more family fun awaits..",
    img: "https://withlocals-com-res.cloudinary.com/image/upload/c_fill,f_auto,q_auto,w_400/website/lists/ff-budapest",
    guidesImage: [
      "https://withlocals-com-res.cloudinary.com/image/upload/c_fill,f_auto,q_auto,g_face,ar_1,c_thumb,z_0.6,w_48/a5b82233833af721375fe1db1272ddd3",
      "https://withlocals-com-res.cloudinary.com/image/upload/c_fill,f_auto,q_auto,g_face,ar_1,c_thumb,z_0.6,w_96/6d6fcdbae8d8d82201c91ae30dcaf7b8",
    ],
    guidesCount: 24,
    toursCount: 24,
  },
];

function TopKidsDestinations() {
  return (
    <div className="bg-white text-primary container mx-auto px-5 overflow-auto">
      <h2 className="text-magenta-dark text-[27px] font-semibold">
        Top <span className=" text-magenta">5 destinations</span> with kids
      </h2>

      <div className="flex justify-between items-center">
        <p className="font-medium text-lg mb-6">
          Discover our family friendly tours tailored to your family&apos;s
          wishes.
        </p>
        <button className="inline-flex items-center font-semibold text-sm bg-biscuit text-magenta rounded-lg px-3 py-1 hover:bg-magenta hover:text-white">
          See all family tours <ChevronRightIcon className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-3 grid-rows-2 gap-5">
        <div className=" col-span-2 grid grid-cols-2 rounded-lg overflow-clip transform translate-y-1 hover:translate-y-0 duration-200 ease-in-out">
          <div className="relative">
            <Image
              src="https://withlocals-com-res.cloudinary.com/image/upload/c_fill,f_auto,q_auto,w_400/website/lists/ff-paris"
              fill
              alt={""}
              className="justify-center object-cover"
            />
          </div>
          <div className="bg-biscuit flex flex-col p-5 pt-7">
            <h2 className="text-2xl font-semibold mb-1">1.Magical Paris</h2>
            <p className="flex-1 font-semibold text-base  h-[5.5rem]">
              Paris with kids? Oui! From cool sights to fun playgrounds & yummy
              food. It&apos;s the perfect city to have a blast with the family.
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
                <div className="rounded-full border-2 w-12 h-12 border-white  text-white inline-flex items-center justify-center bg-green">{`+${53}`}</div>
              </div>

              <div className="bg-magenta rounded-full text-base text-white px-6 py-3 font-medium ">{`Discover ${62} tours`}</div>
            </div>
          </div>
        </div>
        {DATA.map((data) => (
          <div
            key={data.name}
            className=" bg-biscuit rounded-lg overflow-hidden transform translate-y-1 hover:translate-y-0 duration-200 ease-in-out mb-1"
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

export default TopKidsDestinations;
