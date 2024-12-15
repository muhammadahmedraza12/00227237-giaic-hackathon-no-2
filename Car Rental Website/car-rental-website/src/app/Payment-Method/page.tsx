import Image from "next/image";
import mark from "../images/mark.png";
import visa from "../images/Visa.png";
import paypal from "../images/PayPal.png";
import coin from "../images/Bitcoin.png";
import safe from "../images/ic-security-safety.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import { LiaStarSolid } from "react-icons/lia";
import { RiStarSLine } from "react-icons/ri";
import one from "../images/View 1.png";
import Link from "next/link";
export default function PaymentMethod(){
    return(
        <div className="w-[100vw] flex lg:flex-row flex-col bg-[#F6F7F9] gap-[20px] lg:p-[20px] p-[4px]">
            <div className="lg:w-[852px] w-[100vw] bg-[#F6F7F9] flex flex-col gap-[25px]">
                {/* Billing Info */}
                <div className="flex flex-col p-[20px] gap-[20px] bg-white rounded-[10px]">
                <div className="flex flex-row justify-between items-end">
                    <div className="flex flex-col gap-[8px]">
                        <p className="text-[#1A202C] text-[20px] font-bold">Billing Info</p>
                        <p className="text-[#90A3BF] text-[14px]">Please enter your billing info</p>
                    </div>
                    <div className="text-[#90A3BF] text-[14px]">Step 1 of 4</div>
                </div>
                <div className="flex lg:flex-row flex-col w-[100%] lg:gap-[4%]">
                    <div className="lg:w-[48%] w-[90%] gap-[12px] flex flex-col">
                        <div className="flex flex-col gap-[10px]">
                            <p className="text-[16px] text-[#1A202C] font-bold ml-[4px]">Name</p>
                            <div className="bg-[#F6F7F9] rounded-[10px] pl-[15px] text-[#90A3BF] text-[14px] lg:w-[386px] w-[80vw] h-[56px] pt-[15px]">Your Name</div>
                        </div>
                        <div className="flex flex-col gap-[10px]">
                            <p className="text-[16px] text-[#1A202C] font-bold ml-[4px]">Address</p>
                            <div className="bg-[#F6F7F9] rounded-[10px] pl-[15px] text-[#90A3BF] text-[14px] lg:w-[386px] w-[80vw] h-[56px] pt-[15px]">Address</div>
                        </div>
                    </div>
                    <div className="lg:w-[48%] w-[90%] gap-[12px] flex flex-col">
                    <div className="flex flex-col gap-[10px]">
                            <p className="text-[16px] text-[#1A202C] font-bold ml-[4px]">Phone Number</p>
                            <div className="bg-[#F6F7F9] rounded-[10px] pl-[15px] text-[#90A3BF] text-[14px] lg:w-[386px] w-[80vw] h-[56px] pt-[15px]">Phone Number</div>
                        </div>
                        <div className="flex flex-col gap-[10px]">
                            <p className="text-[16px] text-[#1A202C] font-bold ml-[4px]">Town / City</p>
                            <div className="bg-[#F6F7F9] rounded-[10px] pl-[15px] text-[#90A3BF] text-[14px] lg:w-[386px] w-[80vw] h-[56px] pt-[15px]">Town / City</div>
                        </div>
                    </div>
                </div>
                </div>
                {/* Rental Info */}
                <div className="flex flex-col p-[20px] gap-[20px] bg-white rounded-[10px]">
                <div className="flex flex-row justify-between items-end">
                    <div className="flex flex-col gap-[8px]">
                        <p className="text-[#1A202C] text-[20px] font-bold">Rental Info</p>
                        <p className="text-[#90A3BF] text-[14px]">Please select your rental date</p>
                    </div>
                    <div className="text-[#90A3BF] text-[14px]">Step 2 of 4</div>
                </div>
                <div className="flex flex-col gap-[20px]">
                    <div>
                        <div className="flex items-center gap-[4px]">
                            <Image src={mark} alt="" className="w-[16px] h-[16px]"/>
                            <p className="font-bold text-[20px]">Pick-Up</p>
                        </div>
                        <div className="flex flex-wrap gap-[10px] mt-[20px]">
                        <div className="flex flex-col gap-[10px]">
                            <p className="text-[16px] text-[#1A202C] font-bold ml-[4px]">Location</p>
                            <div className="bg-[#F6F7F9] rounded-[10px] pl-[15px] text-[#90A3BF] text-[14px] lg:w-[386px] w-[80vw] h-[56px] pt-[15px] flex justify-between pr-[20px]">
                                <p className="text-[14px] text-[#90A3BF]">Select your city</p>
                                <MdKeyboardArrowDown className="text-[22px]"/>
                            </div>
                        </div>
                        <div className="flex flex-col gap-[10px]">
                            <p className="text-[16px] text-[#1A202C] font-bold ml-[4px]">Time</p>
                            <div className="bg-[#F6F7F9] rounded-[10px] pl-[15px] text-[#90A3BF] text-[14px] lg:w-[386px] w-[80vw] h-[56px] pt-[15px] flex justify-between pr-[20px]">
                            <p className="text-[14px] text-[#90A3BF]">Select your time</p>
                            <MdKeyboardArrowDown className="text-[22px]"/>
                            </div>
                        </div>
                        <div className="flex flex-col gap-[10px]">
                            <p className="text-[16px] text-[#1A202C] font-bold ml-[4px]">Date</p>
                            <div className="bg-[#F6F7F9] rounded-[10px] pl-[15px] text-[#90A3BF] text-[14px] lg:w-[386px] w-[80vw] h-[56px] pt-[15px] flex justify-between pr-[20px]">
                            <p className="text-[14px] text-[#90A3BF]">Select your date</p>
                            <MdKeyboardArrowDown className="text-[22px]"/>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center gap-[4px]">
                            <Image src={mark} alt="" className="w-[16px] h-[16px]"/>
                            <p className="font-bold text-[20px]">Drop-Off</p>
                        </div>
                        <div className="flex flex-wrap gap-[10px] mt-[20px]">
                        <div className="flex flex-col gap-[10px]">
                            <p className="text-[16px] text-[#1A202C] font-bold ml-[4px]">Location</p>
                            <div className="bg-[#F6F7F9] rounded-[10px] pl-[15px] text-[#90A3BF] text-[14px] lg:w-[386px] w-[80vw] h-[56px] pt-[15px] flex justify-between pr-[20px]">
                                <p className="text-[14px] text-[#90A3BF]">Select your city</p>
                                <MdKeyboardArrowDown className="text-[22px]"/>
                            </div>
                        </div>
                        <div className="flex flex-col gap-[10px]">
                            <p className="text-[16px] text-[#1A202C] font-bold ml-[4px]">Time</p>
                            <div className="bg-[#F6F7F9] rounded-[10px] pl-[15px] text-[#90A3BF] text-[14px] lg:w-[386px] w-[80vw] h-[56px] pt-[15px] flex justify-between pr-[20px]">
                            <p className="text-[14px] text-[#90A3BF]">Select your time</p>
                            <MdKeyboardArrowDown className="text-[22px]"/>
                            </div>
                        </div>
                        <div className="flex flex-col gap-[10px]">
                            <p className="text-[16px] text-[#1A202C] font-bold ml-[4px]">Date</p>
                            <div className="bg-[#F6F7F9] rounded-[10px] pl-[15px] text-[#90A3BF] text-[14px] lg:w-[386px] w-[80vw] h-[56px] pt-[15px] flex justify-between pr-[20px]">
                            <p className="text-[14px] text-[#90A3BF]">Select your date</p>
                            <MdKeyboardArrowDown className="text-[22px]"/>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                </div>
                {/* Payment Method */}
                <div className="flex flex-col p-[20px] gap-[20px] bg-white rounded-[10px]">
                <div className="flex flex-row justify-between items-end">
                    <div className="flex flex-col gap-[8px]">
                        <p className="text-[#1A202C] text-[20px] font-bold">Payment Method</p>
                        <p className="text-[#90A3BF] text-[14px]">Please enter your payment method</p>
                    </div>
                    <div className="text-[#90A3BF] text-[14px]">Step 3 of 4</div>
                </div>
                <div className="flex flex-col gap-[20px]">
                    <div className="bg-[#F6F7F9] rounded-[10px] p-[10px]">
                        <div className="flex justify-between items-center">
                        <div className="flex items-center gap-[4px]">
                            <Image src={mark} alt="" className="w-[16px] h-[16px]"/>
                            <p className="font-bold text-[20px]">Credit Card</p>
                        </div>
                        <Image src={visa} alt="" className="w-[92px] h-[20px]"/>
                        </div>
                        <div className="flex flex-wrap gap-[10px] mt-[20px]">
                        <div className="flex flex-col gap-[10px]">
                            <p className="text-[16px] text-[#1A202C] font-bold ml-[4px]">Card Number</p>
                            <div className="bg-white rounded-[10px] pl-[15px] text-[#90A3BF] text-[14px] lg:w-[375px] w-[80vw] h-[56px] pt-[15px] flex justify-between pr-[20px]">
                                <p className="text-[14px] text-[#90A3BF]">Cardnumber</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-[10px]">
                            <p className="text-[16px] text-[#1A202C] font-bold ml-[4px]">Card Holder</p>
                            <div className="bg-white rounded-[10px] pl-[15px] text-[#90A3BF] text-[14px] lg:w-[375px] w-[80vw] h-[56px] pt-[15px] flex justify-between pr-[20px]">
                            <p className="text-[14px] text-[#90A3BF]">Cardholder</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-[10px]">
                            <p className="text-[16px] text-[#1A202C] font-bold ml-[4px]">Expration Date</p>
                            <div className="bg-white rounded-[10px] pl-[15px] text-[#90A3BF] text-[14px] lg:w-[375px] w-[80vw] h-[56px] pt-[15px] flex justify-between pr-[20px]">
                            <p className="text-[14px] text-[#90A3BF]">DD / MM / YY</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-[10px]">
                            <p className="text-[16px] text-[#1A202C] font-bold ml-[4px]">CVC</p>
                            <div className="bg-white rounded-[10px] pl-[15px] text-[#90A3BF] text-[14px] lg:w-[375px] w-[80vw] h-[56px] pt-[15px] flex justify-between pr-[20px]">
                            <p className="text-[14px] text-[#90A3BF]">CVC</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="flex justify-between mt-[20px] rounded-[10px] bg-[#F6F7F9] lg:w-[804px] w-[90vw] h-[56px] items-center p-[20px]">
                        <div className="flex items-center gap-[4px]">
                        <div className="w-[16px] h-[16px] bg-white border-[1px] rounded-full flex justify-center items-center">
                        <input type="radio"/>
                        </div>
                        <p className="font-bold lg:text-[20px] text-[16px]">PayPal</p>
                        </div>
                        <Image src={paypal} alt="" className="lg:w-[92px] lg:h-[20px] w-[80px] h-[18px]"/>
                    </div>
                    <div className="flex justify-between mt-[10px] rounded-[10px] bg-[#F6F7F9] lg:w-[804px] w-[90vw] h-[56px] items-center p-[20px]">
                        <div className="flex items-center gap-[4px]">
                            <div className="w-[16px] h-[16px] bg-white border-[1px] rounded-full flex justify-center items-center">
                                <input type="radio"/>
                            </div>
                            <p className="font-bold lg:text-[20px] text-[16px]">BitCoin</p>
                        </div>
                        <Image src={coin} alt="" className="lg:w-[92px] lg:h-[20px] w-[80px] h-[18px]"/>
                    </div>
                </div>
                </div>
                {/* Confirmation */}
                <div className="flex flex-col p-[20px] gap-[20px] bg-white rounded-[10px]">
                <div className="flex flex-row justify-between items-end">
                    <div className="flex flex-col gap-[8px]">
                        <p className="text-[#1A202C] text-[20px] font-bold">Confirmation</p>
                        <p className="text-[#90A3BF] text-[14px]">We are getting to the end. Just few clicks and your rental is ready!</p>
                    </div>
                    <div className="text-[#90A3BF] text-[14px]">Step 4 of 4</div>
                </div>
                <div className="flex justify-between mt-[20px] rounded-[10px] bg-[#F6F7F9] lg:w-[804px] w-[90vw] h-[56px] items-center p-[20px]">
                <div className="flex items-center gap-[6px]">
                            <div className="w-[16px] h-[16px] bg-white border-[1px] flex justify-center items-center">
                            <input type="checkbox"/>
                            </div>
                            <p className="font-bold lg:text-[14px] text-[12px]">I agree with sending an Marketing and newsletter emails. No spam, promissed!</p>
                        </div>
                </div>
                <div className="flex justify-between mt-[10px] rounded-[10px] bg-[#F6F7F9] lg:w-[804px] w-[90vw] h-[56px] items-center p-[20px]">
                <div className="flex items-center gap-[6px]">
                            <div className="w-[16px] h-[16px] bg-white border-[1px] flex justify-center items-center">
                                <input type="checkbox"/>
                            </div>
                            <p className="font-bold lg:text-[14px] text-[12px]">I agree with sending an Marketing and newsletter emails. No spam, promissed!</p>
                        </div>
                </div>
                <div className="text-white bg-[#3563E9] pl-[40px] rounded-[10px] pt-[10px] w-[156px] h-[44px]">
                   <Link href={'/'}> Rent Now</Link>
                </div>
                <div className="flex flex-col gap-[4px]">
                    <Image src={safe} alt=""/>
                    <p className="font-bold">All your data are safe</p>
                    <p className="text-[#90A3BF]">We are using the most advanced security to provide you the best experience ever.</p>
                </div>
                </div>
            </div>
            <div className="lg:w-[492px] w-[100vw] bg-white p-[20px]">
                <div className="flex flex-col gap-[25px] mb-[20px]">
                    <div className="flex flex-col gap-[8px]">
                        <p className="font-bold text-[20px]">Rental Summary</p>
                        <p className="text-[14px] text-[#90A3BF]">Prices may change depending on the length of the rental and the price of your rental car.</p>
                    </div>
                    <div className="flex gap-[10px]">
                        <Image src={one} alt=""/>
                    <div className="flex flex-col">
                                <div className="lg:text-[32px] text-[20px] text-[#1A202C] font-bold">Nissan GT - R</div>
                                <div className="flex items-center gap-[2px] lg:flex-row flex-col">
                                    <div className="flex">
                                    <LiaStarSolid  className="text-[#FBAD39]"/>
                                    <LiaStarSolid  className="text-[#FBAD39]"/>
                                    <LiaStarSolid  className="text-[#FBAD39]"/>
                                    <LiaStarSolid  className="text-[#FBAD39]"/>
                                    <RiStarSLine />
                                    </div>
                                    <p className="text-[14px] text-[#596780]">440+ Reviewer</p>
                                </div>
                            </div>
                    </div>
                </div>
                <hr />
                <div className="mt-[20px]  h-[560px]">
                    <div className="flex flex-col gap-[15px]">
                        <div className="flex justify-between">
                            <p className="text-[#90A3BF]">SubTotal</p>
                            <p className="text-[20px]">$80.00</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="text-[#90A3BF]">Tax</p>
                            <p className="text-[20px]">$0.00</p>
                        </div>
                    </div>
                    <div className="bg-[#F6F7F9] rounded-[10px] pl-[15px] text-[#90A3BF] mt-[20px] ml-[14px]
                    text-[14px] lg:w-[386px] w-[80vw] h-[56px] pt-[15px] flex justify-between pr-[20px]">
                                <p className="text-[14px] text-[#90A3BF]">Apply promo code</p>
                                <p className="font-bold text-[16px] text-black">Apply Now</p>
                            </div>
                    <div className="flex flex-row justify-between mt-[30px]">
                    <div className="flex flex-col gap-[8px]">
                        <p className="font-bold text-[20px]">Total Rental Price</p>
                        <p className="text-[14px] text-[#90A3BF]">Overall price and includes rental discount</p>
                    </div>
                        <div className="text-[32px] text-black font-bold">$80.00</div>
                    </div>
                </div>
            </div>
        </div>
    )
}