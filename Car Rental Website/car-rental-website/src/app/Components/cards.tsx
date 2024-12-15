import Image from "next/image";
import gas from "../images/gas-station.png";
import car from "../images/manual.png";
import user from "../images/profile-2user.png";
import Link from "next/link";
import { Popular, Recommendation } from "../Data/cards";

export default function Cards() {

  // Container classes 
  const containerClasses = "bg-[#F6F7F9] w-[100vw] lg:w-[1016px] lg:h-[1000px] h-[1900px]";

  // Section for Popular Cars
  const popularSectionClasses = "w-[100vw] lg:w-[1016px] lg:h-[452px] h-auto";

  // Section for Recent Cars
  const recentSectionClasses = "w-[100vw] h-[452px] lg:w-[1016px]";

  // Card wrapper for both Popular and Recent sections
  const cardWrapperClasses = "bg-white lg:w-[304px] lg:h-[388px] w-[327px] h-[240px] rounded-[10px] flex flex-col p-[15px] justify-evenly";

  // Card detail section classes (name, title, image)
  const cardHeaderClasses = "flex justify-between";
  const cardTitleClasses = "w-[128px] h-[48px] flex flex-col";
  const cardInfoClasses = "text-black text-[20px] font-bold w-[128px]";

  // Card bottom section (details about gasoline, car type, capacity)
  const cardDetailClasses = "flex lg:flex-col flex-row items-center";
  const detailInfoWrapperClasses = "flex lg:flex-row flex-col lg:gap-[16px] gap-[4px] lg:w-[256px] lg:h-[24px] w-[130px] h-[74px]";
  const detailItemClasses = "flex gap-[4px]";

  // Price and rent button section classes
  const priceSectionClasses = "flex flex-row w-[100%] justify-between";
  const priceInfoClasses = "flex w-[128px] h-[44px] flex-col";
  const rentButtonClasses = "w-[116px] h-[44px] bg-[#3563E9] text-white pt-[10px] pl-[20px] rounded-[4px]";

  return (
    <div className={containerClasses}>
      {/* Popular Cars Section */}
      <div className={popularSectionClasses}>
        <div className="flex flex-row justify-between items-center lg:w-[1016px]">
          <p className="p-[40px] text-[#90A3BF] text-[16px]">Popular Car</p>
          <p className="text-[14px] text-[#3563E9]">View All</p>
        </div>

        <div className="flex justify-around lg:flex-row w-[100vw] lg:w-[100%] relative flex-col lg:h-[388px] h-auto lg:gap-[0px] gap-[15px]">
          {Popular.map((e, index) => (
            <div key={index} className={cardWrapperClasses}>
              <div className={cardHeaderClasses}>
                <div className={cardTitleClasses}>
                  <p className={cardInfoClasses}>{e.name}</p>
                  <p className="text-[12px]">{e.title}</p>
                </div>
                <div><Image src={e.icon} alt="" /></div>
              </div>

              <div className={cardDetailClasses}>
                <div className="lg:mt-[45px] lg:mb-[45px]">
                  <Image src={e.image} alt={e.name} />
                </div>
                <div className={detailInfoWrapperClasses}>
                  <div className={detailItemClasses}>
                    <div className="w-[24px] h-[24px]">
                      <Image src={gas} alt="" />
                    </div>
                    <p className="text-[#90A3BF] text-[14px]">{e.gasoline}</p>
                  </div>
                  <div className={detailItemClasses}>
                    <div className="w-[24px] h-[24px]">
                      <Image src={car} alt="" />
                    </div>
                    <p className="text-[#90A3BF] text-[14px]">{e.car}</p>
                  </div>
                  <div className={detailItemClasses}>
                    <div className="w-[24px] h-[24px]">
                      <Image src={user} alt="" />
                    </div>
                    <p className="text-[#90A3BF] text-[14px]">{e.capacity}</p>
                  </div>
                </div>
              </div>

              <div className={priceSectionClasses}>
                <div className={priceInfoClasses}>
                  <div className="flex flex-row items-center">
                    <div className="font-bold text-[22px] text-black">{e.dPrice}</div>
                    <div className="text-[#90A3BF] text-[14px]">days</div>
                  </div>
                  <div className="line-through text-[14px] text-[#90A3BF]">{e.oPrice}</div>
                </div>
                <div className={rentButtonClasses}>
                  <Link href={'/Payment-Method'}>Rent Now</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Cars Section */}
      <div className={recentSectionClasses}>
        <div className="flex flex-row justify-between mt-[50px] items-center lg:w-[1016px]">
          <p className="p-[40px] text-[#90A3BF] text-[16px]">Recent Car</p>
          <p className="text-[14px] text-[#3563E9]">View All</p>
        </div>

        <div className="flex justify-evenly flex-wrap lg:w-[100%] relative lg:h-[808px] h-auto gap-[15px]">
          {Recommendation.map((e, index) => (
            <div key={index} className={cardWrapperClasses}>
              <div className={cardHeaderClasses}>
                <div className={cardTitleClasses}>
                  <p className={cardInfoClasses}>{e.name}</p>
                  <p className="text-[12px]">{e.title}</p>
                </div>
                <div><Image src={e.icon} alt="" /></div>
              </div>

              <div className={cardDetailClasses}>
                <div className="lg:mt-[45px] lg:mb-[45px]">
                  <Image src={e.image} alt={e.name} />
                </div>
                <div className={detailInfoWrapperClasses}>
                  <div className={detailItemClasses}>
                    <div className="w-[24px] h-[24px]">
                      <Image src={gas} alt="" />
                    </div>
                    <p className="text-[#90A3BF] text-[14px]">{e.gasoline}</p>
                  </div>
                  <div className={detailItemClasses}>
                    <div className="w-[24px] h-[24px]">
                      <Image src={car} alt="" />
                    </div>
                    <p className="text-[#90A3BF] text-[14px]">{e.car}</p>
                  </div>
                  <div className={detailItemClasses}>
                    <div className="w-[24px] h-[24px]">
                      <Image src={user} alt="" />
                    </div>
                    <p className="text-[#90A3BF] text-[14px]">{e.capacity}</p>
                  </div>
                </div>
              </div>

              <div className={priceSectionClasses}>
                <div className={priceInfoClasses}>
                  <div className="flex flex-row items-center">
                    <div className="font-bold text-[22px] text-black">{e.dPrice}</div>
                    <div className="text-[#90A3BF] text-[14px]">days</div>
                  </div>
                  <div className="line-through text-[14px] text-[#90A3BF]">{e.oPrice}</div>
                </div>
                <div className={rentButtonClasses}>
                  <Link href={'/Payment-Method'}>Rent Now</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
