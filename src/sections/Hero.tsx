"use client";
import ArrowRight from "@/assets/arrow-right.svg";
import CogImage from "@/assets/cog.png";
import CylindeImage from "@/assets/cylinder.png";
import NoddleImage from "@/assets/noodle.png";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import Image from "next/image";
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
      className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip"
    >
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <div className="tag">Version 2.0 is here</div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b text-transparent bg-clip-text from-black to-[#001E80] mt-6">
              Pathway to productivity
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
              Celebrate the joy of accomplishment with an app designed to trust
              your progress, moltivate your efforts, and celebrate your success.
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-primary">Get for free</button>
              <button className="btn-text btn gap-1">
                <span>Learn more</span>
                <ArrowRight className="size-5" />
              </button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <motion.img
              animate={{
                translateY: [-30, 30],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 3,
                ease: "easeInOut",
              }}
              src={CogImage.src}
              alt="cog image"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
            />
            <motion.img
              src={CylindeImage.src}
              alt="cog image"
              width={220}
              height={220}
              style={{
                translateY: translateY,
              }}
              className="hidden md:block -top-8 -left-32 absolute"
            />
            <motion.img
              src={NoddleImage.src}
              alt="noddle image"
              width={220}
              style={{
                translateY: translateY,
              }}
              className="absolute hidden lg:block top-[524px] left-[448px] rotate-[30deg] "
            />
          </div>
        </div>
      </div>
    </section>
  );
};
