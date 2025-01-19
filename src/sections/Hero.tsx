"use client";
import ArrowRight from "@/assets/arrow-right.svg";
import cogImage from "@/assets/cog.png";
import cylender from "@/assets/cylinder.png";
import noodle from "@/assets/noodle.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={heroRef}
      className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_at_bottom_left,_#183EC2_0%,_#EAEEFE_70%)] overflow-hidden"
    >
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-1/2">
            <div className="tag">Version 2.0 is here !</div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
              Pathway to productivity
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
              Celebrate the joy of accomplishment with an app designed to track
              your progress, motivate your efforts, and celebrate your
              successes.
            </p>
            <div className="flex gap-1 items-center mt-6">
              <button className="btn btn-primary">Get for free !</button>
              <button className="btn btn-text gap-1">
                <span>Learn more</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <motion.img
              src={cogImage.src}
              alt="Cog Image"
              height={400}
              width={400}
              className="md:absolute md:h-full md:w-auto md:max-w-none md:left-6"
              animate={{
                translateY: [-30, 30],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 3,
                ease: "easeInOut",
              }}
            />
            <motion.img
              src={cylender.src}
              alt="Cylinder Image"
              height={220}
              width={220}
              className="hidden md:block -top-8 -left-32 md:absolute "
              style={{ translateY: translateY }}
            />
            <motion.img
              src={noodle.src}
              alt="Noodle Image"
              height={220}
              width={220}
              className="hidden lg:block top-[524px] left-[448px] rotate-45 lg:absolute "
              style={{ translateY: translateY }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
