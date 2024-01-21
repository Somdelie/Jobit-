"use client";
import { TextInput } from "flowbite-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { FaLinkedin } from "react-icons/fa6";
import { MdFacebook } from "react-icons/md";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const leftLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Community",
    link: "#",
  },
  {
    title: "Events",
    link: "#",
  },
  {
    title: "Contact us",
    link: "#",
  },
];

const centerLinks = [
  {
    title: "Blog",
    link: "/",
  },
  {
    title: "Jobs",
    link: "#",
  },
  {
    title: "Guides",
    link: "#",
  },
  {
    title: "Help center",
    link: "#",
  },
];

const rightLinks = [
  {
    title: "Talent",
    link: "#",
  },
  {
    title: "Events",
    link: "#",
  },
  {
    title: "History",
    link: "#",
  },
  {
    title: "Schedule",
    link: "#",
  },
];

export const Footer = () => {
  const { handleSubmit, reset } = useForm();

  async function onSubmit(data) {
    reset();
    console.log(data);
  }

  return (
    <div className="px-[2%] md:px-[6%] mt-20 z-0">
      <footer>
        <div className="flex flex-wrap gap-2">
          <div className="flex-1 basis-[10rem]">
            <h2 className="text-xl font-semibold dark:text-gray-400">Home</h2>
            <ul>
              {leftLinks.map((link, index) => (
                <li
                  className="my-2 text-muted dark:text-gray-500 transition"
                  key={index}
                >
                  <Link href={link} className='transition hover:text-green'>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1 basis-[10rem] text-sm">
            <h2 className="text-xl font-semibold dark:text-gray-400">Resources</h2>
            <ul>
              {centerLinks.map((link, index) => (
                <li
                  className="my-2 text-muted dark:text-gray-500 transition"
                  key={index}
                >
                  <Link href={link} className='transition hover:text-green'>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 basis-[10rem] text-sm">
            <h2 className="text-xl font-semibold dark:text-gray-400">Main Links</h2>
            <ul>
              {rightLinks.map((link, index) => (
                <li
                  className="my-2 text-muted dark:text-gray-500 transition"
                  key={index}
                >
                  <Link href={link} className='transition hover:text-green'>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 basis-[10rem] text-sm text-center">
            <h2 className="text-xl font-semibold dark:text-gray-400">
              Subscribe to our Newsletter
            </h2>
            <p className="text-muted text-13">
              Subscribe to be the first one to know about updates. Enter your
              email
            </p>
            <div className="flex-align-center justify-center my-3">
              <form onSubmit={handleSubmit(onSubmit)} className="flex w-full">
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 16"
                    >
                      <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                      <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                    </svg>
                  </div>
                  <input
                    type="email"
                    name="subscribe"
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@somdelie.com"
                  />
                </div>
                <button className="bg-green text-gray-300 hover:opacity-70 px-4 py-2 flex-1">
                  Subscribe
                </button>
              </form>
            </div>
            <div className="flex items-center justify-center gap-5 my-6">
              <Link href="#">
                <MdFacebook />
              </Link>
              <Link href="#">
                <FaSquareXTwitter />
              </Link>
              <Link href="#">
                <FaInstagramSquare />
              </Link>
              <Link href="#">
                <FaLinkedin />
              </Link>
            </div>
          </div>
        </div>
      </footer>
      <section className="attribution pt-2 border-t-2 flex items-center justify-center border-t-secondaryLightPurple">
        <p className="text-center  text-muted pb-2">
          Created By <span className="text-redRose">Somdelie Graphics</span> |
          All Rights Reserved
        </p>
      </section>
    </div>
  );
};
