import ArrowRight from "@/assets/arrow-right.svg";
import StarImage from "@/assets/star.png";
import SpringImage from "@/assets/spring.png";
import Image from "next/image";
export const CallToAction = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading relative">
          <h2 className="heading text-center">Sign up for free today</h2>
          <p className="section-desc mt-5">
            Celebrate teh joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>
          <Image
            src={SpringImage}
            alt="spring image"
            width={360}
            height={220}
            className="absolute -left-[350px] -top-[137px]"
          />
          <Image
            src={StarImage}
            alt="star image"
            width={360}
            height={220}
            className="absolute -right-[331px] -top-[19px]"
          />
        </div>
        <div className="flex gap-2 mt-10 justify-center">
          <button className="btn btn-primary">Get for free</button>
          <button className="btn btn-text gap-1">
            <span>Learn more</span>
            <ArrowRight className="size-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
