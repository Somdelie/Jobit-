'use client'
import React, { useEffect, useRef } from "react";
import Heading from "@/components/ui/Heading";
import MySlider from "@/components/ui/MySlider";
import Paragraph from "@/components/ui/Paragraph";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import List from './List';
import { motion, useAnimation } from "framer-motion";

const featuredCards = [
  {
    icon: "/resume.png",
    title: "Post a job",
    desc: "It’s free and easy to post a job. Simply fill in a title, description.",
  },
  {
    icon: "/web-development.png",
    title: "Choose freelancers",
    desc: "It’s free and easy to post a job. Simply fill in a title, description.",
  },
  {
    icon: "/cyber-security.png",
    title: "Pay safely",
    desc: "It’s free and easy to post a job. Simply fill in a title, description.",
  },
  {
    icon: "/customer-service.png",
    title: "We’re here to help",
    desc: "It’s free and easy to post a job. Simply fill in a title, description.",
  },
];

const items = [
  'Health',
  'Wellness',
  'Insurance',
  'Student housing',
  'Senior housing',
  'Financial',
  'Manufacturing',
  'High-tech',
  'Cloud/SAAS',
  'Non-profit',
  'Higher education',
  'Resort Commercial real estate',
  'Online gaming',
];

const Featured = () => {

 const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.3 }
    }
  };

   const cardVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
  };

   // Ref for the motion.div container
   const containerRef = useRef(null);

   // Animation controls for the motion.div container
   const controls = useAnimation();
 
   useEffect(() => {
     const containerElement = containerRef.current;
 
     const handleIntersection = (entries) => {
       const [entry] = entries;
       if (entry.isIntersecting) {
         controls.start("visible");
       } else {
         controls.start("hidden");
       }
     };
 
     // Intersection Observer setup
     const observer = new IntersectionObserver(handleIntersection, {
       threshold: 0.5, // Adjust the threshold as needed
     });
 
     if (containerElement) {
       observer.observe(containerElement);
     }
 
     // Cleanup on component unmount
     return () => {
       if (containerElement) {
         observer.unobserve(containerElement);
       }
     };
   }, [controls]);

  return (
    <div>
      {/* feature-1 */}
      <section className=" mt-6 px-[2%] md:px-[6%]">
        <div className="text-center">
          <Heading title="Need something done?" className="" />
          <Paragraph
            title="Most viewed and all-time top-selling services"
            className="mt-2 "
          />
        </div>
        <motion.div
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid sm:grid-cols-3 md:grid-cols-4 w-full gap-2 mx-auto mt-4"
        >
          {featuredCards?.map((card, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: i * 0.2 }} // Adjust the delay as needed
              className="transition p-4 border border-l-4 border-l-roseRed shadow dark:border-gray-500"
            >
              <Image width={40} height={40} src={card?.icon} alt="LOGO" />
              <h1 className="dark:text-gray-300 my-2">{card?.title}</h1>
              <Paragraph
                title={card?.desc}
                className="text-gray-400 dark:text-gray-500 text-xs"
              />
            </motion.div>
          ))}
          </motion.div>
        <div className='grid sm:grid-cols-2 gap-4'>
        <div className='p-8'>
        <Heading title="Our process" className="text-xl text-[#3e5c59] font-bold mb-4" />
          <p className='text-justify'>
            We use a customized approach with analytics and dashboard to build
            leads and achieve high ROI. This process and our proven industry
            experience enable you to concentrate on your business and
            organization and leave the ‘always morphing’ digital marketing
            business (such as search engines’ daily algorithm changes and
            constantly evolving tools and metrics) up to us.
          </p>
        </div>
        <div className="p-8">
      <h1 className="text-xl text-[#3e5c59] font-bold mb-4">Industries</h1>
      <h3 className='font-semibold text-xs'>Jobit has extensive experience and skillsets in these industries and more:</h3>
      <List items={items} />
    </div>
    </div>
      </section>
      {/* feature-2 */}
      <section className="px-[2%] md:px-[3%] mt-10">
        <div className="flex my-4 justify-between">
          <Heading title="Our Featured Freelancers" className="font-semibold" />
          <Link
            href="#"
            className="flex items-center underline text-green transition hover:scale-125 text-base"
          >
            see more <IoIosArrowRoundForward />
          </Link>
        </div>
        <div className="px-6">
          <MySlider />
        </div>
      </section>
    </div>
  );
};

export default Featured;
