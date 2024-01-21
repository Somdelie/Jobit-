import React from "react";
import Heading  from "@/components/ui/Heading";
import { FaQuestionCircle } from "react-icons/fa";

const questions = [
  {
    heading: "Can I customize the Figma assets to fit my brand?",
    answer:
      "Yes, you can fully customize the Figma project to match your brand. All components, colors, and styles are easily editable to meet your specific design requirements.",
  },
  {
    heading: "What file formats are included in the download?",
    answer:
      "The download includes the Figma project file, but you will also find exported assets in common formats such as PNG and SVG. This makes it easy to integrate the design elements into various platforms and tools.",
  },
  {
    heading: "Is the Figma project compatible with other design tools?",
    answer:
      "Yes, the Figma project can be exported and is compatible with various design tools. You can seamlessly collaborate with team members who may be using different design software.",
  },
  {
    heading: "Are updates included with the purchase?",
    answer:
      "Yes, updates to the Figma project and assets are included with your purchase. You will have access to any future improvements, additions, or enhancements made by the authors.",
  },
  {
    heading: "What does the free version include?",
    answer:
      "The free version of Windster includes a minimal style guidelines, component variants, and a dashboard page with the mobile version alongside it. You can use this version for any purposes, because it is open-source under the MIT license.",
  },
  {
    heading: "Can I use the Figma assets for commercial projects?",
    answer:
      "Absolutely! Once you purchase the Figma assets, you have the right to use them in both personal and commercial projects. There are no restrictions on the type of projects or the number of times you can use the assets.",
  },
  // Add more questions as needed
];

const Questions = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-4 px-4 mx-auto max-w-screen-xl sm:py-12 lg:px-6">
        <Heading
          title="Frequently asked questions"
          className="font-semibold mb-6"
        />
        <div className="grid py-8 text-left border-y border-gray-200 md:gap-14 w-full dark:border-gray-700 md:grid-cols-2">
          {questions?.map((q, index) => (
            <div className="" key={index}>
              <h3 className="flex items-center gap-2 my-2 sm:mb-4 text-md font-medium text-green">
                <FaQuestionCircle className="text-gray-500 dark:text-gray-400" />
                {q?.heading}
              </h3>
              <p className="text-paragraph text-[14px]">{q?.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Questions;
