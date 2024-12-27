import productImage from "@/assets/product-image.png";
import Image from "next/image";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";

export const ProductShowcase = () => {
  return (
    <section className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip">
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
          <Image
            height={262}
            width={262}
            src={pyramidImage}
            alt="pyramid image"
            className="hidden md:flex absolute -right-36 -top-32"
          />
          <Image
            height={248}
            width={262}
            src={tubeImage}
            alt="pyramid image"
            className="hidden md:flex absolute -left-36 bottom-24"
          />
        </div>
      </div>
    </section>
  );
};
