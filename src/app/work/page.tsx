"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

import Link from "next/link";
import Image from "next/image";
import { title } from "process";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  // {
  //   num: "01",
  //   category: "AI & Full Stack",
  //   title: "AI Document Extraction Pipeline",
  //   description:
  //     "An end-to-end AI pipeline using LLM Whisperer (OCR) and Groq LLM to extract data from invoices and cheques, auto-filling React forms via FastAPI — achieving sub-10 second response times using free APIs.",
  //   stack: [
  //     { name: "FastAPI" },
  //     { name: "React" },
  //     { name: "Groq LLM" },
  //     { name: "LLM Whisperer" },
  //   ],
  //   image: "/assets/work/fyp_management.jpg", // Placeholder image
  //   live: "#",
  //   github: "https://github.com/ahmadsaeed78",
  // },
  // {
  //   num: "02",
  //   category: "AI & Web Development",
  //   title: "AI Compliance & Validation Platform",
  //   description:
  //     "Developed FastAPI backend endpoints for OCR-based document analysis and bylaw compliance validation of architectural plans. Integrated AI services to automate regulatory checks and reduce manual effort.",
  //   stack: [
  //     { name: "FastAPI" },
  //     { name: "MongoDB" },
  //     { name: "React" },
  //     { name: "AI Validation" },
  //   ],
  //   image: "/assets/work/ecommerce.png", // Placeholder image
  //   live: "#",
  //   github: "https://github.com/ahmadsaeed78",
  // },
  {
    num: "01",
    category: "Web Application",
    title: "QR Code Restaurant Management System",
    description:
      "A full-stack restaurant management system that uses QR codes for table management, menu access, and order processing. Designed and optimized the complete database schema.",
    stack: [
      { name: "FastAPI" },
      { name: "React" },
      { name: "PostgreSQL" },
      { name: "QR Code" },
    ],
    image: "/assets/work/restaurant-system.png",
    live: "https://dinesmart-app.vercel.app/staff/login",
    github: "https://github.com/ahmadsaeed78/dinesmart-app",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: any) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, ease: "easeIn", duration: 0.4 },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px]flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>

              {/* project Category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              <p className="text-white/60">{project.description}</p>

              <ul className=" flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li className="text-xl text-accent" key={index}>
                      {item.name}
                      {/*remove the last comma  */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>

              {/* border */}
              <div className="border border-white/20"></div>

              {/* button */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live} target="blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* github project button */}
                {/* <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link> */}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20 ">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* iamge */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}

              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 botom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none "
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all "
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
