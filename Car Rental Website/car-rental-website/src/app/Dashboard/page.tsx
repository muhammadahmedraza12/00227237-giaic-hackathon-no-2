import home from "../images/home.png";
import car from "../images/car-logo.png";
import chart from "../images/chart-logo.png";
import wallet from "../images/empty-wallet-change.png";
import inbox from "../images/message.png";
import calendar from "../images/calendar.png";
import settings from "../images/setting.png";
import info from "../images/info-circle.png";
import mode from "../images/briefcase.png";
import sun from "../images/Group 427320607.png";
import moon from "../images/Group 427320608.png";
import map from "../images/Maps.png";
import one from "../images/View 1.png";
import mark from "../images/mark.png";
import two from "../images/Chart.png";
import { PiDotsThreeOutlineLight } from "react-icons/pi";
import { GoDotFill } from "react-icons/go";
import Image from "next/image";
import { Popular } from "../Data/catalogue";
export default function Dashboard (){
    return(
        <div className="w-[100vw] bg-[#F6F7F9] p-[5px] flex lg:flex-row flex-col">
            <div className="bg-white lg:w-[286px] w-[100vw] flex flex-col p-[20px]">
                <div className="flex flex-col gap-[16px]">
                    <p className="text-[14px] text-[#94A7CB66]">M A I N  M E N U</p>
                    <div className="lg:w-[254px] w-[90vw] bg-[#3563E9] rounded-[10px] items-center pl-[8px] text-white flex gap-[10px] h-[56px]">
                    <Image src={home} alt=""/>
                        <p>Dashboard</p>
                    </div>
                    <div className="lg:w-[254px] w-[90vw] text-[#90A3BF] flex gap-[10px] h-[56px]  items-center pl-[8px]">
                        <Image src={car} alt=""/>
                        <p>Car Rent</p>
                    </div>
                    <div className="lg:w-[254px] w-[90vw] text-[#90A3BF] flex gap-[10px] h-[56px]  items-center pl-[8px]">
                        <Image src={chart} alt=""/>
                        <p>Insight</p>
                    </div>
                    <div className="lg:w-[254px] w-[90vw] text-[#90A3BF] flex gap-[10px] h-[56px]  items-center pl-[8px]">
                        <Image src={wallet} alt=""/>
                        <p>Reimburse</p>
                    </div>
                    <div className="lg:w-[254px] w-[90vw] text-[#90A3BF] flex gap-[10px] h-[56px]  items-center pl-[8px]">
                        <Image src={inbox} alt=""/>
                        <p>Inbox</p>
                    </div>
                    <div className="lg:w-[254px] w-[90vw] text-[#90A3BF] flex gap-[10px] h-[56px]  items-center pl-[8px]">
                        <Image src={calendar} alt=""/>
                        <p>Calender</p>
                    </div>
                </div>
                <div className="flex flex-col gap-[16px] lg:mt-[25px] mt-[10px]">
                <p className="text-[14px] text-[#94A7CB66]">P R E F E R E N C E S</p>
                <div className="lg:w-[254px] w-[90vw] text-[#90A3BF] flex gap-[10px] h-[56px]  items-center pl-[8px]">
                        <Image src={settings} alt=""/>
                        <p>Settings</p>
                    </div>
                    <div className="lg:w-[254px] w-[90vw] text-[#90A3BF] flex gap-[10px] h-[56px]  items-center pl-[8px]">
                        <Image src={info} alt=""/>
                        <p>Help & Center</p>
                    </div>
                    <div className="lg:w-[254px] w-[90vw] text-[#90A3BF] flex gap-[10px] h-[56px]  items-center pl-[8px]">
                        <Image src={mode} alt=""/>
                        <p>Dark Mode</p>
                        <div className="flex items-center gap-[4px] ml-[20px]"> 
                            <Image src={sun} alt=""/>
                            <div className="w-[28px] h-[28px] rounded-full border-[1px]"><Image src={moon} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white lg:w-[534px] w-[100vw] rounded-[10px] lg:ml-[20px]
             lg:mt-[20px] mt-[10px] flex flex-col gap-[20px] p-[15px]">
                <p className="text-[20px] text-black font-bold">Details Rental</p>
                <Image src={map} alt=""/>
                <div className="flex gap-[10px]">
                        <Image src={one} alt="" className="h-[80px] lg:w-[132px] w-[100px]"/>
                        <div className="flex flex-col lg:gap-[2px] gap-[14px]">
                                <div className="text-[24px] text-[#1A202C] font-bold">Nissan GT - R</div>
                                <div className="flex items-center justify-between">
                                    <p className="text-[14px] text-[#596780]">Sport</p>
                                    <p className="lg:hidden block text-[14px]">#9761</p>
                                </div>
                               </div>
                            <p className="text-[14px] lg:ml-[140px] mt-[8px] lg:block hidden">#9761</p>
                    </div>
                    <div className="lg:w-[100%] w-[90vw] lg:h-[132px] h-auto rounded-[10px] bg-white flex flex-col pt-[30px] gap-[15px] lg:pb-[0px] pb-[15px]">
                <div className="w-[92px] h-[20px] flex items-center gap-[4px]">
                        <Image src={mark} alt="" className="w-[16px] h-[16px]"/>
                        <p className="font-bold  text-[#1A202C]">Pick-Up</p>
                    </div>
                    <div className="lg:w-[486px] w-[90vw] lg:h-[48px] h-auto flex lg:gap-[23px] lg:flex-row flex-col">
                        <div className="flex flex-col">
                            <p className="pl-[4px] font-bold  text-[#1A202C] lg:w-auto w-[140px]">Locations</p>
                            <select name="location" id="" className="text-[#90A3BF] lg:pl-[0px] pl-[6px] lg:pr-[0px] pr-[10px] text-[14px] lg:w-auto w-[90vw] lg:h-auto h-[56px] lg:bg-transparent bg-[#F6F7F9] rounded-[10px] lg:pb-[0px] pb-[4px]">
                                <option value="city">Kota Semarang</option>
                            </select>
                        </div>
                        <div className="lg:w-[1px] w-[120px] lg:h-[44px] h-[1px] bg-[#90A3BF] lg:block hidden"></div>
                        <div className="flex flex-col">
                            <p className="pl-[4px] font-bold  text-[#1A202C] lg:w-auto] w-[140px]">Date</p>
                            <select name="date" id="" className="text-[#90A3BF] lg:pl-[0px] pl-[6px] lg:pr-[0px] pr-[10px] text-[14px] lg:w-auto w-[90vw] lg:h-auto h-[56px] lg:bg-transparent bg-[#F6F7F9] rounded-[10px] lg:pb-[0px] pb-[4px]">
                                <option value="date">20 July 2022</option>
                            </select>
                        </div>
                        <div className="lg:w-[1px] w-[120px] lg:h-[44px] h-[1px] bg-[#90A3BF] lg:block hidden"></div>
                        <div className="flex flex-col">
                            <p className="pl-[4px] font-bold  text-[#1A202C] lg:w-auto w-[140px]">Time</p>
                            <select name="time" id="" className="text-[#90A3BF] lg:pl-[0px] pl-[6px] lg:pr-[0px] pr-[10px] text-[14px] lg:w-auto w-[90vw] lg:h-auto h-[56px] lg:bg-transparent bg-[#F6F7F9] rounded-[10px] lg:pb-[0px] pb-[4px]">
                                <option value="time">07.00</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="lg:w-[100%] w-[90vw] lg:h-[132px] h-auto rounded-[10px] bg-white flex flex-col gap-[15px] lg:pb-[0px] pb-[15px]">
                <div className="w-[92px] h-[20px] flex items-center gap-[4px]">
                        <Image src={mark} alt="" className="w-[16px] h-[16px]"/>
                        <p className="font-bold  text-[#1A202C]">Drop-off</p>
                    </div>
                    <div className="lg:w-[486px] w-[90vw] lg:h-[48px] h-auto flex lg:gap-[23px] lg:flex-row flex-col">
                        <div className="flex flex-col">
                            <p className="pl-[4px] font-bold  text-[#1A202C] lg:w-auto w-[140px]">Locations</p>
                            <select name="location" id="" className="text-[#90A3BF] lg:pl-[0px] pl-[6px] lg:pr-[0px] pr-[10px] text-[14px] lg:w-auto w-[90vw] lg:h-auto h-[56px] lg:bg-transparent bg-[#F6F7F9] rounded-[10px] lg:pb-[0px] pb-[4px]">
                                <option value="city">Kota Semarang</option>
                            </select>
                        </div>
                        <div className="lg:w-[1px] w-[120px] lg:h-[44px] h-[1px] bg-[#90A3BF] lg:block hidden"></div>
                        <div className="flex flex-col">
                            <p className="pl-[4px] font-bold  text-[#1A202C] lg:w-auto] w-[140px]">Date</p>
                            <select name="date" id="" className="text-[#90A3BF] lg:pl-[0px] pl-[6px] lg:pr-[0px] pr-[10px] text-[14px] lg:w-auto w-[90vw] lg:h-auto h-[56px] lg:bg-transparent bg-[#F6F7F9] rounded-[10px] lg:pb-[0px] pb-[4px]">
                                <option value="date">21 July 2022</option>
                            </select>
                        </div>
                        <div className="lg:w-[1px] w-[120px] lg:h-[44px] h-[1px] bg-[#90A3BF] lg:block hidden"></div>
                        <div className="flex flex-col">
                            <p className="pl-[4px] font-bold  text-[#1A202C] lg:w-auto w-[140px]">Time</p>
                            <select name="time" id="" className="text-[#90A3BF] lg:pl-[0px] pl-[6px] lg:pr-[0px] pr-[10px] text-[14px] lg:w-auto w-[90vw] lg:h-auto h-[56px] lg:bg-transparent bg-[#F6F7F9] rounded-[10px] lg:pb-[0px] pb-[4px]">
                                <option value="time">01.00</option>
                            </select>
                        </div>
                    </div>
                    <hr />
                </div>
                <div className="flex lg:flex-row flex-col items-center justify-between">
                    <div className="flex flex-col gap-[8px]">
                        <p className="font-bold text-[20px]">Total Rental Price</p>
                        <p className="text-[14px] text-[#90A3BF]">Overall price and includes rental discount</p>
                    </div>
                        <div className="text-[32px] text-black font-bold">$80.00</div>
                    </div>
            </div>
            <div className="bg-transparent flex flex-col">
                  <div className="bg-white lg:w-[505px] w-[100vw] p-[15px] rounded-[10px] lg:ml-[20px] lg:mt-[20px] mt-[10px]">
                    <div className="flex justify-between items-center">
                        <p className="text-[20px] font-bold">Top 5 Car Rental </p>
                        <PiDotsThreeOutlineLight className="text-[22px]"/>
                    </div>
                    <div className="flex lg:flex-row flex-col mt-[20px] gap-[20px] items-center">
                        <div className="relative">
                            <Image src={two} alt=""/>
                            <div className="absolute inset-0 flex items-center justify-center flex-col gap-[6px]">
                                <p className=" text-black font-bold text-[24px]">72,030</p>
                                <p className="text-[14px] text-[14px]">Rental Car</p>
                            </div>
                        </div>
                        <div className="flex flex-row justify-between lg:w-[232px] w-[90vw]">
                            <div className="flex flex-col gap-[15px]">
                                <div className="flex gap-[4px]">
                                    <GoDotFill className="text-[20px] text-[#0D3559]"/>
                                    <p className="text-[14px] text-[#90A3BF]">Sport Car</p>
                                </div>
                                <div className="flex gap-[4px]">
                                    <GoDotFill className="text-[20px] text-[#175D9C]"/>
                                    <p className="text-[14px] text-[#90A3BF]">SUV</p>
                                </div>
                                <div className="flex gap-[4px]">
                                    <GoDotFill className="text-[20px] text-[#2185DE]"/>
                                    <p className="text-[14px] text-[#90A3BF]">Coupe</p>
                                </div>
                                <div className="flex gap-[4px]">
                                    <GoDotFill className="text-[20px] text-[#63A9E8]"/>
                                    <p className="text-[14px] text-[#90A3BF]">Hatchback</p>
                                </div>
                                <div className="flex gap-[4px]">
                                    <GoDotFill className="text-[20px] text-[#A6CEF2]"/>
                                    <p className="text-[14px] text-[#90A3BF]">MPV</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-[15px]">
                                <p className="text-[14px] text-black">17,439</p>
                                <p className="text-[14px] text-black">9,478</p>
                                <p className="text-[14px] text-black">18,197</p>
                                <p className="text-[14px] text-black">12,510</p>
                                <p className="text-[14px] text-black">14,406</p>
                            </div>
                        </div>
                    </div>
                  </div>
                  <div className="bg-white lg:w-[505px] p-[15px] w-[100vw] rounded-[10px] flex flex-col
                   lg:ml-[20px] lg:mt-[20px] mt-[10px]">
                    <div className="flex justify-between w-[100vw] lg:w-[100%] items-center mb-[40px]">
                        <p className="text-[20px] font-bold pt-[6px] pl-[4px]">Recent Transaction</p>
                        <p className="text-blue-500 text-[14px] lg:pr-[0px] pr-[25px]">View All</p>
                    </div>
                    {
                        Popular.map((e,index)=>(
                            <div key={index} className="h-[101px] w-[100%] flex justify-between items-center border-b-[1px] border-[#C3D4E966]">
                            <div className="flex gap-[14px]">
                                <div className="lg:w-[132px] w-[76px]">
                                    <Image src={e.image} alt=""/>
                                </div>
                                <div className="flex flex-col gap-[5px]">
                                    <p className="lg:text-[20px] text-[14px] font-bold text-black">{e.name}</p>
                                    <p className="text-[14px] text-[#90A3BF]">{e.title}</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-[5px]">
                                 <p className="text-[14px] text-[#90A3BF] text-right w-[90%]">17 May</p>
                                 <p className="lg:text-[20px] text-[14px] font-bold text-black">{e.dPrice}</p>
                            </div>
                        </div>    
                        ))
                    }
                  </div>
            </div>
        </div>
    )
}
