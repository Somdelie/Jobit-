import Heading from "@/components/ui/Heading";
import MySlider from "@/components/ui/MySlider";
import Paragraph from "@/components/ui/Paragraph";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

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

const Featured = () => {
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
        <div className="grid sm:grid-cols-3 md:grid-cols-4 w-full gap-2 mx-auto mt-4">
          {featuredCards?.map((card, i) => (
            <div
              key={i}
              className="transition p-4 border border-l-4 border-l-roseRed shadow dark:border-gray-500"
            >
              <Image width={40} height={40} src={card?.icon} alt="LOGO" />
              <h1 className="dark:text-gray-300 my-2">{card?.title}</h1>
              <Paragraph
                title={card?.desc}
                className="text-gray-400 dark:text-gray-500 text-xs"
              />
            </div>
          ))}
        </div>
      </section>
      {/* feature-2 */}
      <section className="px-[2%] md:px-[6%] mt-10">
        <div className="flex my-4 justify-between">
          <Heading title="Our Featured Freelancers" className="font-semibold" />
          <Link
            href="#"
            className="flex items-center underline text-roseRed transition hover:scale-125 text-base"
          >
            see more <IoIosArrowRoundForward />
          </Link>
        </div>
        <div className="">
          <MySlider />
        </div>
      </section>
    </div>
  );
};

export default Featured;
