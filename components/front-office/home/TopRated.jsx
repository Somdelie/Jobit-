import Heading from "@/components/ui/Heading";
import { Avatar, Rating } from "@mui/material";
import Link from "next/link";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";


const topRates = [
    {
      firstName: "Chloe B.",
      about: "Thank you for checking out my profile. Here is a quick overview of my skills and strengths. I am well-organized, efficient, and self-motivated. The key to my success has been to learn quickly and...",
      ratings: 3.8,
    },
    {
      firstName: "David M.",
      about: "Greetings! I am a passionate software engineer with expertise in full-stack development. I enjoy tackling complex problems and creating innovative solutions. My commitment to excellence has earned me a rating of 4.9.",
      ratings: 4.9,
    },
    {
      firstName: "Emily S.",
      about: "Hi there! I'm a creative graphic designer who loves turning ideas into visually appealing designs. I thrive on challenges and bring a fresh perspective to every project. My clients have consistently rated me 4.8 for my creativity and attention to detail.",
      ratings: 4.8,
    },
    {
      firstName: "Marcus L.",
      about: "As a seasoned project manager, I excel in coordinating teams and delivering successful outcomes. My strategic thinking and problem-solving skills have contributed to my impressive 4.6 rating. Let's connect and discuss how I can add value to your projects.",
      ratings: 4.1,
    },
    {
      firstName: "Sophie W.",
      about: "Hello! I specialize in social media marketing and have a proven track record of driving engagement and brand awareness. My data-driven approach and effective communication skills have earned me a rating of 4.5. Let's collaborate and elevate your online presence!",
      ratings: 4.5,
    },
    {
      firstName: "Alex R.",
      about: "Hey, I'm Alex! With a background in finance, I bring analytical skills and attention to detail to every task. Whether it's budgeting, forecasting, or financial analysis, I've got it covered. My clients appreciate my reliability, giving me a solid 4.8 rating.",
      ratings: 4.0,
    },
];


const TopRated = () => {
  return (
    <section className=" ">
      <div className="flex justify-between py-4 px-4 mx-auto max-w-screen-xl sm:py-12 lg:px-6">
        <Heading title="Top Rated Freelancers" className="font-semibold" />
        <Link
          href="#"
          className="flex items-center underline text-green transition hover:scale-123 text-base"
        >
          see more <IoIosArrowRoundForward />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 mx-auto max-w-screen-xl p-6 gap-8 dark:bg-transparent dark:border border-darkCard bg-[#F9FAFB]">
      {topRates?.map((user,index) =>(
        <div className="p-2" key={index}>
        <div className="flex gap-2 items-start">
            <Avatar>{user.firstName.charAt(0)}</Avatar>
            <div className="flex flex-col gap-4">
                <h3>{user.firstName}</h3>
                <p className='text-gray-400 text-xs'>{user?.about.slice(0, 142)}{user.about.length > 142 ? '...' : ''}</p>
                <div className='flex items-center justify-between w-full'>
                <Rating name="read-only" value={user?.ratings} readOnly />
                <Link href='#' className='text-green hover:opacity-70 sm:mr-4 transition'>more</Link>
                </div>

            </div>
            </div>
            <hr className='mt-4 dark:border-darkCard'/>
        </div>
      ))}
      
      </div>
    </section>
  );
};

export default TopRated;
