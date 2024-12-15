import React from "react";
import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";

import userOnePic from "../images/Profill.png";
import userTwoPic from "../images/Profill (1).png";

const reviews = [
  {
    name: "Alex Stanton",
    title: "CEO at Bukalapak",
    date: "21 July 2022",
    rating: 5,
    review:
      "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
    image: userOnePic
  },
  {
    name: "Skylar Dias",
    title: "CEO at Amazon",
    date: "20 July 2022",
    rating: 4,
    review:
      "We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
    image: userTwoPic
  }
];

const ReviewSection: React.FC = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md lg:w-[1040px] w-[90vw] mt-[20px] ml-[2px]">
      {/* Reviews Section Header */}
      <div className="mb-4 flex gap-[10px]">
        <h2 className="text-lg font-semibold">Reviews</h2>
        <div className="flex text-center pt-[2px] bg-[#3563E9] w-[44px] h-[28px] text-white pl-[15px] rounded-[4px]">
          13
        </div>
      </div>

      {/* Render Reviews */}
      {reviews.map((review, index) => (
        <div
          key={index}
          className="flex items-start gap-4 border-b border-gray-200 pb-4 mb-4"
        >
          {/* User Profile Image */}
          <Image
            src={review.image}
            alt={`${review.name}'s profile`}
            className="w-12 h-12 rounded-full"
          />

          {/* Review Content */}
          <div>
            {/* Name, Title, Date, Rating */}
            <div className="w-[100%] flex justify-between">
              <div className="flex flex-col gap-[4px]">
                <h3 className="text-md font-semibold text-gray-800">
                  {review.name}
                </h3>
                <p className="text-sm text-gray-500">{review.title}</p>
              </div>
              <div className="flex gap-[2px] justify-end mt-2 flex-col items-end">
                <span className="text-sm text-gray-400 text-right mr-[4px]">
                  {review.date}
                </span>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }, (_, i) => (
                    <span
                      key={i}
                      className={`h-4 w-4 ${
                        i < review.rating ? "text-yellow-400" : "text-gray-300"
                      }`}
                    >
                      &#9733;
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Review Text */}
            <p className="text-sm text-gray-600 mt-2">{review.review}</p>
          </div>
        </div>
      ))}

      {/* Show All Button */}
      <button className="flex items-center justify-center w-full text-[#90A3BF] mt-4 hover:underline">
        Show All <span className="ml-2"><MdKeyboardArrowDown /></span>
      </button>
    </div>
  );
};

export default ReviewSection;
