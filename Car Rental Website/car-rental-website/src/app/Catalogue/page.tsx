import Image from "next/image";
import gasIcon from "../images/gas-station.png";
import carIcon from "../images/manual.png";
import userIcon from "../images/profile-2user.png";
import { Popular } from "../Data/catalogue";
import { Recommendation } from "../Data/catalogue";
import Link from "next/link";

export default function Catalogue() {
    return (
        <div className="bg-[#F6F7F9] w-[100vw] lg:h-[1500px] h-[3460px]">
            {/* Popular Cars Section */}
            <div className="w-[100vw] lg:h-[452px] h-auto">
                <div className="flex flex-row justify-between items-center">
                    <p className="p-[40px] text-[#90A3BF] text-[16px]">Popular Car</p>
                    <p className="text-[14px] text-[#3563E9] pr-[20px]">View All</p>
                </div>
                <div className="flex justify-around lg:flex-row w-[100vw] flex-col lg:h-[388px] h-auto lg:gap-[0px] gap-[15px]">
                    {Popular.map((car, index) => (
                        <div key={index} className="bg-white lg:w-[304px] lg:m-[0px] m-[8px] lg:h-[388px] w-[96%] h-[240px] rounded-[10px] flex flex-col p-[15px] justify-evenly">
                            {/* Car Name and Icon */}
                            <div className="flex justify-between">
                                <div className="w-[128px] h-[48px] flex flex-col">
                                    <p className="text-black text-[20px] font-bold w-[128px]">{car.name}</p>
                                    <p className="text-[12px]">{car.title}</p>
                                </div>
                                <div>
                                    <Image src={car.icon} alt={car.name} />
                                </div>
                            </div>

                            {/* Car Image and Specifications */}
                            <div className="flex lg:flex-col flex-row items-center">
                                <div className="lg:mt-[45px] lg:mb-[45px]">
                                    <Link href={'/detail-page'}>
                                        <Image src={car.image} alt={car.name} />
                                    </Link>
                                </div>
                                <div className="flex lg:flex-row flex-col lg:gap-[16px] gap-[4px] lg:w-[256px] lg:h-[24px] w-[130px] h-[74px]">
                                    <div className="flex gap-[4px]">
                                        <div className="w-[24px] h-[24px]">
                                            <Image src={gasIcon} alt="Gas" />
                                        </div>
                                        <p className="text-[#90A3BF] text-[14px]">{car.gasoline}</p>
                                    </div>
                                    <div className="flex gap-[4px]">
                                        <div className="w-[24px] h-[24px]">
                                            <Image src={carIcon} alt="Car" />
                                        </div>
                                        <p className="text-[#90A3BF] text-[14px]">{car.car}</p>
                                    </div>
                                    <div className="flex gap-[4px]">
                                        <div className="w-[24px] h-[24px]">
                                            <Image src={userIcon} alt="User Capacity" />
                                        </div>
                                        <p className="text-[#90A3BF] text-[14px]">{car.capacity}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Price Section */}
                            <div className="flex flex-row w-[100%] justify-between">
                                <div className="flex w-[128px] h-[44px] flex-col">
                                    <div className="flex flex-row items-center">
                                        <div className="font-bold text-[22px] text-black">{car.dPrice}</div>
                                        <div className="text-[#90A3BF] text-[14px]">days</div>
                                    </div>
                                    <div className="line-through text-[14px] text-[#90A3BF]">{car.oPrice}</div>
                                </div>
                                <div className="w-[116px] h-[44px] bg-[#3563E9] text-white pt-[10px] pl-[20px] rounded-[4px]">
                                    <Link href={'/Payment-Method'}>Rent Now</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Recommended Cars Section */}
            <div className="w-[100vw] h-[452px]">
                <div className="flex flex-row justify-between mt-[50px] items-center">
                    <p className="p-[40px] text-[#90A3BF] text-[16px]">Recommendation Car</p>
                    <p className="text-[14px] text-[#3563E9] pr-[20px]">View All</p>
                </div>
                <div className="flex justify-evenly flex-wrap lg:h-[808px] h-auto gap-[15px]">
                    {Recommendation.map((car, index) => (
                        <div key={index} className="bg-white lg:w-[304px] lg:m-[0px] m-[8px] lg:h-[388px] w-[96%] h-[240px] rounded-[10px] flex flex-col p-[15px] justify-evenly">
                            {/* Car Name and Icon */}
                            <div className="flex justify-between">
                                <div className="w-[128px] h-[48px] flex flex-col">
                                    <p className="text-black text-[20px] font-bold w-[160px]">{car.name}</p>
                                    <p className="text-[12px]">{car.title}</p>
                                </div>
                                <div>
                                    <Image src={car.icon} alt={car.name} />
                                </div>
                            </div>

                            {/* Car Image and Specifications */}
                            <div className="flex lg:flex-col flex-row items-center">
                                <div className="lg:mt-[45px] lg:mb-[45px]">
                                    <Link href={'/detail-page'}>
                                        <Image src={car.image} alt={car.name} />
                                    </Link>
                                </div>
                                <div className="flex lg:flex-row flex-col lg:gap-[16px] gap-[4px] lg:w-[256px] lg:h-[24px] w-[130px] h-[74px]">
                                    <div className="flex gap-[4px]">
                                        <div className="w-[24px] h-[24px]">
                                            <Image src={gasIcon} alt="Gas" />
                                        </div>
                                        <p className="text-[#90A3BF] text-[14px]">{car.gasoline}</p>
                                    </div>
                                    <div className="flex gap-[4px]">
                                        <div className="w-[24px] h-[24px]">
                                            <Image src={carIcon} alt="Car" />
                                        </div>
                                        <p className="text-[#90A3BF] text-[14px]">{car.car}</p>
                                    </div>
                                    <div className="flex gap-[4px]">
                                        <div className="w-[24px] h-[24px]">
                                            <Image src={userIcon} alt="User Capacity" />
                                        </div>
                                        <p className="text-[#90A3BF] text-[14px]">{car.capacity}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Price Section */}
                            <div className="flex flex-row w-[100%] justify-between">
                                <div className="flex w-[128px] h-[44px] flex-col">
                                    <div className="flex flex-row items-center">
                                        <div className="font-bold text-[22px] text-black">{car.dPrice}</div>
                                        <div className="text-[#90A3BF] text-[14px]">days</div>
                                    </div>
                                    <div className="line-through text-[14px] text-[#90A3BF]">{car.oPrice}</div>
                                </div>
                                <div className="w-[116px] h-[44px] bg-[#3563E9] text-white pt-[10px] pl-[20px] rounded-[4px]">
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
