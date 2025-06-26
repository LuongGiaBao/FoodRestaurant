import React from "react";
import img1 from "../../assets/app_store.png";
import img2 from "../../assets/play_store.png";
import img3 from "../../assets/mobile_bike.gif";
const AppSection = () => {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-800 py-14">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4 ">
            <div className="space-y-6 max-w-full mx-auto ">
              {/* header section */}
              <h1 className="text-2xl text-center sm:text-left sm:text-4xl font-semibold dark:text-gray-400 text-gray-700">
                Foodly is Available for Android and IOS
              </h1>
              {/* app icon section */}
              <div className="flex flex-wrap justify-center sm:justify-start items-center">
                <a href="#">
                  <img
                    src={img1}
                    alt="app_store"
                    className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                  />
                </a>
                <a href="">
                  <img
                    src={img2}
                    alt="play_store"
                    className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                  />
                </a>
              </div>
            </div>
            {/* mobile bike section */}
            <div>
              <img src={img3} alt="" className="mx-auto max-w-[300px]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppSection;
