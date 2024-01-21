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
    window.addEventListener("resize", () => {
      setSlides();
    });
  }, [slideToShow]);

  return (
    <div className="text-gray-600 dark:text-gray-300 mt-4 relative">
      <Slider {...settings}>
        {data?.map((item, index) => (
          <Card img={item.img} key={index} />
        ))}
      </Slider>
    </div>
  );
};

export default MySlider;
