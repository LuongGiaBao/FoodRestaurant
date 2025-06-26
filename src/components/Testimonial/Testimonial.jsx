import React from "react";
import { Carousel, Card, Avatar } from "antd";
import img1 from "../../assets/img1.png";

const testimonials = [
  {
    id: 1,
    name: "Smith",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    avatar: "https://i.imgur.com/UYiroysl.jpg", // thay ảnh bạn muốn
  },
  {
    id: 2,
    name: "Samuel",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    avatar: "https://i.imgur.com/L0C2VQ2.jpg",
  },
  {
    id: 3,
    name: "Smith",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    avatar: "https://i.imgur.com/UYiroysl.jpg", // thay ảnh bạn muốn
  },
];

const Testimonial = () => {
  return (
    <>
      <div className="py-10">
        <div className="container">
          <div className="text-center mb-10 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Testimonial
            </p>
            <h1 className="text-3xl font-bold">Testimonial</h1>
            <p className="text-xs text-gray-400">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
              nesciunt explicabo a! Laborum delectus aliquam labore, earum rerum
              quam! Nulla?
            </p>
          </div>
          <div className=" h-[234px]  ">
            <Carousel
              autoplay
              className="grid grid-cols-1 sm:max-w-[600px]  h-[223px]  bg-primary/10 mx-auto"
              dotStyle={{
                backgroundColor: "white",
                border: "1px solid #ccc",
              }}
              dotActiveStyle={{
                backgroundColor: "white",
                border: "2px solid #333",
              }}
            >
              {testimonials.map(({ id, name, text, avatar }) => {
                return (
                  <div key={id}>
                    <img
                      src={avatar}
                      alt=""
                      className="w-[101px] h-[101px] mx-auto rounded-full gap-6 "
                    />
                    <p className="text-gray-500 text-sm text-center">{text}</p>
                    <h1 className="text-xl font-bold text-center">{name}</h1>
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
