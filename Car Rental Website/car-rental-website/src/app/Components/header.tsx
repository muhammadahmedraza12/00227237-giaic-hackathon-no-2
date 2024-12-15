'use client';
import Image from "next/image";
import logo from "../images/Logo.png";
import profile from "../images/Profil.png";
import { IoHeart } from "react-icons/io5";
import { BiSolidBell } from "react-icons/bi";
import { RiSettings3Fill } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import filter from "../images/filter.png";
import Link from "next/link";

export default function Header() {
  // Header container classes
  const headerContainerClasses = "w-[100vw] lg:h-[124px] h-[150px] flex items-center justify-between lg:flex-row flex-col-reverse mb-[10px]";

  // Logo container classes
  const logoContainerClasses = "lg:w-[148px] w-[108px] lg:h-[44px] h-[28px] lg:ml-[60px] ml-[8px] justify-start flex items-center lg:justify-center lg:mt-[0px] mt-[10px] lg:mb-[0px] mb-[10px]";

  // Search bar classes
  const searchBarContainerClasses = "h-[44px] lg:w-[492px] w-[90vw] lg:ml-[64px] flex items-center border-[#C3D4E966] border-[1px] rounded-[70px]";

  // Icon size classes
  const iconSizeClasses = "w-[24px] h-[24px]";

  // Profile and button container classes
  const profileAndButtonContainerClasses = "lg:w-[236px] w-[85vw] h-[100%] lg:justify-around justify-between flex items-center gap-[20px] lg:mr-[30px] lg:ml-[0px] ml-[100px] mr-[100px] lg:mt-[0px] mt-[20px]";

  const hiddenIconsContainerClasses = "hidden lg:flex gap-[20px] toggle";

  // Button icon circle classes
  const buttonCircleClasses = "lg:w-[44px] w-[24px] lg:h-[44px] h-[24px] rounded-full border-[#C3D4E966] border-[1px] flex items-center justify-center";

  return (
    <div className={headerContainerClasses}>
      {/* Left side: Logo and Search */}
      <div className="flex lg:items-center lg:justify-between h-[100%] lg:flex-row flex-col">
        
        {/* Logo */}
        <div className={logoContainerClasses}>
          <Link href={'/'}><Image src={logo} alt="logo" /></Link>
        </div>

        {/* Search bar */}
        <div className={searchBarContainerClasses}>
          <div className="w-[24px] h-[24px] text-[22px] ml-[10px]"><CiSearch /></div>
          <div className="lg:w-[149px] w-[65vw] h-[20px] text-[12px] lg:ml-[15px] ml-[10px]">
            <input type="text" placeholder="Search something here" className="outline-[0px]" />
          </div>
          <div className="w-[24px] h-[24px] lg:ml-[250px]"><Image src={filter} alt="" /></div>
        </div>
      </div>

      <div className={profileAndButtonContainerClasses}>
        <div className={hiddenIconsContainerClasses}>
          {/* Heart button */}
          <div className={buttonCircleClasses}>
            <IoHeart className="lg:text-[24px] text-[18px] text-[#596780]" />
          </div>
          
          {/* Notification button with red dot */}
          <div className={buttonCircleClasses + " relative"}>
            <BiSolidBell className="lg:text-[24px] text-[18px] text-[#596780]" />
            <div className="lg:w-[10px] w-[5px] lg:h-[10px] h-[5px] bg-red-500 rounded-full absolute top-[2px] right-[2px]" />
          </div>

          {/* Settings button */}
          <div className={buttonCircleClasses}>
            <RiSettings3Fill className="lg:text-[24px] text-[18px] text-[#596780]" />
          </div>
        </div>

        {/* Profile image */}
        <div className="lg:w-[44px] w-[24px] lg:h-[44px] h-[24px] rounded-full">
          <Link href={'/Dashboard'}><Image src={profile} alt="Profile" /></Link>
        </div>
      </div>
    </div>
  );
}
