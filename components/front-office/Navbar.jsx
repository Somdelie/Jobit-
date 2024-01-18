"use client";
import Link from "next/link";
import { Bell, Menu, MessageSquareText, Plus } from "lucide-react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import MobileNav from "./MobileNav";
import Image from "next/image";
import { Dropdown } from "flowbite-react";
import { Avatar } from "@mui/material";
import { signOut } from "next-auth/react";
import { ThemeSwitcher } from "../ui/ThemeSwitcher";
import React, { useState, useEffect } from "react";

const links = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Jobs",
    link: "/jobs",
  },

  {
    title: "Talents",
    link: "/talents",
  },
  {
    title: "Blogs",
    link: "/blogs",
  },
  {
    title: "Schedule",
    link: "/schedule",
  },
  {
    title: "History",
    link: "/history",
  },
  {
    title: "Overview",
    link: "/overview",
  },
];

const Navbar = ({ currentUser }) => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const handleScroll = () => {
    const isScrolled = window.scrollY > 0;
    setScrolled(isScrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`bg-white glass flex items-center px-8 justify-between text-white transition text-[14px] dark:bg-gray-700 fixed w-full h-[60px] z-30 top-0 start-0 border-b border-gray-200 dark:border-gray-600 ${
        scrolled ? "scrolled" : ""
      }`}
    >
      <Link href="/" className="flex items-center">
        <Image width={24} height={24} src="/logo-mobile.png" alt="LOGO" />
        <h1 className="dark:text-white transition text-[22px] font-semibold">
          SOMDELIE
        </h1>
      </Link>

      {/*-------------------------------------- Desktop Menu------------------------------------- */}
      <div className="md:flex items-center space-x-4 hidden">
        {links?.map((link) => (
          <Link
            key={link.title}
            href={link.link}
            className={
              link.link === pathname
                ? "flex items-center text-neonGreen transition "
                : "flex items-center hover:text-neonGreen transition dark:text-gray-300 font-medium"
            }
          >
            <span>{link.title}</span>
          </Link>
        ))}
      </div>
      <div className="items-center flex gap-6 ">
        <ThemeSwitcher />
        {currentUser ? (
          <div className=" hidden sm:flex items-center space-x-4">
            {/*-------------------------------- Post Job------------------------------------------------------- */}
            <Link
              href="/jobs/create"
              className="flex items-center space-x-1 bg-roseRed hover:opacity-70 transition text-gray-200 rounded px-4 py-1"
            >
              <Plus /> <span className="hidden md:block">post job</span>
            </Link>

            {/*---------------------- Notifications toggle------------------------------------------------ */}
            <div>
              <motion.div
                className="relative cursor-pointer"
                whileTap={{ scale: 0.5 }}
              >
                <Bell className="notification-btn text-muted" />
                <div className="absolute w-2 h-2 bg-primary top-0 right-0 rounded-full notification-btn"></div>
              </motion.div>
              {/* <Notifications /> */}
            </div>
            {/*---------------------- Messages toggle------------------------------------------------ */}
            <div>
              <motion.div
                className="relative cursor-pointer"
                whileTap={{ scale: 0.5 }}
              >
                <MessageSquareText className="notification-btn text-muted" />
                <div className="absolute w-2 h-2 bg-primary top-0 right-0 rounded-full notification-btn"></div>
              </motion.div>
              {/* <Massages /> */}
            </div>

            {/*------------------------------- Profile Dropdown toggle-------------------------------------------- */}
            <div className="flex items-center gap-2">
              <span className="font-medium dark:text-gray-300">
                Hi {currentUser?.firstName}
              </span>
              <div className="flex md:order-2">
                <Dropdown
                  arrowIcon={false}
                  inline
                  label={<Avatar alt="r">f</Avatar>}
                >
                  <Dropdown.Header>
                    <span className="flex items-center text-sm">
                      {currentUser?.firstName} {currentUser?.lastName}
                    </span>
                    <span className="block truncate text-sm font-medium">
                      {currentUser?.email}
                    </span>
                  </Dropdown.Header>
                  <Dropdown.Item>
                    <Link href="/admin-panel">Dashboard</Link>
                  </Dropdown.Item>
                  <Dropdown.Item>Settings</Dropdown.Item>
                  <Dropdown.Item>Earnings</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item onClick={signOut}>Sign out</Dropdown.Item>
                </Dropdown>
              </div>
            </div>
          </div>
        ) : (
          <div className=" hidden sm:flex  items-center md:order-2 gap-6 md:space-x-0 rtl:space-x-reverse">
            <Link href="/login">Sign in</Link>
            <Link
              href="/register"
              className="text-white bg-teal-500 px-4 py-1 hover:opacity-55 rounded"
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>
      {/*------------------------------- Mobile Menu Toggle------------------------- */}
      <div className="relative md:hidden z-40">
        <MobileNav links={links} pathname={pathname} />
      </div>
    </nav>
  );
};

export default Navbar;
