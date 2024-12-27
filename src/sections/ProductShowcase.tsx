"use client";
import productImage from "@/assets/product-image.png";
import Image from "next/image";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="max-w-[540px] mx-auto">
          <div className="flex justify-center items-center">
            <div className="tag">Boost your productivity</div>
          </div>
          <h2 className="heading text-center font-bold text-pretty text-3xl md:text-[54px] md:leading-[60px]">
            A more effective way to track progress
          </h2>
          <p className="text-center text-[22px] leading-[30px] tracking-tight text-[#010D3E] mt-5">
            Effortlessly turn your ideas into a fully functional, responsive,
            SaaS website in just minutes with this template.
          </p>
        </div>
        <div className="relative">
          <Image src={productImage} alt="product image" className="mt-10" />
          <motion.img
            height={262}
            width={262}
            src={pyramidImage.src}
            alt="pyramid image"
            style={{
              translateY: translateY,
            }}
            className="hidden md:flex absolute -right-36 -top-32"
          />
          <motion.img
            height={248}
            width={262}
            src={tubeImage.src}
            style={{
              translateY: translateY,
            }}
            alt="pyramid image"
            className="hidden md:flex absolute -left-36 bottom-24"
          />
        </div>
      </div>
    </section>
  );
};
