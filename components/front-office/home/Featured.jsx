import Heading from "@/components/ui/Heading";
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
      <section className=" mt-6 py-4">
        <div className="text-center">
          <Heading title="Need something done?" className="" />
          <Paragraph
            title="Most viewed and all-time top-selling services"
            className="mt-2 "
          />
        </div>
        <div className="grid sm:grid-cols-3 md:grid-cols-4 w-full gap-2 mx-auto max-w-[80%] mt-4 px-6">
          {featuredCards?.map((card, i) => (
            <div
              key={i}
              className="transition p-4 border shadow dark:border-gray-500"
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
      <section  className="px-8 m-t-6">
        <div className="flex justify-between">
          <Heading title="Our Featured Freelancers" className="" />
          <Link href="#" className='flex items-center underline'>
            see more <IoIosArrowRoundForward />
          </Link>
        </div>
        <div className="grid"></div>
      </section>
    </div>
  );
};

export default Featured;
