import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedIn from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";

const links = ["About", "Features", "customers", "pricing", "help", "careers"];
const socialLinks = [
  SocialInsta,
  SocialLinkedIn,
  SocialX,
  SocialPin,
  SocialYoutube,
];

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:blur  before:h-full before:w-full before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
          <Image src={Logo} width={40} height={40} alt="logo saas" className="relative" />
        </div>
        <nav className="flex flex-col gap-6 mt-6 md:flex-row justify-center">
          {links.map((link, index) => (
            <a href="#" key={index} className="capitalize">
              {link}
            </a>
          ))}
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          {socialLinks.map((Social, index) => (
            <Social key={index} />
          ))}
        </div>
        <p className="mt-6">&copy; 2024 Linga, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};
