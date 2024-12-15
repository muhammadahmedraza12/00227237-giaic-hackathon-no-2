import HeroSec from "./Components/hero-sec";
import Catalogue from "./Catalogue/page";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <HeroSec/>
      <Catalogue/>
      <div className="w-[100vw] h-[100px] flex justify-center items-center bg-[#F6F7F9]">
        <div className="text-white bg-[#3563E9] rounded-[10px] pl-[20px] pt-[10px] w-[156px] h-[44px]">
          <Link href={'/detail-page'}>Show more car</Link>
        </div>
      </div>
    </div>
  );
}
