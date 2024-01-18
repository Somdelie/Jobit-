"use client";
import Card from "./Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; // Fix: Correct import path
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "./../front-office/home/NextArrow";
import PrevArrow from "./../front-office/home/PrevArrow";
import { useEffect, useState } from "react";

const data = [
  {
    img: "/meetup (1).png",
  },
  {
    img: "/meetup (2).png",
  },
  {
    img: "/meetup (2).png",
  },
  {
    img: "/meetup (4).jpg",
  },
  {
    img: "/meetup (2).jpg",
  },
  {
    img: "/photo-3.jpg",
  },
];

const MySlider = () => {
  const [progress, setProgress] = useState(0);
  const [slideToShow, setSlideToShow] = useState(4);

  const settings = {
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    afterChange: (current) => {
      setProgress((100 / (data?.length - slideToShow + 1)) * (current + 1));
      console.log(slideToShow);
    },
  };

  const setSlides = () => {
    if (window.innerWidth <= 1280 && window.innerWidth > 1000) {
      setSlideToShow(3);
    } else if (window.innerWidth <= 1000 && window.innerWidth > 650) {
      setSlideToShow(2);
    } else if (window.innerWidth <= 650) {
      setSlideToShow(1);
    }
  };

  useEffect(() => {
    setSlides();
    setProgress(1000 / (data.length - slideToShow + 1));
    window.addEventListener("resize", () => {
      setSlides();
    });
  }, [slideToShow]);

  return (
    <div className="text-gray-600 dark:text-gray-300 mt-2 relative">
      <Slider {...settings}>
        {data?.map((item, index) => (
          <Card img={item.img} key={index} />
        ))}
      </Slider>
      <div className="absolute bg-slate-300 h-[2px] w-[250px] right-1/3 -bottom-4">
        <div
          className="bg-neonGreen absolute h-[100%] transition-all"
          style={{
            width: `${progress}%`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default MySlider;
