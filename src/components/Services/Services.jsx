import React from "react";
import Img2 from "../../assets/img1.png";
const ServicesData = [
  {
    id: 1,
    img: Img2,
    name: "Bao",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas sint ex quod quos neque reprehenderit nihil suscipit iure vero deserunt.",
  },
  {
    id: 2,
    img: Img2,
    name: "Bao",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas sint ex quod quos neque reprehenderit nihil suscipit iure vero deserunt.",
  },
  {
    id: 3,
    img: Img2,
    name: "Bao",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas sint ex quod quos neque reprehenderit nihil suscipit iure vero deserunt.",
  },
];

const Services = () => {
  return (
    <>
      <div className="py-10 dark:bg-gray-800 dark:text-white">
        <div className="container">
          {/* Header section */}
          <div className=" text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Our Services
            </p>
            <h1 className="text-3xl font-bold">Services</h1>
            <p className="text-xs text-gray-400">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
              nesciunt explicabo a! Laborum delectus aliquam labore, earum rerum
              quam! Nulla?
            </p>
          </div>
          {/* Card section */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16  place-items-center dark:bg-gray-800">
              {ServicesData.map(({ id, img, name, description }) => {
                return (
                  <div
                    key={id}
                    className="max-w-[300px] group rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary hover:text-white duration-300 p-4 shadow-xl"
                  >
                    <div className="h-[100px]">
                      <img
                        src={img}
                        alt=""
                        className="max-w-[200px] mx-auto block transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300"
                      />
                    </div>
                    <div className="text-center p-4 ">
                      <h1 className="text-xl font-bold">{name}</h1>
                      <p className="text-gray-500 text-sm line-clamp-2 group-hover:text-white duration-300">
                        {description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
