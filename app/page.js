"use client";
import Slider from "@/components/slider/Sliders";
import Subscriber from "@/components/subscriber/Subscriber";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import CountUp from "react-countup";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useDispatch, useSelector } from "react-redux";
import { ScaleLoader } from "react-spinners";



export default function Home() {
  // sliders
  const { sliders } = useSelector((state) => state.sliders);

  if (sliders.length > 0) {
    return (
      <>
        {/* meta tag */}
        <>
          <title>Home</title>
          <meta
            name="description"
            content="The name of this organization is KIN, which means relative.Calamities have no specific time to appear and when it comes peoples seek the shelter. For the shelter they goes to their close relatives."
          ></meta>
          <meta
            property="og:title"
            content="KIN,A Voluntary Organization"
          ></meta>
          <meta
            name="og:description"
            content="The name of this organization is KIN, which means relative.Calamities have no specific time to appear and when it comes peoples seek the shelter. For the shelter they goes to their close relatives."
          ></meta>
          <meta property="og:url" content="https://kinsust.org/"></meta>
          <meta
            property="og:image"
            content="/images/logo/logo_white.png"
          ></meta>
          <meta property="twitter:url" content="https://kinsust.org/"></meta>
          <meta
            name="twitter:description"
            content="The name of this organization is KIN, which means relative.Calamities have no specific time to appear and when it comes peoples seek the shelter. For the shelter they goes to their close relatives."
          ></meta>
          <meta
            name="twitter:image"
            content="/images/logo/logo_white.png"
          ></meta>
        </>
        {/* <head>
          <title>Home</title>
          <meta
            name="description"
            content="The name of this organization is KIN, which means relative.Calamities have no specific time to appear and when it comes peoples seek the shelter. For the shelter they goes to their close relatives."
          ></meta>
          <meta
            property="og:title"
            content="KIN,A Voluntary Organization"
          ></meta>
          <meta
            name="og:description"
            content="The name of this organization is KIN, which means relative.Calamities have no specific time to appear and when it comes peoples seek the shelter. For the shelter they goes to their close relatives."
          ></meta>
          <meta property="og:url" content="https://kinsust.org/"></meta>
          <meta
            property="og:image"
            content="/images/logo/logo_white.png"
          ></meta>
          <meta property="twitter:url" content="https://kinsust.org/"></meta>
          <meta
            name="twitter:description"
            content="The name of this organization is KIN, which means relative.Calamities have no specific time to appear and when it comes peoples seek the shelter. For the shelter they goes to their close relatives."
          ></meta>
          <meta
            name="twitter:image"
            content="/images/logo/logo_white.png"
          ></meta>
        </head> */}

        <section>
          {/* slider */}
          <Slider />

          {/* about us */}
          <section className="  bg-[#fff] border-b   dark:bg-[#18233575]  border-[#eeeeee6a] dark:text-[#cacfd5] dark:border-[#0a0525] md:text-[20px] text-[18px] text-black">
            <div className="lg:py-16 py-8 md:py-12 mx-auto hero  xl:w-[1200px] text-justify">
              <div className="hero-content flex-col-reverse lg:flex-row-reverse p-0 m-0 px-4 lg:gap-24 ">
                <div className="  basis-5/12 ">
                  <figure>
                    <PhotoProvider>
                      <PhotoView src="/images/homepage/about.jpg">
                        <Image
                          src="/images/homepage/about.jpg"
                          className="rounded-lg shadow-2xl border-8  border-[#ffffff] dark:border-[#32265a6f] cursor-pointer"
                          width={500}
                          height={500}
                          alt="21 february kin sust"
                          placeholder="blur"
                          blurDataURL="/images/homepage/about.jpg"
                          loading="lazy"
                        />
                      </PhotoView>
                    </PhotoProvider>
                  </figure>
                </div>
                <div className="   basis-7/12 relative p-0 m-0">
                  <AnimationOnScroll
                    animateIn="animate__flipInX"
                    initiallyVisible={true}
                    duration={2}
                  >
                    <h1 className="font-serif  dark:text-[#fff] lg:text-5xl text-[36px] sm:text-5xl font-bold text-center pt-2 lg:pt-0  ">
                      <span className="dark:text-white">About</span>{" "}
                      <span className="text-[#f41e1e] dark:text-[#fc535a]">
                        Us
                      </span>
                    </h1>
                  </AnimationOnScroll>

                  <p className="    md:pt-6 pt-4   text-justify ">
                    The word {'"'}
                    <span className="font-['Arial'] text-red-600 dark:text-red-600">
                      KIN
                    </span>
                    {'"'} stands for {'"Relative"'}.{" "}
                    <span className="font-['Arial'] text-red-600 dark:text-red-600">
                      KIN{" "}
                    </span>{" "}
                    was founded in the year 2003 with the help of some young
                    dreamers from <span className="font-semibold">SUST</span>.
                  </p>
                  <p className=" md:pt-6 pt-4   text-justify">
                    <span className="font-['Arial'] text-red-600 dark:text-red-600">
                      KIN
                    </span>{" "}
                    was founded with a view to helping the destitute people
                    living around the university area with the basic necessities
                    of human life.{" "}
                    <span className=" text-red-600 font-['Arial'] dark:text-red-600">
                      KIN
                    </span>{" "}
                    helps them as a relative helps us in our time of emergency.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* sponsor a child */}
          <section className="bg-[#f7f9fc0b] border  dark:bg-[#151f32cf]  border-[#eeeeee6a] dark:text-[#cacfd5] dark:border-[#103b1d] md:text-[20px] text-[18px] text-black">
            <div className="lg:py-16 py-8 md:py-12 mx-auto hero  xl:w-[1200px] text-justify">
              <div className="relative hero-content flex-col-reverse lg:flex-row-reverse lg:gap-16">
                <div className="basis-5/12 ">
                  <PhotoProvider>
                    <PhotoView src="/images/homepage/sponser.png">
                      <Image
                        src="/images/homepage/sponser.png"
                        style={{ borderRadius: "0px 100px 0px 100px" }}
                        alt="our child kinsust kinschool"
                        className="border-8 rounded-md border-[#ffffff] dark:border-[#32265a6f] cursor-pointer"
                        width={500}
                        height={500}
                        placeholder="blur"
                        blurDataURL="/images/homepage/sponser.png"
                        loading="lazy"
                      />
                    </PhotoView>
                  </PhotoProvider>
                </div>
                {/* bounce */}
                <div className="hidden lg:block">{/* <Bounce /> */}</div>
                <div className=" basis-7/12 relative">
                  <AnimationOnScroll animateIn="animate__flipInX" duration={2}>
                    <h1 className=" font-serif dark:text-[#fff] lg:text-5xl text-[36px] sm:text-5xl font-bold text-center pt-2 lg:pt-0  ">
                      Sponsor a{" "}
                      <span className="text-[#f41e1e] dark:text-[#fc535a]">
                        Child
                      </span>
                    </h1>
                  </AnimationOnScroll>

                  <p className=" sm:px-4  md:pt-6 pt-4    text-justify">
                    You can now sponsor a student of{" "}
                    <span className="text-red-600 font-['Arial'] dark:text-red-600">
                      KIN
                    </span>{" "}
                    <span className="font-semibold">School </span>
                    through carrying their educational expenses, providing them
                    clothes & other financial needs.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* kin wings */}
          <section className="lg:py-16 py-8  md:py-12 bg-[#f7f9fc] border-b  dark:bg-[#151f32]  dark:text-[#cacfd5] md:text-[20px] border-[#eeeeee6a] text-[18px]  dark:border-[#4c46712d]">
            <div className="xl:w-[1200px] text-black  px-5 flex-wrap lg:flex-nowrap justify-center  flex   lg:gap-6 gap-6 mx-auto     dark:text-white  ">
              <div
                onClick={() => {
                  navigate("/social-awareness");
                }}
                className="z-10 cursor-pointer wings-div rounded-md max-w-[390px] bg-[#ffffff]  dark:bg-[#182c49] border border-[#9bbcdfb0] dark:border-none hover:shadow-[0px_4px_15px] hover:shadow-[#5b5ac1]    shadow-[0px_1px_3px] shadow-[#f2eaea4d] dark:shadow-none dark:hover:shadow-[#5b5ac1]  dark:hover:shadow-[0px_4px_15px] min-h-[200px] lg:flex-1"
              >
                <div className="px-5 lg:py-6 py-5 dark:text-white">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      width={80}
                      height={80}
                      x="0"
                      y="0"
                      className="mx-auto"
                      viewBox="0 0 53 53"
                    >
                      <g>
                        <path
                          fill="#c7754f"
                          d="M50.5 45.381c0 .769-.619 1.387-1.387 1.387H3.887a1.383 1.383 0 0 1-1.386-1.387c0-.76.618-1.386 1.386-1.386h45.226c.768 0 1.386.626 1.386 1.386z"
                          data-original="#c7754f"
                        ></path>
                        <path
                          fill="#ab604b"
                          d="M14.28 46.768H3.89a1.385 1.385 0 1 1 0-2.77h10.39c-.77 0-1.38.62-1.38 1.38 0 .77.61 1.39 1.38 1.39z"
                          data-original="#ab604b"
                          className=""
                        ></path>
                        <path
                          fill="#5b5e8b"
                          d="M31.091 33.437v10.557H3.981V33.437a6.48 6.48 0 0 1 4.986-6.3l3.682-.872 4.89-1.16 3.227.768 5.355 1.265a6.483 6.483 0 0 1 4.97 6.3z"
                          data-original="#5b5e8b"
                          className=""
                        ></path>
                        <path
                          fill="#312e4b"
                          d="M17.194 39.354h.683v4.641h-.683zM18.586 25.351l-3.852.91-3.68.878a6.481 6.481 0 0 0-4.99 6.298v10.557H3.982V33.437c0-2.999 2.064-5.6 4.982-6.298l3.68-.878 4.893-1.154 1.048.244z"
                          data-original="#312e4b"
                          className=""
                        ></path>
                        <path
                          fill="#deddff"
                          d="m22.423 26.257-2.074 6.484-2.81-1.993-2.809 1.993-2.081-6.476 4.85-1.152h.089l3.178.76z"
                          data-original="#deddff"
                          className=""
                        ></path>
                        <path
                          fill="#ffaf93"
                          d="M20.89 24.399v2.55a3.185 3.185 0 1 1-6.372 0V24.4z"
                          data-original="#ffaf93"
                          className=""
                        ></path>
                        <path
                          fill="#ee8778"
                          d="m16.445 29.185.02.02a3.086 3.086 0 0 0 1.749.888c-1.753.35-3.696-1.054-3.696-3.143v-1.545a5.85 5.85 0 0 0 4.038.887c-1.503-.217-2.839-1.044-3.623-2.025h5.957v2.15c-1.13.6-2.41.851-3.505.783-1.058-.053-1.683 1.236-.94 1.985z"
                          data-original="#ee8778"
                        ></path>
                        <path
                          fill="#ffaf93"
                          d="M23.542 13.633v6.882a5.838 5.838 0 1 1-11.675 0v-6.882z"
                          data-original="#ffaf93"
                          className=""
                        ></path>
                        <path
                          fill="#ffaf93"
                          d="M23.54 13.63v6.882c0 .185-.007.369-.026.546-.02.257-.066.506-.125.756a5.818 5.818 0 0 1-5.682 4.537 5.837 5.837 0 0 1-5.838-5.839V13.63z"
                          data-original="#ffaf93"
                          className=""
                        ></path>
                        <path
                          fill="#8b4f4f"
                          d="M24.787 11.93v7.343h-1.244V13.63H11.869v5.642h-1.277V11.93z"
                          data-original="#8b4f4f"
                          className=""
                        ></path>
                        <path
                          fill="#ffaf93"
                          d="M25.596 19.014a2.055 2.055 0 0 1-2.063 2.063v-4.114c1.145 0 2.063.918 2.063 2.051z"
                          data-original="#ffaf93"
                          className=""
                        ></path>
                        <path
                          fill="#ee8778"
                          d="M24.084 17.046a2.063 2.063 0 0 0-.55-.082v4.113c.192 0 .374-.035.55-.083zM13.565 13.028v7.484a5.844 5.844 0 0 0 4.99 5.78 5.85 5.85 0 0 1-4.037-.887 5.829 5.829 0 0 1-2.65-4.893v.566a2.06 2.06 0 0 1-1.282-3.676c.355-.276.796-.44 1.283-.44v-3.934h1.696zM18.166 19.729v.834a.512.512 0 1 1-1.024 0v-.834a.512.512 0 1 1 1.024 0z"
                          data-original="#ee8778"
                        ></path>
                        <path
                          fill="#ee8778"
                          d="M15.876 22.13a1.868 1.868 0 0 0 3.649 0z"
                          data-original="#ee8778"
                        ></path>
                        <path
                          fill="#312e4b"
                          d="M16.052 17.678a1.205 1.205 0 0 0-2.354 0zM21.71 17.678a1.205 1.205 0 0 0-2.353 0z"
                          data-original="#312e4b"
                          className=""
                        ></path>
                        <path
                          fill="#ab604b"
                          d="M24.787 13.083c-3.177 5.717-14.195 0-14.195 0v-1.07c0-1.053.39-2.082 1.153-2.804 3.974-3.792 8.877-.415 8.877-.415s2.547-1.07 3.742 1.045c.596 1.048.375 2.121.423 3.244z"
                          data-original="#ab604b"
                          className=""
                        ></path>
                        <path
                          fill="#8b4f4f"
                          d="M13.606 7.954a6.552 6.552 0 0 0-1.86 1.255c-.764.722-1.154 1.75-1.154 2.804v1.07s1.244.645 3.014 1.284V7.954z"
                          data-original="#8b4f4f"
                          className=""
                        ></path>
                        <path
                          fill="#312e4b"
                          d="m22.423 26.257 2.234 5.286h-2.234l1.367 2.235-6.254 7.737z"
                          data-original="#312e4b"
                          className=""
                        ></path>
                        <path
                          fill="#312e4b"
                          d="m12.65 26.257-2.234 5.286h2.234l-1.367 2.235 6.253 7.737z"
                          data-original="#312e4b"
                          className=""
                        ></path>
                        <path
                          fill="#c6c6f7"
                          d="m20.35 32.741-2.81 8.773-2.81-8.773 2.81-1.993z"
                          data-original="#c6c6f7"
                          className=""
                        ></path>
                        <path
                          fill="#e83d62"
                          d="m18.196 32.95.44 5.13-1.096 3.434-1.097-3.434.44-5.13-.656-1.274 1.313-.928 1.305.928z"
                          data-original="#e83d62"
                          className=""
                        ></path>
                        <path
                          fill="#312e4b"
                          d="M29.364 37.322v1.227a.272.272 0 0 1-.268.277h-5.632a.272.272 0 0 1-.268-.277v-1.227c0-.154.122-.276.268-.276h5.632c.146 0 .268.122.268.276z"
                          data-original="#312e4b"
                          className=""
                        ></path>
                        <path
                          fill="#e83d62"
                          d="M41.65 3.942v6.75c0 .798-.652 1.45-1.45 1.45h-7.54l-1.756 1.588c-.291.264-.756.014-.694-.381l.188-1.207h-1.263a1.426 1.426 0 0 1-1.422-1.43V3.97c0-.798.652-1.45 1.45-1.45h11.065c.784 0 1.422.638 1.422 1.422z"
                          data-original="#e83d62"
                          className=""
                        ></path>
                        <path
                          fill="#ce2955"
                          d="M30.842 12.141h-1.71c-.78 0-1.42-.64-1.42-1.43v-6.74c0-.8.65-1.45 1.45-1.45h1.71c-.8 0-1.45.65-1.45 1.45v6.74c0 .79.64 1.43 1.42 1.43zM39.134 5.348a.387.387 0 0 1-.396.385h-.93a.384.384 0 0 1-.384-.385c0-.218.172-.39.384-.39h.93c.224 0 .396.172.396.39z"
                          data-original="#ce2955"
                          className=""
                        ></path>
                        <path
                          fill="#ce2955"
                          d="M38.985 9.32a.38.38 0 0 1-.385.384h-7.47a.39.39 0 0 1-.39-.385.39.39 0 0 1 .39-.39h7.47c.218 0 .385.172.385.39zM30.74 5.348c0-.218.173-.39.385-.39h5.254c.213 0 .385.172.385.39a.384.384 0 0 1-.385.385h-5.254a.384.384 0 0 1-.385-.385zM38.985 7.334a.38.38 0 0 1-.385.384h-7.47a.39.39 0 0 1-.39-.384.39.39 0 0 1 .39-.39h7.47c.218 0 .385.172.385.39z"
                          data-original="#ce2955"
                          className=""
                        ></path>
                        <path
                          fill="#c7754f"
                          d="M50.5 45.381c0 .769-.619 1.387-1.387 1.387H3.887a1.383 1.383 0 0 1-1.386-1.387c0-.76.618-1.386 1.386-1.386h45.226c.768 0 1.386.626 1.386 1.386z"
                          data-original="#c7754f"
                        ></path>
                        <path
                          fill="#ab604b"
                          d="M14.28 46.768H3.89a1.385 1.385 0 1 1 0-2.77h10.39c-.77 0-1.38.62-1.38 1.38 0 .77.61 1.39 1.38 1.39z"
                          data-original="#ab604b"
                        ></path>
                        <path
                          fill="#ffaf93"
                          d="M35.11 24.901a2.468 2.468 0 1 1-4.935 0 2.468 2.468 0 0 1 4.935 0zM45.536 24.901a2.468 2.468 0 1 1-4.935 0 2.468 2.468 0 0 1 4.935 0zM33.991 31.516l.72 3.556h6.092l.718-3.556z"
                          data-original="#ffaf93"
                        ></path>
                        <path
                          fill="#65b9ff"
                          d="M50.5 42.451v8.029H24.93V42.45a5.704 5.704 0 0 1 5.706-5.705h14.162a5.7 5.7 0 0 1 5.7 5.705z"
                          data-original="#65b9ff"
                        ></path>
                        <path
                          fill="#3e7fff"
                          d="M34.443 36.746a5.701 5.701 0 0 0-5.704 5.703v8.031h-3.808v-8.03a5.701 5.701 0 0 1 5.704-5.704z"
                          data-original="#3e7fff"
                        ></path>
                        <path
                          fill="#deddff"
                          d="M43.051 35.87v.874H32.148v-.873c0-.962.78-1.742 1.742-1.742h7.42c.962 0 1.741.78 1.741 1.742z"
                          data-original="#deddff"
                        ></path>
                        <path
                          fill="#c6c6f7"
                          d="M35.593 34.127c-.96 0-1.739.78-1.739 1.744v.875H32.15v-.875c0-.965.78-1.744 1.739-1.744z"
                          data-original="#c6c6f7"
                        ></path>
                        <path
                          fill="#5b5e8b"
                          d="M42.583 30.892c-1.326 1.771-3.132 2.637-5.38 2.347-4.81-.619-6.507-6.893-6.444-11.752.025-1.854 1.24-3.716 2.797-4.092.774-.186 1.385-.599 2.05-.961.891-.487 1.941-.814 3.01-.469l-.36.145c2.652.17 5.42 1.054 6.036 3.644 1.373 5.772-.635 9.703-1.71 11.138z"
                          data-original="#5b5e8b"
                        ></path>
                        <path
                          fill="#312e4b"
                          d="M38.732 33.257c-.482.056-.992.05-1.53-.017-4.802-.624-6.51-6.876-6.444-11.754.028-1.85 1.24-3.718 2.798-4.093 1.645-.394 2.81-1.968 4.84-1.497-1.384.282-2.14 1.184-3.449 1.497-1.553.375-2.77 2.243-2.798 4.093-.057 4.892 1.657 11.132 6.443 11.754l.14.017z"
                          data-original="#312e4b"
                        ></path>
                      </g>
                    </svg>
                  </span>
                  <h2 className="text-center relative  mx-auto   text-3xl  font-semibold    pb-2 dark:text-[#e2e6ed] ">
                    WE CONSULT
                  </h2>
                  <div>
                    <p className=" dark:text-[#c9d8f8]   py-3  text-justify ">
                      We raise awareness among people to make them aware of
                      their rights and stop violent activities that happen
                      towards women.
                    </p>
                  </div>
                </div>
              </div>

              <div
                onClick={() => {
                  navigate("/charity&aid");
                }}
                className="z-10 cursor-pointer wings-div rounded-md max-w-[390px] bg-[#ffffff]  dark:bg-[#182c49] border border-[#9bbcdfb0] dark:border-none hover:shadow-[0px_4px_15px] hover:shadow-[#5b5ac1]    shadow-[0px_1px_3px] shadow-[#f2eaea4d] dark:shadow-none dark:hover:shadow-[#5b5ac1]  dark:hover:shadow-[0px_4px_15px] min-h-[200px] lg:flex-1"
              >
                <div className="px-5 lg:py-6 py-5 dark:text-white">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      width={80}
                      height={80}
                      className="mx-auto"
                      x="0"
                      y="0"
                      viewBox="0 0 506.7 471.1"
                    >
                      <g>
                        <path
                          fill="#02648e"
                          d="M120.2 0h358.2c15.7 0 28.4 12.7 28.4 28.4v206.1c0 15.7-12.7 28.4-28.4 28.4H120.2c-15.7 0-28.4-12.7-28.4-28.4V28.4C91.8 12.7 104.5 0 120.2 0z"
                          data-original="#02648e"
                          className=""
                        ></path>
                        <g fill="#d1d3d4">
                          <path
                            d="M242.1 40.5h158.6v12H242.1zM330 72.1h70.8v12H330zM242.1 72.1h56.1v12h-56.1zM350.9 164.2h49.9v12h-49.9zM242.1 164.2h82.8v12h-82.8zM242.4 105h101.8v12H242.4zM242.4 133h158.4v12H242.4z"
                            fill="#d1d3d4"
                            data-original="#d1d3d4"
                            className=""
                          ></path>
                        </g>
                        <path
                          fill="#efcdb1"
                          d="m226 316.5-51.1 13.2c-4.4 1.1-9.1.1-12.5-2.9l-39.7-33.6 24.8-27.7 32 28.6 38.2-9.9c6.4-1.6 12.9 2.2 14.6 8.6l2.3 9.1c1.6 6.4-2.2 12.9-8.6 14.6z"
                          data-original="#efcdb1"
                          className=""
                        ></path>
                        <path
                          fill="#58595b"
                          d="m211.3 280.6 51.6-89.8c1.2-2.1 3.9-2.8 6-1.6l2.8 1.6c2.1 1.2 2.8 3.9 1.6 6l-51.6 89.8c-1.2 2.1-3.9 2.8-6 1.6l-2.8-1.6c-2.1-1.2-2.8-3.9-1.6-6z"
                          data-original="#58595b"
                          className=""
                        ></path>
                        <path
                          fill="#d1d3d4"
                          d="M120.4 371.4v-73.2l3.5-14.1V270l33.9-.5v-19c0-16-12.9-28.9-28.9-28.9l-100 .5C13 222.2.1 235.1 0 251v19h27.8l-4.2 18.8 9.2 13.1.5 69.5z"
                          data-original="#d1d3d4"
                          className=""
                        ></path>
                        <path
                          fill="#99561f"
                          d="M138.7 219.2c-1.2 1.2-34.5-2.9-34.5-2.9-10.6-6.8 17.1-16.8 18.5-37.8.4-4.9.4-9.9 0-14.8-.5-8.6-2.1-17.1-4.7-25.3-11.5 1.9-23.2 1.7-34.7-.4-27.8-5-42.2-16.9-42.2-16.9s-3.2 17-5.1 37.2c-1.3 13.6 1.7 24.2 5.3 31.4 4.9 9.5 16 23.8 16 23.8s-50.9 9.9-50.9 2.8c0-27.2 1.7-47.5 6.3-78.3s23.4-59.7 62.2-58.7 61.5 26.1 65.9 67.5c3 28.7 7.6 62.8-2.1 72.4z"
                          data-original="#99561f"
                          className=""
                        ></path>
                        <path
                          fill="#efcdb1"
                          d="M57.3 204.5v19.4h1.5l21.8 49.7 21.9-49.7h1.2v-19.4z"
                          data-original="#efcdb1"
                          className=""
                        ></path>
                        <path
                          fill="#ff826e"
                          d="m33.3 371.4-24 99.7h155.8l-17.2-99.7"
                          data-original="#ff826e"
                        ></path>
                        <path
                          fill="#e6e7e8"
                          d="m51.5 222.3-15 16.5c-1.6 1.8-1.5 4.6.3 6.2.3.3.6.5 1 .7l14.6 7.4c2 1 3 3.4 2.1 5.5l-2.7 6.8c-.9 2.3.3 4.8 2.5 5.7h.1l21.1 7.4c2.3.8 4.8-.5 5.6-2.8.4-1.1.3-2.2-.2-3.2l-22.1-49.1c-1-2.2-3.6-3.2-5.8-2.2-.6.3-1.1.6-1.5 1.1z"
                          data-original="#e6e7e8"
                        ></path>
                        <path
                          fill="#e6e7e8"
                          d="m110.5 221.5 15 16.6c1.6 1.8 1.4 4.6-.4 6.2l-.9.6-14.6 7.4c-2 1.1-2.9 3.5-2.1 5.6l2.7 6.7c.9 2.2-.1 4.7-2.2 5.7-.1.1-.2.1-.4.1l-21 7.3c-2.3.8-4.8-.4-5.6-2.7-.4-1-.3-2.2.1-3.2l22.2-49.2c.9-2.2 3.5-3.2 5.7-2.2.5.2 1.1.6 1.5 1.1z"
                          data-original="#e6e7e8"
                        ></path>
                        <path
                          fill="#ffc700"
                          d="M57.3 270h89.8v101.4H57.3z"
                          data-original="#ffc700"
                        ></path>
                        <path
                          fill="#efcdb1"
                          d="M111.6 324.3V340c0 4.4-3.6 8-8 8H13.4c-7.3.1-13.3-5.9-13.4-13.2V270h27.8c-.4 2.4-.7 4.9-.7 7.3 0 8.5 2 16.9 5.7 24.6V315h2.9l36 1.8 10.7-18.3c2.8-2.6 6.9-3.2 10.3-1.5h.2c3.8 2 5.7 6.4 4.4 10.5l-2.6 8.7h8.9c4.4 0 8 3.6 8 8zM122.7 163.7v11.4c-.1 24.3-19.9 43.9-44.2 43.8-18.4-.1-34.8-11.6-41.1-28.8-1.8-7.8-2.7-18.2-1.4-31.8 1.9-20.2 5.1-37.2 5.1-37.2S55.5 133 83.3 138c11.5 2.1 23.2 2.3 34.7.4 2.6 8.2 4.2 16.7 4.7 25.3z"
                          data-original="#efcdb1"
                          className=""
                        ></path>
                        <g fill="#58595b">
                          <path
                            d="M108.1 158.3c0 3.2-2.6 5.8-5.8 5.8s-5.8-2.6-5.8-5.8 2.6-5.8 5.8-5.8 5.8 2.6 5.8 5.8zM64.5 158.9c0 3.2-2.6 5.8-5.8 5.8s-5.8-2.6-5.8-5.8 2.6-5.8 5.8-5.8 5.8 2.6 5.8 5.8zM78.7 198.4c-6.8 0-13-2.8-16.6-7.5-2-2.7-1.5-6.4 1.2-8.4 2.7-1.9 6.4-1.4 8.4 1.2 1 1.4 3.6 2.7 7 2.7s6.3-1.4 7.2-2.8c1.8-2.7 5.4-3.6 8.1-1.8.1 0 .1.1.2.1 2.8 1.8 3.5 5.5 1.7 8.3-3.4 5.1-9.9 8.2-17.2 8.2z"
                            fill="#58595b"
                            data-original="#58595b"
                            className=""
                          ></path>
                        </g>
                        <path
                          fill="#efcdb1"
                          d="M475.8 336.1c-1.7 3.2-4 6.2-6.8 8.6l-9 9v9h-52.6v-9c-5.3-4.6-14.5-10.8-18-17.6z"
                          data-original="#efcdb1"
                          className=""
                        ></path>
                        <path
                          fill="#503d31"
                          d="M479.4 281.4v40.5c0 5 5.8 9.9 3.5 14.2h-99.3c-.9-1.7 4.4-12.4 4.4-14.2v-40.5c0-24.2 19.6-43.8 43.8-43.8h3.8c24.2 0 43.8 19.6 43.8 43.8z"
                          data-original="#503d31"
                        ></path>
                        <g fill="#58595b">
                          <path
                            d="M403.9 306.7h12v29.4h-12zM427.7 306.7h12v29.4h-12zM453.2 306.7h12v29.4h-12z"
                            fill="#58595b"
                            data-original="#58595b"
                            className=""
                          ></path>
                        </g>
                        <path
                          fill="#efcdb1"
                          d="M346.9 308.4v13.5c0 8.7-3.8 17.1-10.4 22.8l-9 9v9H275v-9c-6.6-5.7-19.4-14-19.4-22.7v-22.2l22.4 19.4h45.4z"
                          data-original="#efcdb1"
                          className=""
                        ></path>
                        <path
                          fill="#503d31"
                          d="M346.9 281.4v27l-23.5 19.8H278l-22.5-19.4v-27.4c0-24.2 19.6-43.8 43.8-43.8h3.8c24.2 0 43.8 19.6 43.8 43.8z"
                          data-original="#503d31"
                        ></path>
                        <path
                          fill="#ff826e"
                          d="M268.3 362.8h65.9c19.4 0 35.2 15.8 35.2 35.2v73.1H233.1v-73.2c.1-19.4 15.8-35.1 35.2-35.1z"
                          data-original="#ff826e"
                        ></path>
                        <path
                          fill="#503d31"
                          d="M326.8 384.7h-51.5c-13.8 0-25.3 10.4-26.7 24.1l-6.5 62.3H360l-6.5-62.3c-1.4-13.7-12.9-24.1-26.7-24.1z"
                          data-original="#503d31"
                        ></path>
                        <path
                          fill="#ff826e"
                          d="M404.6 362.8h65.9c19.4 0 35.2 15.8 35.2 35.2v73.1H369.4v-73.2c.1-19.4 15.8-35.1 35.2-35.1z"
                          data-original="#ff826e"
                        ></path>
                        <path
                          fill="#503d31"
                          d="M463.1 384.7h-51.5c-13.8 0-25.3 10.4-26.7 24.1l-6.5 62.3h117.9l-6.5-62.3c-1.4-13.7-12.9-24.1-26.7-24.1z"
                          data-original="#503d31"
                        ></path>
                      </g>
                    </svg>
                  </span>
                  <h1 className="text-center text-3xl  font-semibold   pb-2 dark:text-[rgb(226,230,237)]">
                    WE SERVE
                  </h1>
                  <div>
                    <p className="  dark:text-[#c9d8f8] py-3  text-justify  ">
                      We arrange charity programs for people in need to provide
                      monetary support .
                    </p>
                  </div>
                </div>
              </div>

              <div
                onClick={() => {
                  navigate("/blood-donation");
                }}
                className="z-10 cursor-pointer wings-div rounded-md max-w-[390px] bg-[#ffffff]  dark:bg-[#182c49] border border-[#9bbcdfb0] dark:border-none hover:shadow-[0px_4px_15px] hover:shadow-[#5b5ac1]    shadow-[0px_1px_3px] shadow-[#f2eaea4d] dark:shadow-none dark:hover:shadow-[#5b5ac1]  dark:hover:shadow-[0px_4px_15px] min-h-[200px] lg:flex-1"
              >
                <div className="px-5 lg:py-6 py-5 dark:text-white">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      width={80}
                      height={80}
                      x="0"
                      y="0"
                      className="mx-auto"
                      viewBox="0 0 126.006 125.984"
                    >
                      <g>
                        <path
                          fill="#d14b62"
                          d="M81.191 61.977c-8.06-26.88-27.01-50.26-38.2-60.95-14.51 13.84-42.02 48.99-42.02 85.45 0 19.53 17.97 38.53 42 38.53 11.89 0 22.32-4.66 29.8-11.72-.34.01-.67.02-1.01.02z"
                          data-original="#d14b62"
                          className=""
                        ></path>
                        <path
                          fill="#c3ddda"
                          d="m96.541 96.257 11.62 5.83c1.096 5.368-.855 8.627-5.39 10.12l-12.62-6.31c-.365-5.928 1.835-9.208 6.39-9.64z"
                          data-original="#c3ddda"
                        ></path>
                        <path
                          fill="#d6eae8"
                          d="M17.411 81.197c-2.01 9.88-1.74 19.1 2.42 27.19-6.68-8.44-9.57-18.62-8.66-30.54 1.89 1.95 3.93 3.25 6.24 3.35z"
                          data-original="#d6eae8"
                        ></path>
                        <path
                          fill="#c3ddda"
                          d="M16.411 63.007c2.2 0 3.99 1.78 3.99 3.98s-1.79 3.99-3.99 3.99-3.98-1.79-3.98-3.99 1.78-3.98 3.98-3.98z"
                          data-original="#c3ddda"
                        ></path>
                        <path
                          fill="#c43b58"
                          d="M42.971 1.007c2 13 12 17 23 56s1.66 60.4 1.66 60.4.01 0 .01-.01c10.65-7.32 17.33-19.02 17.33-30.92 0-32.91-23-67.47-42-85.47z"
                          data-original="#c43b58"
                          className=""
                        ></path>
                        <path
                          fill="#087d99"
                          d="M81.191 61.977c9.99 3.8 17.1 13.47 17.1 24.8 0 3.34-.62 6.54-1.75 9.48-1.4 3.68-3.6 6.96-6.39 9.64a26.421 26.421 0 0 1-17.38 7.39c-.34.01-.67.02-1.01.02-14.66 0-26.54-11.87-26.54-26.53 0-14.65 11.88-26.53 26.54-26.53 3.32 0 6.5.61 9.43 1.73z"
                          data-original="#087d99"
                          className=""
                        ></path>
                        <path
                          fill="#c3ddda"
                          d="M71.761 67.037c10.9 0 19.74 8.84 19.74 19.74 0 10.91-8.84 19.75-19.74 19.75-10.91 0-19.75-8.84-19.75-19.75 0-10.9 8.84-19.74 19.75-19.74z"
                          data-original="#c3ddda"
                        ></path>
                        <path
                          fill="#ef9d26"
                          d="M81.131 76.847c1.48.57 2.1 1.98 1.39 3.15l-10.58 17.37c-.49.8-1.54 1.33-2.67 1.33h-.04c-1.19-.02-2.23-.58-2.69-1.43l-4.33-7.97c-.31-.58-.32-1.22-.03-1.8.29-.59.85-1.05 1.58-1.3.38-.13.77-.19 1.18-.19 1.18 0 2.26.56 2.72 1.43l1.76 3.24 7.75-12.73c.5-.81 1.55-1.33 2.68-1.33.45 0 .88.08 1.28.23z"
                          data-original="#ef9d26"
                        ></path>
                        <path
                          fill="#604533"
                          d="M108.161 102.087c-3.99 1.87-5.78 5.24-5.39 10.12l16.77 8.38 5.18-10.18z"
                          data-original="#604533"
                        ></path>
                        <path
                          fill="#472d1c"
                          d="M124.721 110.407c1.05 4.49-1.28 9.13-5.18 10.18-1.7-3.23 2.02-10.18 5.18-10.18z"
                          data-original="#472d1c"
                        ></path>
                        <g fill="#3a322b">
                          <path
                            d="M51.041 86.756c0 11.438 9.306 20.745 20.745 20.745s20.745-9.307 20.745-20.745-9.307-20.745-20.745-20.745-20.745 9.306-20.745 20.745zm39.49 0c0 10.336-8.409 18.745-18.745 18.745s-18.745-8.409-18.745-18.745 8.409-18.745 18.745-18.745 18.745 8.409 18.745 18.745z"
                            fill="#3a322b"
                            data-original="#3a322b"
                            className=""
                          ></path>
                          <path
                            d="M68.572 86.935c-.638-1.185-2.054-1.95-3.607-1.95-.517 0-1.02.083-1.495.245-.979.334-1.744.971-2.154 1.791a2.91 2.91 0 0 0 .048 2.727l4.328 7.972c.635 1.176 1.997 1.923 3.555 1.95h.05c1.473 0 2.856-.711 3.525-1.81L83.4 80.493a2.898 2.898 0 0 0 .283-2.48c-.322-.942-1.11-1.714-2.166-2.119a4.603 4.603 0 0 0-1.642-.299c-1.49 0-2.842.692-3.527 1.81l-6.847 11.243zm1.734 4.237 7.749-12.725c.443-.723 1.766-1.059 2.748-.686.498.191.857.518.987.897a.902.902 0 0 1-.1.794L71.113 96.82c-.309.508-1.039.85-1.816.85h-.023c-.808-.017-1.539-.377-1.822-.902l-4.33-7.976a.9.9 0 0 1-.017-.875c.174-.349.534-.631 1.013-.794 1.001-.344 2.299.026 2.695.764l1.761 3.242a.998.998 0 0 0 .854.522c.366 0 .692-.175.878-.479z"
                            fill="#3a322b"
                            data-original="#3a322b"
                            className=""
                          ></path>
                          <path
                            d="M125.719 110.152a1 1 0 0 0-.525-.665L97.806 95.738a27.407 27.407 0 0 0 1.512-8.982c0-11.56-7.164-21.472-17.283-25.546C74.312 35.883 56.599 12.584 43.706.277a1 1 0 0 0-1.381 0C38.804 3.638 26.477 16.06 15.703 34.748 5.284 52.822 0 70.219 0 86.454c0 19.091 17.278 39.53 43 39.53 11.34 0 22.028-4.167 30.186-11.732 6.592-.332 12.58-2.994 17.156-7.176l28.783 14.383a1.001 1.001 0 0 0 .707.071c4.441-1.192 7.082-6.297 5.887-11.378zm-7.56 8.589-14.379-7.185c-.177-3.97 1.276-6.714 4.426-8.359l14.114 7.086c-.88.635-1.728 1.579-2.458 2.786-.936 1.549-1.744 3.701-1.703 5.672zm-12.088-16.616c-2.783 1.889-4.229 4.709-4.317 8.419l-9.913-4.953a27.601 27.601 0 0 0 5.242-7.978zm-8.753-15.369c0 14.078-11.454 25.532-25.532 25.532-14.079 0-25.532-11.454-25.532-25.532s11.454-25.532 25.532-25.532c14.078-.001 25.532 11.454 25.532 25.532zM2 86.454C2 69.89 10.659 33.668 43.015 2.388 55.424 14.453 71.998 36.42 79.681 60.383a27.427 27.427 0 0 0-7.895-1.159c-15.181 0-27.532 12.351-27.532 27.532 0 14.641 11.487 26.644 25.921 27.481-7.553 6.299-17.092 9.747-27.175 9.747-24.526 0-41-19.405-41-37.53zm118.213 32.813c-.217-1.378.281-3.377 1.361-5.164.719-1.19 1.592-2.089 2.367-2.49.366 3.27-1.183 6.445-3.728 7.654z"
                            fill="#3a322b"
                            data-original="#3a322b"
                            className=""
                          ></path>
                          <path
                            d="M16.445 61.984c-2.748 0-4.983 2.235-4.983 4.983s2.235 4.983 4.983 4.983 4.983-2.235 4.983-4.983-2.235-4.983-4.983-4.983zm0 7.967c-1.645 0-2.983-1.338-2.983-2.983s1.338-2.983 2.983-2.983 2.983 1.338 2.983 2.983-1.338 2.983-2.983 2.983zM18.416 81.372a.999.999 0 0 0-.936-1.198c-1.836-.081-3.658-1.076-5.569-3.042a.998.998 0 0 0-1.714.621c-.924 12.116 2.064 22.625 8.882 31.235a1 1 0 0 0 1.674-1.078c-3.725-7.245-4.489-15.926-2.337-26.538zM16 100.322c-2.897-6.051-4.213-12.857-3.927-20.342 1.379 1.097 2.762 1.776 4.176 2.055-1.274 6.808-1.36 12.86-.249 18.287z"
                            fill="#3a322b"
                            data-original="#3a322b"
                            className=""
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </span>
                  <h1 className=" text-center text-3xl  font-semibold   pb-2 dark:text-[#e2e6ed] ">
                    WE FIND
                  </h1>
                  <div>
                    <p className="  dark:text-[#c9d8f8] py-3  text-justify  ">
                      We find and provide blood for patients in need, and aim to
                      motivate people to donate blood.
                    </p>
                  </div>
                </div>
              </div>

              <div
                onClick={() => {
                  navigate("/kin-school");
                }}
                className="z-10 cursor-pointer wings-div rounded-md max-w-[390px] bg-[#ffffff]  dark:bg-[#182c49] border border-[#9bbcdfb0] dark:border-none hover:shadow-[0px_4px_15px] hover:shadow-[#5b5ac1]    shadow-[0px_1px_3px] shadow-[#f2eaea4d] dark:shadow-none dark:hover:shadow-[#5b5ac1]  dark:hover:shadow-[0px_4px_15px] min-h-[200px] lg:flex-1"
              >
                <div className="px-5 lg:py-6 py-5 dark:text-white ">
                  <h1 className="text-center text-3xl  font-semibold   pb-2 dark:text-[#e2e6ed] ">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        width={80}
                        height={80}
                        className="mx-auto"
                        x="0"
                        y="0"
                        viewBox="0 0 377.925 377.925"
                      >
                        <g>
                          <path
                            fill="#fed19a"
                            d="m167.885 288.099-2.018 44.502H84.352a80.715 80.715 0 0 0-22.123-59.052c-23.554-24.481-42.06-49.125-51.981-74.193a36.891 36.891 0 0 1-2.521-14.13V109.91a14.599 14.599 0 0 1 11.592-14.124c7.333-1.019 14.146 3.979 15.376 11.279l10.681 69.822a95.883 95.883 0 0 0 38.472 47.102c4.544 3.113 9.591 6.562 15.393 2.862a9.44 9.44 0 0 0-.838-12.453l-23.805-18.842a20.308 20.308 0 0 1-8.418-22.944 8.77 8.77 0 0 1 13.638-5.064l47.945 34.24a62.706 62.706 0 0 1 21.2 19.267 105.806 105.806 0 0 1 18.922 67.044z"
                            data-original="#fed19a"
                          ></path>
                          <path
                            fill="#575b6d"
                            d="M77.421 330.142h91.034a5.835 5.835 0 0 1 5.835 5.835v35.47a5.835 5.835 0 0 1-5.835 5.835H77.421a5.835 5.835 0 0 1-5.835-5.835v-35.47a5.835 5.835 0 0 1 5.835-5.835z"
                            data-original="#575b6d"
                          ></path>
                          <circle
                            cx="154.286"
                            cy="353.712"
                            r="7.171"
                            fill="#828a9e"
                            data-original="#828a9e"
                          ></circle>
                          <path
                            fill="#fed19a"
                            d="m210.04 288.099 2.018 44.502h81.515a80.715 80.715 0 0 1 22.123-59.052c23.554-24.481 42.06-49.125 51.981-74.193 1.757-4.5 2.614-9.3 2.521-14.13V109.91a14.599 14.599 0 0 0-11.592-14.124c-7.333-1.019-14.146 3.979-15.376 11.279l-10.709 69.822a95.889 95.889 0 0 1-38.444 47.102c-4.544 3.113-9.591 6.562-15.393 2.862a9.44 9.44 0 0 1 .838-12.453l23.805-18.842a20.308 20.308 0 0 0 8.418-22.944 8.77 8.77 0 0 0-13.638-5.064l-47.94 34.24a62.703 62.703 0 0 0-21.2 19.266 105.818 105.818 0 0 0-18.927 67.045z"
                            data-original="#fed19a"
                          ></path>
                          <path
                            fill="#575b6d"
                            d="M206.754 330.142h92.275a5.914 5.914 0 0 1 5.914 5.914v35.956a5.914 5.914 0 0 1-5.914 5.914h-92.275a5.914 5.914 0 0 1-5.914-5.914v-35.956a5.914 5.914 0 0 1 5.914-5.914z"
                            data-original="#575b6d"
                          ></path>
                          <circle
                            cx="221.118"
                            cy="354.763"
                            r="7.266"
                            fill="#828a9e"
                            data-original="#828a9e"
                          ></circle>
                          <path
                            fill="#ef5261"
                            d="M231.442.001a63.604 63.604 0 0 0-42.479 16.248c-26.285-23.5-66.644-21.243-90.145 5.041a63.844 63.844 0 0 0-16.249 42.631c0 66.212 106.393 136.755 106.393 136.755s106.556-70.309 106.393-136.755c-.03-35.287-28.626-63.886-63.913-63.92z"
                            data-original="#ef5261"
                            className=""
                          ></path>
                        </g>
                      </svg>
                    </span>
                    WE EDUCATE
                  </h1>
                  <div>
                    <p className=" dark:text-[#c9d8f8] py-3  text-justify  ">
                      We educate children living around the{" "}
                      <span className="font-semibold">SUST</span> area, with a
                      view to pass on the light of education to every corner of
                      society.
                    </p>
                  </div>
                </div>
              </div>
              <div
                onClick={() => {
                  navigate("/winter-cloth-distribution");
                }}
                className="z-10 cursor-pointer wings-div rounded-md max-w-[390px] bg-[#ffffff]  dark:bg-[#182c49] border border-[#9bbcdfb0] dark:border-none hover:shadow-[0px_4px_15px] hover:shadow-[#5b5ac1]    shadow-[0px_1px_3px] shadow-[#f2eaea4d] dark:shadow-none dark:hover:shadow-[#5b5ac1]  dark:hover:shadow-[0px_4px_15px] min-h-[200px] lg:flex-1"
              >
                <div className="px-5 lg:py-6 py-5 dark:text-white">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      width={80}
                      height={80}
                      x="0"
                      y="0"
                      viewBox="0 0 48 48"
                      className="mx-auto"
                    >
                      <g>
                        <g data-name="hand recieve cloathes">
                          <path
                            fill="#6fabe6"
                            d="M1 23h6v17H1z"
                            data-original="#6fabe6"
                          ></path>
                          <path
                            fill="#82bcf4"
                            d="M7 23c0 15.75-.1 15 0 15a4 4 0 0 1-4-4V23z"
                            data-original="#82bcf4"
                          ></path>
                          <path
                            fill="#f6ccaf"
                            d="M47 31a3 3 0 0 1-1.63 2.67C27.74 42.68 28.11 43 24.17 43c-2.86 0-4-.83-12-4.46C10.7 37.86 9.68 38 7 38V25c9.53-1.19 6.49-1.67 21.28 5.28a3 3 0 0 1 .48 5.14l13.87-7.09A3 3 0 0 1 47 31z"
                            data-original="#f6ccaf"
                          ></path>
                          <path
                            fill="#ffdec7"
                            d="M46.82 30c-.53 1.55-.32 1.09-17.55 9.9a10.21 10.21 0 0 1-5.1 1.1c-2.86 0-4-.83-12-4.46A5.82 5.82 0 0 0 10 36a1 1 0 0 1-1-1V24.75c7.17-.89 5.14-1.11 19.28 5.53a3 3 0 0 1 1.17 4.43c-.45.71-1.38 1.07.2.25 13.89-7.09 13-6.67 13.35-6.78A3 3 0 0 1 46.82 30z"
                            data-original="#ffdec7"
                          ></path>
                          <path
                            fill="#edb996"
                            d="M25.29 36.61 17.4 32.9a1 1 0 0 1 .86-1.8l7.89 3.71c1.69.79 2.29-1.11 3.3-.1-.45.71-1.38 1.07.2.25.78 1.52-2.39 2.6-4.36 1.65z"
                            data-original="#edb996"
                          ></path>
                          <path
                            fill="#db5669"
                            d="m46 12-4 7-4-2.67V30.7l-9.24 4.72a3 3 0 0 0-.48-5.14L18 25.45v-9.12L14 19l-4-7 8-7h20z"
                            data-original="#db5669"
                          ></path>
                          <path
                            fill="#f26674"
                            d="M46 12c-3.87 6.76-3.25 5.67-4 7l-4-2.67v12.12l-6.19 3.17a5 5 0 0 0-2.68-3.15L20 24.18v-7.85l-2 1.34v-1.34L15.45 18 12 12l8-7h18z"
                            data-original="#f26674"
                            className=""
                          ></path>
                          <path
                            fill="#c4455e"
                            d="M32 5c0 1.32.11 2.65-1.28 3.93A4 4 0 0 1 24 6V5z"
                            data-original="#c4455e"
                          ></path>
                          <path
                            fill="#db5669"
                            d="M32 5c0 1.32.11 2.65-1.28 3.93A4 4 0 0 1 26 5z"
                            data-original="#db5669"
                          ></path>
                          <path
                            d="M47.56 29.18a4 4 0 0 0-5.39-1.74L39 29.06V18.2l2.45 1.63a1 1 0 0 0 1.42-.33l4-7a1 1 0 0 0-.21-1.25C38 3.66 38.53 4 38 4c-21.8 0-20.25-.11-20.66.25l-8 7a1 1 0 0 0-.21 1.25c4.29 7.5 4 7.34 4.64 7.47s.64 0 3.23-1.77V24c-3.11-1.12-5.19-.57-9-.09V23a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-1c1.65 0 2.56-.11 3.77.45 15 6.8 11.12 6.84 34.06-4.89a4 4 0 0 0 1.73-5.38zM31 6a3 3 0 0 1-6 0zM14.34 17.57l-3.07-5.36L18.38 6H23a5 5 0 0 0 10 0h4.62l7.11 6.21-3.07 5.36c-3.21-2.14-3.43-2.5-4.13-2.12S37 15.36 37 30.08l-6 3.07a4 4 0 0 0-2.29-3.77L19 24.82c0-8.86.22-9-.53-9.37s-.9-.03-4.13 2.12zM6 39H2V24h4zm38.92-6.22C27.42 41.72 27.56 42 24.72 42a9.32 9.32 0 0 1-4.26-.8C10.34 36.61 12 37 8 37V25.88c8.2-1 5.41-1.48 19.85 5.3a2 2 0 0 1 .95 2.68 2 2 0 0 1-2.65.94l-7.89-3.71a1 1 0 0 0-.86 1.82l7.89 3.7a3.92 3.92 0 0 0 3.93-.3l13.86-7.09a2 2 0 1 1 1.84 3.56z"
                            fill="#000000"
                            data-original="#000000"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </span>
                  <h1 className=" text-center  text-3xl  font-semibold   pb-2 dark:text-[#e2e6ed] ">
                    WE PROVIDE CARE
                  </h1>
                  <div>
                    <p className=" dark:text-[#c9d8f8] py-3  text-justify  ">
                      We provide winter clothes for cold-stricken poor families
                      living in the remote corners of the country.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* kin achieve */}
          <section className="bg-[#fff] border-b   border dark:bg-[#151f32cd]  dark:text-[#cacfd5] md:text-[20px] text-[18px] dark:border-[#103b1d] text-black border-[#eeeeee6a]  ">
            <div className="   lg:py-16 py-8 md:py-12 mx-auto   xl:w-[1200px] ">
              {/* title */}
              <div className="py-5 lg:px-7 md:px-24 px-4">
                <AnimationOnScroll animateIn="animate__flipInX" duration={2}>
                  <h2 className=" font-serif dark:text-[#fff] lg:text-6xl text-4xl md:text-5xl font-bold text-center pt-2 lg:pt-0 pb-4 lg:pb-0">
                    What We Have{" "}
                    <span className="text-[#f41e1e] dark:text-[#fc535a]">
                      Achieved
                    </span>
                  </h2>
                </AnimationOnScroll>
              </div>

              <div className="w-full flex lg:px-7 md:px-24 px-4">
                <div className="w-1/2">
                  <div className="col-span-2 py-6 lg:py-0 ">
                    <p className="text-[#0c0d0ebd] text-2xl md:text-3xl font-bold dark:text-white my-2 lg:pb-7  md:pb-8 pb-8">
                      During the Sylhet flood of 2022
                    </p>
                  </div>
                  <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1">
                    <div className="pb-12">
                      <h1 className="lg:text-2xl md:text-2xl font-bold py-2 text-[19px] text-[#24272abd] dark:text-[#b6bfcb]      ">
                        ৳&nbsp;
                        <CountUp
                          isCounting
                          start={0}
                          end={880530}
                          duration={3.2}
                          thousandsSeparator=","
                          enableScrollSpy={() => {
                            return false;
                          }}
                          easing="easeInCubic"
                          onComplete={() => {
                            return { shouldRepeat: true, delay: 3 };
                          }}
                        />{" "}
                      </h1>
                      <p className="text-[19px]  md:text-xl text-[#242a50] font-bold dark:text-[#f5d9d3] ">
                        Donation Managed
                      </p>
                    </div>
                    <div className="pb-12">
                      <h1 className="lg:text-2xl md:text-2xl font-bold py-2 text-[19px] text-[#292f33bd] dark:text-[#b6bfcb]     ">
                        <CountUp
                          isCounting
                          start={0}
                          end={1600}
                          duration={3.2}
                          thousandsSeparator=","
                          enableScrollSpy={true}
                          easing="easeInCubic"
                          onComplete={() => {
                            return { shouldRepeat: true, delay: 3 };
                          }}
                        />
                        <span>+</span>
                      </h1>
                      <p className="text-[19px]  md:text-xl text-[#242a50] font-bold dark:text-[#f5d9d3]">
                        Food packages
                      </p>
                    </div>

                    <div className="pb-12">
                      <h1 className="lg:text-2xl md:text-2xl font-bold py-2 text-[19px] text-[#292f33bd] dark:text-[#b6bfcb]     ">
                        <CountUp
                          isCounting
                          start={0}
                          end={200}
                          duration={3.2}
                          thousandsSeparator=","
                          enableScrollSpy={true}
                          easing="easeInCubic"
                          onComplete={() => {
                            return { shouldRepeat: true, delay: 3 };
                          }}
                        />
                        <span>+</span>
                      </h1>
                      <p className="text-[19px]  md:text-xl text-[#242a50] font-bold dark:text-[#f5d9d3]">
                        Sanitary
                      </p>
                    </div>

                    <div className="pb-12">
                      <h1 className="lg:text-2xl md:text-2xl font-bold py-2 text-[19px] text-[#292f33bd] dark:text-[#b6bfcb]     ">
                        <CountUp
                          isCounting
                          start={0}
                          end={21}
                          duration={3.2}
                          thousandsSeparator=","
                          enableScrollSpy={true}
                          easing="easeInCubic"
                          onComplete={() => {
                            return { shouldRepeat: true, delay: 3 };
                          }}
                        />
                      </h1>
                      <p className="text-[19px]  md:text-xl text-[#242a50] font-bold dark:text-[#f5d9d3]">
                        Villages reached
                      </p>
                    </div>
                  </div>
                </div>
                <div className="divider divider-horizontal pb-5 "></div>
                <div className="w-1/2">
                  <div className=" py-6 lg:py-0 ">
                    <p className="text-[#0c0d0ebd] text-2xl md:text-3xl font-bold dark:text-white my-2 lg:pb-7  md:pb-8 pb-8 ">
                      Throughout the COVID-19 pandemic
                    </p>
                  </div>
                  <div className="grid lg:grid-cols-2  grid-cols-1">
                    <div className="pb-12">
                      <h1 className="lg:text-2xl md:text-2xl font-bold py-2 text-[19px] text-[#292f33bd] dark:text-[#b6bfcb]     ">
                        ৳&nbsp;
                        <CountUp
                          isCounting
                          start={0}
                          end={360593}
                          duration={3.2}
                          thousandsSeparator=","
                          enableScrollSpy={true}
                          easing="easeInCubic"
                          onComplete={() => {
                            return { shouldRepeat: true, delay: 3 };
                          }}
                        />
                      </h1>
                      <p className="text-[19px]  md:text-xl text-[#242a50] font-bold dark:text-[#f5d9d3]">
                        Donation Managed
                      </p>
                    </div>

                    <div className="pb-12">
                      <h1 className="lg:text-2xl md:text-2xl font-bold py-2 text-[19px] text-[#292f33bd] dark:text-[#b6bfcb]    ">
                        <CountUp
                          isCounting
                          start={0}
                          end={727}
                          duration={3.2}
                          thousandsSeparator=","
                          enableScrollSpy={true}
                          easing="easeInCubic"
                          onComplete={() => {
                            return { shouldRepeat: true, delay: 3 };
                          }}
                        />
                        <span>+</span>
                      </h1>
                      <p className="text-[19px]  md:text-xl text-[#242a50] font-bold dark:text-[#f5d9d3]">
                        Food Packages
                      </p>
                    </div>
                    <div className="pb-12">
                      <h1 className="lg:text-2xl md:text-2xl font-bold py-2 text-[19px] text-[#292f33bd] dark:text-[#b6bfcb]     ">
                        ৳&nbsp;
                        <CountUp
                          isCounting
                          start={0}
                          end={3256}
                          duration={3.2}
                          thousandsSeparator=","
                          enableScrollSpy={true}
                          easing="easeInCubic"
                          onComplete={() => {
                            return { shouldRepeat: true, delay: 3 };
                          }}
                        />
                        <span>+</span>
                      </h1>
                      <p className="text-[19px]  md:text-xl text-[#242a50] font-bold dark:text-[#f5d9d3]">
                        Clothes
                      </p>
                    </div>

                    <div className="pb-12">
                      <h1 className="flex justify-start text-center lg:text-2xl md:text-2xl  text-[19px] font-bold py-2 items-center text-[#292f33bd] dark:text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          version="1.1"
                          width="24"
                          height="24"
                          x="0"
                          y="0"
                          className="dark:fill-[#fff]"
                          viewBox="0 0 488.85 488.85"
                        >
                          <g>
                            <path d="M244.425 98.725c-93.4 0-178.1 51.1-240.6 134.1-5.1 6.8-5.1 16.3 0 23.1 62.5 83.1 147.2 134.2 240.6 134.2s178.1-51.1 240.6-134.1c5.1-6.8 5.1-16.3 0-23.1-62.5-83.1-147.2-134.2-240.6-134.2zm6.7 248.3c-62 3.9-113.2-47.2-109.3-109.3 3.2-51.2 44.7-92.7 95.9-95.9 62-3.9 113.2 47.2 109.3 109.3-3.3 51.1-44.8 92.6-95.9 95.9zm-3.1-47.4c-33.4 2.1-61-25.4-58.8-58.8 1.7-27.6 24.1-49.9 51.7-51.7 33.4-2.1 61 25.4 58.8 58.8-1.8 27.7-24.2 50-51.7 51.7z"></path>
                          </g>
                        </svg>
                        &nbsp;
                        <CountUp
                          isCounting
                          start={0}
                          end={3256}
                          duration={3.2}
                          thousandsSeparator=","
                          enableScrollSpy={true}
                          easing="easeInCubic"
                          onComplete={() => {
                            return { shouldRepeat: true, delay: 3 };
                          }}
                        />
                        <span className=" lg:text-2xl md:text-2xl font-bold py-2 text-[19px] text-[#292f33bd] dark:text-[#b6bfcb]     px-1">
                          K+
                        </span>
                      </h1>
                      <p className="text-[19px]  md:text-xl text-[#242a50] font-bold dark:text-[#f5d9d3]">
                        FB live
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* our achievements */}
          <section className="dark:border-[#20145a] text-black    dark:bg-[#151f32]  dark:text-[#cacfd5]  md:text-[20px] text-[18px] bg-[#fcfdfe] border-[#eeeeee90] border-b ">
            <div className=" lg:py-16 py-8 md:py-12 mx-auto  xl:w-[1200px] text-justify px-4">
              <div className=" m-auto">
                {/* title */}
                <AnimationOnScroll animateIn="animate__flipInX" duration={2}>
                  <h1 className="font-serif dark:text-[#fff] lg:text-5xl text-[36px] sm:text-5xl font-bold text-center pt-2 lg:pt-0">
                    Our{" "}
                    <span className="font-serif text-[#f41e1e] dark:text-[#fc535a]">
                      Achievements
                    </span>
                  </h1>
                </AnimationOnScroll>

                <p className="  md:pt-6 pt-4      text-justify ">
                  <span className="text-red-600 font-['Arial'] dark:text-red-600">
                    KIN
                  </span>{" "}
                  was awarded the{" "}
                  <span className="font-bold">Joy Bangla Youth Award</span> by{" "}
                  <span className="font-bold">Young Bangla </span>
                  for being one of the 50 best organizations among the other
                  1300 organizations. Additionally,{" "}
                  <span className="text-red-600 font-['Arial'] dark:text-red-600">
                    KIN
                  </span>{" "}
                  has been honored by{" "}
                  <span className="font-bold">SANDHANI (SOMC)</span> for 9 times
                  for being the best{" "}
                  <span className="font-semibold">
                    Non-Medical Blood Donation Organization
                  </span>
                  .
                </p>
              </div>
              <div>
                <div className="grid lg:grid-cols-2 gap-5 my-6 justify-items-center px-4">
                  <figure>
                    <PhotoProvider>
                      <PhotoView src="/images/homepage/joyBanglaAward.jpg">
                        <Image
                          src="/images/homepage/joyBanglaAward.jpg"
                          alt="joy bangla award kinsust kin school"
                          className="h-[350px] w-min md:w-full border-8 rounded-md border-[#ffffff] dark:border-[#32265a] cursor-pointer"
                          width={500}
                          height={500}
                          placeholder="blur"
                          blurDataURL="/images/homepage/joyBanglaAward.jpg"
                          loading="lazy"
                        />
                      </PhotoView>
                    </PhotoProvider>
                  </figure>
                  <figure>
                    <PhotoProvider>
                      <PhotoView src="/images/homepage/second.jpg">
                        <Image
                          src="/images/homepage/second.jpg"
                          alt="kinsust kin school award  "
                          className=" h-[350px] w-min md:w-full border-8 rounded-md border-[#ffffff] dark:border-[#32265a6f] cursor-pointer"
                          width={500}
                          height={500}
                          placeholder="blur"
                          blurDataURL="/images/homepage/second.jpg"
                          loading="lazy"
                        />
                      </PhotoView>
                    </PhotoProvider>
                    
                  </figure>
                </div>
              </div>
            </div>
          </section>

          {/* voluntary */}
          <section className="dark:border-[#073120] border-[#eeeeee97]   dark:bg-[#151f32bb]  dark:text-[#cacfd5]  py-10 md:px-7 text-black md:text-[20px] text-[18px] bg-[#fff] border-b  ">
            <div className="xl:w-[1200px] m-auto grid lg:grid-cols-2  gap-10      lg:py-16 py-8 md:py-12  ">
              <div>
                <AnimationOnScroll animateIn="animate__flipInX" duration={2}>
                  <h1 className="font-serif dark:text-[#fff] lg:text-5xl text-[36px] font-bold text-center pt-2 lg:pt-0 pb-4 lg:pb-0">
                    <span className="font-serif px-4">Become A </span>
                    <span className="dark:text-[#fc535a] text-[#f41e1e] font-serif">
                      Volunteer!
                    </span>
                  </h1>
                </AnimationOnScroll>

                <p className="lg:px-7 md:px-5 px-4   md:pt-6 pt-4     text-justify">
                  <span className="text-red-600 font-['Arial'] dark:text-red-600">
                    KIN
                  </span>{" "}
                  encourages everyone who wishes to work for the poor, helpless
                  people and bring a positive change in their lives to be a part
                  of it. Every year, we launch{" "}
                  <span className="font-bold">Organizing Week</span> where you
                  can collect our membership forms. Through a viva process, you
                  can be selected as our{" "}
                  <span className="font-bold">General Member</span>.
                </p>
                <p className="lg:px-7 md:px-5 px-4   md:pt-6 pt-4     text-justify">
                  The other most convenient way of doing so is by joining
                  <span className="text-red-600 font-['Arial'] dark:text-red-600">
                    {" "}
                    KIN
                  </span>{" "}
                  <span className="font-bold">School</span>. As the workforce of
                  this place, there are some young helpful students from{" "}
                  <span className="font-bold">SUST</span> who voluntarily come
                  and work for the children wholeheartedly.{" "}
                  <span className="text-red-600 font-['Arial'] dark:text-red-600">
                    KIN
                  </span>{" "}
                  encourages new faces every year to come and join them.
                </p>
              </div>
              <div className="self-center px-4 md:px-0">
                <figure>
                  <PhotoProvider>
                    <PhotoView src="/images/homepage/volunteer.jpeg">
                      <Image
                        src="/images/homepage/volunteer.jpeg"
                        alt="kinsust kin school volunteer"
                        className="shadow-xl border-8 rounded-md border-[#ffffff] dark:border-[#beb6d76f] cursor-pointer"
                        width={500}
                        height={500}
                        style={{ borderRadius: "022px 86px 0px 0140px" }}
                        placeholder="blur"
                        blurDataURL="/images/homepage/volunteer.jpeg"
                        loading="lazy"
                      />
                    </PhotoView>
                  </PhotoProvider>
                </figure>
              </div>
            </div>
          </section>

          {/* touch with us */}
          <section className=" dark:border-[#0d1825]  dark:bg-[#151f32]  dark:text-[#cacfd5] bg-[#f8fafc] border-b  py-16 md:text-[20px] text-[18px]  text-black  ">
            <div className=" xl:w-[1200px]   mx-auto   lg:py-16 py-8 md:py-12   text-justify px-4">
              <figure className="px-4">
                <PhotoProvider>
                  <PhotoView src="/images/homepage/getwithus.jpg">
                    <Image
                      src="/images/homepage/getwithus.jpg"
                      alt="kinsust kin school activities"
                      width={1000}
                      height={600}
                      className=" mx-auto rounded-md border-8  border-[#ffffff] dark:border-[#32265a6f] cursor-pointer"
                      placeholder="blur"
                      blurDataURL="/images/homepage/getwithus.jpg"
                      loading="lazy"
                    />
                  </PhotoView>
                </PhotoProvider>
              </figure>
            </div>
            <div className="md:w-[650px]   mx-auto px-4">
              <AnimationOnScroll animateIn="animate__flipInX" duration={2}>
                <h1 className="font-serif dark:text-[#fff] lg:text-5xl text-[36px] sm:text-5xl font-bold text-center pt-2 lg:pt-0 ">
                  Get In{" "}
                  <span className="text-[#f41e1e] dark:text-[#fc535a] font-serif">
                    Touch With
                  </span>{" "}
                  Us
                </h1>
              </AnimationOnScroll>

              <p className="  md:pt-6 pt-4    text-justify">
                Stay up-to-date by subscribing to our{" "}
                <span className="font-semibold">newsletter</span>.{" "}
                <Link
                  href={"/register"}
                  className="text-[#f41e1e] font-semibold"
                >
                  {" "}
                  Create an account{" "}
                </Link>
                to receive the latest updates on events, national and
                international days, and much more.
              </p>
            </div>

            {/* subscriber */}
            <Subscriber />
          </section>
        </section>
      </>
    );
  } else {
    return (
      <div className="top-0 left-0 z-[1000] h-screen w-full mx-auto flex justify-center bg-white dark:bg-[#0f0826] overflow-hidden absolute items-center">
        <div className="text-center">
          <ScaleLoader
            color="#36d7b7"
            height={40}
            loading={true}
            margin={3}
            radius={3}
            width={5}
          />
        </div>
      </div>
    );
  }
}
