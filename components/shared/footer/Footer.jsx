"use client";

import { BsFillTelephoneFill } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { ImLinkedin } from "react-icons/im";
import { IoLogoYoutube } from "react-icons/io";

import { GrFacebookOption } from "react-icons/gr";

import { FaInstagram } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import "./Footer.scss";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addSubscriber } from "@/components/subscriber/subscriberApiSlice";

export default function Footer() {
  const dispatch = useDispatch();

  // handle subscriber
  const handleSubscribe = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { email } = Object.fromEntries(formData.entries());

    if (!email) {
      toast.error("Email is required!");
      return false;
    }
    const emailPattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    const emailTest = emailPattern.test(email);
    if (!emailTest) {
      toast.error("Invalid Email Address");
      return false;
    }

    dispatch(addSubscriber({ email }));
  };

  useEffect(() => {
    document?.querySelector(".modal")?.addEventListener("click", () => {
      if (document?.querySelector(".modal")?.previousElementSibling.checked) {
        document.querySelector(".modal")?.previousElementSibling.click();
      }
    });
  }, []);

  const formRef = useRef(null);

  return (
    <section className="bg-[#f9fbfc]  dark:bg-[#182c494d] border-t  dark:border-[#211d4c] ">
      <footer className=" text-base xl:w-[1200px]    mx-auto footer pt-10 pb-12  px-3  m-auto  items-start justify-center md:justify-between ">
        <div className=" mx-auto justify-items-center md:justify-items-start text-center md:text-left ">
          <span className="">
            <Link href={"/"} className="cursor-pointer ">
              <Image
                src="/images/logo/logo_white.png"
                alt="KIN logo"
                className="h-[52px] hidden dark:block w-auto "
                width={100}
                height={52}
                priority={true}
              />
              <Image
                src="/images/logo/logo_black.png"
                alt="KIN logo"
                className="  w-fit dark:hidden  h-[52px]"
                width={100}
                height={52}
                priority={true}
              />
            </Link>
          </span>
          <p className=" font-['Hind_Siliguri']  -mt-2 text-[#3e5060] dark:text-[#b2bac2]">
            আত্মার কাছে দায়বদ্ধতায় হাতে রাখি হাত
          </p>
          <div className="text-[#3e5060] dark:text-[#b2bac2]">
            <p className="pb-[6px] pt-3 font-semibold">
              Enter Your Email address:
            </p>
            <form
              className="flex gap-2"
              onSubmit={handleSubscribe}
              ref={formRef}
            >
              <input
                type="text"
                name="email"
                placeholder="example@gmail.com "
                className="py-3   rounded-md w-full px-3 bg-[#fff] border dark:bg-[#392f57d1] dark:border-[#848485]"
              />
              <input
                type="submit"
                value="Subscribe"
                className="bg-[#d3e4f5] text-[#007fff] font-bold dark:bg-[#1e4976]  py-2 px-3 rounded-md dark:text-white cursor-pointer"
              />
            </form>
          </div>
        </div>
        <div className=" py-8 md:py-0 text-[#3e5060] dark:text-[#b2bac2] flex flex-col  gap-2  items-center md:items-start mx-auto contact-section ">
          <h2 className="pb-3 text-[#000102] dark:text-[#ffffff] font-bold  ">
            CONTACT
          </h2>
          <a href="tel:+8801975467878" className="">
            <BsFillTelephoneFill className="w-6   h-6 inline-block mx-1 p-[3px]" />
            +8801975-467878
          </a>

          <a
            href="tel:+8801615467878"
            className=" flex items-center gap-2 ml-1"
          >
            {/* <BsFillTelephoneFill className="w-6   h-6 inline-block mx-1 p-[3px]" /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              width="20"
              height="20"
              x="0"
              y="0"
              viewBox="0 0 64 64"
            >
              <g>
                <path
                  d="M32 2a30 30 0 1 0 30 30A30.037 30.037 0 0 0 32 2zm3.72 17.56c1.64-1.92 4.13-4.81 4.13-6.39a.715.715 0 0 1 1.43 0c0 1.65 2.69 4.71 4.35 6.65a8.53 8.53 0 0 1 .78 10.07 7.34 7.34 0 0 1-5.85 3.29 7.316 7.316 0 0 1-5.84-3.29 8.534 8.534 0 0 1 1-10.33zm14.6 29.53a12.525 12.525 0 0 1-16.82-.7L15.61 30.5a12.511 12.511 0 0 1-.7-16.81c1.19-1.76 3.39-2.34 5.01-.79l4.48 4.48a3.09 3.09 0 0 1-.49 4.73 3.228 3.228 0 0 0-.93 4.5c2.42 3.68 10.61 11.87 14.31 14.35a3.302 3.302 0 0 0 4.64-.87 3.051 3.051 0 0 1 4.71-.46l4.46 4.46a3.057 3.057 0 0 1 .89 2.29 3.529 3.529 0 0 1-1.67 2.71z"
                  fill="#f40505"
                  data-original="#000000"
                  opacity="1"
                ></path>
              </g>
            </svg>
            +8801615-467878
          </a>
          <a className="" href={"mailto: kinsust03@gmail.com"}>
            <MdOutlineMailOutline className="w-6  h-6 inline-block mx-1 p-[3px]" />
            kinsust03@gmail.com
          </a>
          <a
            href="https://goo.gl/maps/x35EyojkSbMZY3rh7"
            target={"_blank"}
            rel={"noReferrer"}
            className="     flex items-center "
          >
            <HiOutlineLocationMarker className="w-6  h-6 inline-block mx-1 p-[3px]" />
            Shahjalal University of Science & Technology, Sylhet-3114,
            Bangladesh
          </a>
        </div>
        <div className=" text-[#3e5060] dark:text-[#b2bac2]  flex flex-col gap-[6px] items-center md:items-start mx-auto explore-section">
          <h2 className="pb-3 text-black dark:text-white  font-bold  ">
            EXPLORE
          </h2>
          <Link className="" href={"/our-history"}>
            Our History
          </Link>
          <Link className="" href={"/programs"}>
            Campaigns
          </Link>
          {/* <Link className="" href={""}>
              Media
            </Link> */}
          <Link className="" href={"/executive-committee"}>
            Executive Committee
          </Link>
          <Link href={"/faq"} className="">
            FAQ
          </Link>
        </div>
      </footer>
      {/* divider */}
      <div className=" xl:w-[1200px] mx-auto  ">
        <hr className="h-[1px] border-none bg-[#bfbebe50] dark:bg-[#211d4c]" />
      </div>

      {/* last part */}
      <div className=" grid md:grid-cols-2 md:justify-items-between xl:w-[1200px] py-8 px-4  mx-auto text-[#3e5060] items-center dark:text-[#b2bac2]">
        <p className=" md:order-1 order-2 dark:text-[#e2e8f0]   text-center md:text-left">
          Copyright © 2023{" "}
          <span className="text-red-600 font-['Arial_black'] dark:text-red-600">
            KIN
          </span>{" "}
          , A Voluntary Organization of SUST
        </p>
        <div className="social-icons order-1 md:order-2 flex pb-4 md:pb-0 gap-4  md:justify-end mx-auto md:mx-0 ">
          <a
            href="https://www.linkedin.com/company/kin-a-voluntary-organisation-of-sust/"
            target="_blank"
            className="text-[#0077b5]  dark:bg-[#6267d21e]  flex items-center h-12 rounded-full w-12  justify-center "
            rel="noreferrer"
          >
            <ImLinkedin className="fill-[#435562] text-md dark:fill-white  " />
          </a>
          <a
            href="https://www.youtube.com/@kinsust3885"
            target={"_blank"}
            rel="noreferrer"
            className="text-[#0077b5]   dark:bg-[#6267d21e]  flex items-center h-12 rounded-full w-12  justify-center "
          >
            <IoLogoYoutube className="fill-[#435562] text-md dark:fill-white " />
          </a>
          <a
            href={"//www.facebook.com/KINSUST"}
            rel="noreferrer"
            target="_blank"
            className="  text-[#0077b5]  dark:bg-[#6267d21e]  flex items-center h-12 rounded-full w-12  justify-center "
          >
            <GrFacebookOption className="fill-[#435562] text-md dark:fill-white " />
          </a>
          <a
            href={"//www.instagram.com/kin_sust/"}
            rel="noreferrer"
            target="_blank"
            className=" text-[#0077b5]  dark:bg-[#6267d21e]  flex items-center h-12 rounded-full w-12  justify-center "
          >
            <FaInstagram className="fill-[#435562] text-md dark:fill-white " />
          </a>
        </div>
      </div>
    </section>
  );
}
