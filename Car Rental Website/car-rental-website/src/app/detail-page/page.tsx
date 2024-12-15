import Image from "next/image";
import uncheck from "../images/Ceklist.png";
import checked from "../images/tick-square.png";
import view from "../images/View.png";
import one from "../images/View 1.png";
import two from "../images/View 2.png";
import three from "../images/View 3.png";
import heart from "../images/red-heart.png";
import { LiaStarSolid } from "react-icons/lia";
import { RiStarSLine } from "react-icons/ri";
import ReviewSection from "../Components/review";
import Cards from "../Components/cards";
import Link from "next/link";
import price from "../images/pricerange.png";

export default function Details() {
  return (
    <div className="flex lg:flex-row flex-col lg:p-[10px] p-[15px] bg-[#F6F7F9]">
      {/* Sidebar Section */}
      <div className="lg:w-[20vw] w-[100vw] lg:h-[2016px] h-auto flex-col bg-white p-[18px]">
        {/* Type Filters */}
        <div className="mb-[35px] flex flex-col gap-[15px]">
          <p className="text-[12px] text-[#90A3BF]">TYPE</p>
          <div className="flex gap-[6px] items-center">
            <Image src={checked} alt="" />
            <p className="text-[16px]">Sport</p>
            <p className="text-[#90A3BF] text-[16px]">(10)</p>
          </div>
          <div className="flex gap-[6px] items-center">
            <Image src={checked} alt="" />
            <p className="text-[16px]">SUV</p>
            <p className="text-[#90A3BF] text-[16px]">(12)</p>
          </div>
          <div className="flex gap-[6px] items-center">
            <Image src={uncheck} alt="" />
            <p className="text-[16px]">MPV</p>
            <p className="text-[#90A3BF] text-[16px]">(16)</p>
          </div>
          <div className="flex gap-[6px] items-center">
            <Image src={uncheck} alt="" />
            <p className="text-[16px]">Sedan</p>
            <p className="text-[#90A3BF] text-[16px]">(20)</p>
          </div>
          <div className="flex gap-[6px] items-center">
            <Image src={uncheck} alt="" />
            <p className="text-[16px]">Coupe</p>
            <p className="text-[#90A3BF] text-[16px]">(14)</p>
          </div>
          <div className="flex gap-[6px] items-center">
            <Image src={uncheck} alt="" />
            <p className="text-[16px]">Hatchback</p>
            <p className="text-[#90A3BF] text-[16px]">(14)</p>
          </div>
        </div>

        {/* Capacity Filters */}
        <div className="mb-[35px] flex flex-col gap-[15px]">
          <p className="text-[12px] text-[#90A3BF]">CAPACITY</p>
          <div className="flex gap-[6px] items-center">
            <Image src={checked} alt="" />
            <p className="text-[16px]">2 Person</p>
            <p className="text-[#90A3BF] text-[16px]">(10)</p>
          </div>
          <div className="flex gap-[6px] items-center">
            <Image src={uncheck} alt="" />
            <p className="text-[16px]">4 Person</p>
            <p className="text-[#90A3BF] text-[16px]">(14)</p>
          </div>
          <div className="flex gap-[6px] items-center">
            <Image src={uncheck} alt="" />
            <p className="text-[16px]">6 Person</p>
            <p className="text-[#90A3BF] text-[16px]">(12)</p>
          </div>
          <div className="flex gap-[6px] items-center">
            <Image src={checked} alt="" />
            <p className="text-[16px]">8 or More</p>
            <p className="text-[#90A3BF] text-[16px]">(16)</p>
          </div>
        </div>

        {/* Price Filter */}
        <div className="mb-[35px] flex flex-col gap-[15px]">
          <p className="text-[12px] text-[#90A3BF]">PRICE</p>
          <Image src={price} alt="" className="w-[170px]" />
          <p className="text-[#596780] text-[20px] font-bold">Max. $100.00</p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="w-[80vw] bg-[#F6F7F9] lg:p-[30px]">
        {/* Car Images and Details */}
        <div className="flex lg:flex-row flex-col gap-[40px]">
          {/* Image Gallery */}
          <div className="w-[950px] flex flex-col gap-[20px] bg-white lg:p-[10px]">
            <div className="lg:w-[492px] lg:h-[360px] w-[90vw]">
              <Image src={view} alt="" />
            </div>
            <div className="lg:w-[100%] w-[90vw] flex justify-around items-center">
              <div>
                <Image src={one} alt="" className="lg:w-[148px] w-[90px] h-[90px] lg:h-[124px]" />
              </div>
              <div>
                <Image src={two} alt="" className="lg:w-[148px] w-[90px] h-[90px] lg:h-[124px]" />
              </div>
              <div>
                <Image src={three} alt="" className="lg:w-[148px] w-[90px] h-[90px] lg:h-[124px]" />
              </div>
            </div>
          </div>

          {/* Car Information and Price */}
          <div className="bg-white p-[20px] lg:w-[500px] w-[90vw]">
            {/* Car Title and Rating */}
            <div className="flex justify-between p-[10px] lg:w-[492px] w-[89vw]">
              <div className="flex flex-col">
                <div className="text-[32px] text-[#1A202C]">Nissan GT - R</div>
                <div className="flex items-center gap-[2px]">
                  <div className="flex">
                    <LiaStarSolid className="text-[#FBAD39]" />
                    <LiaStarSolid className="text-[#FBAD39]" />
                    <LiaStarSolid className="text-[#FBAD39]" />
                    <LiaStarSolid className="text-[#FBAD39]" />
                    <RiStarSLine />
                  </div>
                  <p className="text-[14px] text-[#596780]">440+ Reviewer</p>
                </div>
              </div>
              <div className="p-[12px] pr-[20px]">
                <Image src={heart} alt="" />
              </div>
            </div>

            {/* Car Description */}
            <div className="leading-[30px] pl-[10px] mt-[15px] mb-[20px]">
              NISMO has become the embodiment of Nissan&apos;s outstanding performance, inspired by the most unforgiving proving ground, the &quot;race track&quot;.
            </div>

            {/* Car Features */}
            <div className="flex flex-col p-[10px] gap-[12px] lg:mb-[70px] mb-[50px]">
              <div className="flex gap-[20px]">
                <div className="flex justify-between lg:w-[200px] w-[100%] lg:flex-row flex-col">
                  <p className="text-[#90A3BF]">Type Car</p>
                  <p className="text-[#596780] font-bold">Sport</p>
                </div>
                <div className="flex justify-between lg:w-[200px] w-[100%] lg:flex-row flex-col">
                  <p className="text-[#90A3BF]">Capacity</p>
                  <p className="text-[#596780] font-bold">2 Person</p>
                </div>
              </div>
              <div className="flex gap-[20px]">
                <div className="flex justify-between lg:w-[200px] w-[100%] lg:flex-row flex-col">
                  <p className="text-[#90A3BF]">Steering</p>
                  <p className="text-[#596780] font-bold">Manual</p>
                </div>
                <div className="flex justify-between lg:w-[200px] w-[100%] lg:flex-row flex-col">
                  <p className="text-[#90A3BF]">Gasoline</p>
                  <p className="text-[#596780] font-bold">70L</p>
                </div>
              </div>
            </div>

            {/* Price and Rent Now Button */}
            <div className="flex justify-between items-center lg:flex-row flex-col lg:gap-[0px] gap-[8px]">
              <div className="flex flex-col">
                <div className="font-bold text-[28px] text-black">
                  $80.00/ <span className="text-[#90A3BF] text-[16px]">days</span>
                </div>
                <div className="text-[#90A3BF] text-[16px] line-through">$100.00</div>
              </div>
              <div className="bg-[#3563E9] text-white text-center pt-[18px] w-[140px] h-[56px] rounded-[4px]">
                <Link href={'/Payment-Method'}>Rent Now</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div>
          <ReviewSection />
        </div>

        {/* Related Cars */}
        <div>
          <Cards />
        </div>
      </div>
    </div>
  );
}
