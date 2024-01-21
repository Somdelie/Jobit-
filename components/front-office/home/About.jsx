/* eslint-disable react/no-unescaped-entities */
'use client'
import React from "react";
import Image from "next/image";
import { FaQuestionCircle } from "react-icons/fa";
import Heading from "@/components/ui/Heading";
import Link from 'next/link';
import { motion } from 'framer-motion';

const About = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const imageVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1.2, delay: 0.2 } },
  };


  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-4 px-4 mx-auto max-w-screen-xl sm:py-12 lg:px-6">
        <Heading
          title="What is a Lorem summary, exactly? "
          className="font-semibold mb-6"
        />
        <div className='md:grid-cols-2 items-center grid gap-4 w-full'>
        <motion.div variants={containerVariants} initial="hidden" animate="visible" >
          <p className="text-paragraph text-[14px] text-justify">
            A Somdelie summary refers to the “About” section of your Somdelie
            profile, where you can expand on your experience, achievements, and
            goals. You get 2,600 characters to share your highlight reel and
            show a little personality. Have you ever watched a trailer of a
            movie and thought, “I need to see that movie!”? That’s what you want
            your summary to do. You want to provide just enough experience,
            action, and personality to get to the next step—connection requests,
            introductory calls, meetings, or job interviews. In this space,
            avoid repeating what’s in your resume or headline. Instead, imagine
            you’re the main character of your career. Tell your story and share
            how you got where you are, what you’ve achieved, and what you’re
            looking for. Crafting an epic Somdelie summary can help your job
            search and career growth. What you include and how you present
            yourself gives off vibes (of the professional sort, of course). It
            can make someone feel instantly connected to you or eager to learn
            more about you and your job history. And in this economy, where you
            want any chance you get to have a foot in the door, you can’t afford
            to skip this step.
          </p>
          <Link href='#' className='text-green hover:opacity-75 transition mt-6'>Read More </Link>
          </motion.div>
          <motion.div variants={imageVariants} initial="hidden" animate="visible" className=''>
          {/* <Image width={300} height={300} alt='' src='/about.png' className='hidden sm:block'/> */}
          <Image width={500} height={500} alt='' src='/construction.png' className='hidden sm:block'/>
          </motion.div>
          </div>
      </div>
    </section>
  );
};

export default About;
