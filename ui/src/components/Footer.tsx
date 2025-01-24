import LogoFooter from "../../public/icons/LogoFooter";
import { FiPhone } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import Facebook from "../../public/icons/Facebook";
import Instagram from "../../public/icons/Instagram";
import Twitter from "../../public/icons/Twitter";
import LinkedIn from "../../public/icons/LinkedIn";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="bg-black h-fit w-screen py-16">
      <div className="max-w-5xl m-auto text-white flex justify-between pl-6 pb-11 border-b border-[#ffffff25]">
        <Link href="/">
          <LogoFooter />
        </Link>
        <div className="flex gap-9">
          <div className="flex justify-center items-center gap-5">
            <div className="border rounded-full p-4 border-[#ffffff25]">
              <FiPhone />
            </div>
            (976) 7007-1234
          </div>
          <div className="flex justify-center items-center gap-5">
            <div className="border rounded-full p-4 border-[#ffffff25]">
              <FiMail />
            </div>
            contact@ecommerce.mn
          </div>
        </div>
      </div>
      <div className="flex max-w-5xl m-auto justify-between pt-11">
        <div className="text-white">© 2024 Ecommerce MN</div>
        <div className="flex gap-7">
          <Facebook />
          <Instagram />
          <Twitter />
          <LinkedIn />
        </div>
      </div>
    </div>
  );
};
