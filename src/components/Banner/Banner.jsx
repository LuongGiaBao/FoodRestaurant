import React from "react";
import Food1 from "../../assets/img1.png";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
const Banner = () => {
  return (
    <>
      <div className="min-h-[550px] dark:bg-gray-800">
        <div className="">
          <div className="container">
            {/* image section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <img
                src={Food1}
                alt=""
                className="max-w-[430px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,0.1)]"
              />
              {/* Text-content section */}
              <div className="flex flex-col justify-center gap-6 sm:pt-0">
                <h1 className="text-3xl sm:text-4xl font-bold">
                  Lorem ipsum dolor
                </h1>
                <p className="text-sm text-gray-500 tracking-wide leading-5">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Eaque reiciendis inventore iste ratione ex alias quis magni at
                  optio
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae ab sed, exercitationem minima aliquid eligendi
                  distinctio? Fugit repudiandae numquam hic quo recusandae.
                  Excepturi totam ad nam velit quasi quidem aspernatur.
                </p>
                {/* icon section */}
                <div className="flex gap-6">
                  <div>
                    <GrSecure className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-violet-100 dark:bg-violet-400" />
                  </div>
                  <div>
                    <IoFastFood className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-violet-100 dark:bg-violet-400" />
                  </div>
                  <div>
                    <GiFoodTruck className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-violet-100 dark:bg-violet-400" />
                  </div>
                </div>
                {/* button */}
                <div>
                  <button className="rounded-full bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 hover:scale-105 duration-200">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
