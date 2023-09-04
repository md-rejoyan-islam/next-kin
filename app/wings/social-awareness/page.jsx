"use client";
import Image from "next/image";
import { PhotoProvider, PhotoView } from "react-photo-view";




export default function SocialAwareness() {
  return (
    <section className=" bg-[#fff] text-black  md:text-[20px] text-[18px] px-5 m-auto text-justify   py-5   dark:bg-[#151f32]  dark:text-[#cacfd5] ">
      <div className="xl:w-[1200px] mx-auto ">
        <div className="my-5">
          <p>
            <span className="kin">KIN </span>
            started its own journey to spread awareness among people. Since
            then, keeping that goal in mind, <span className="kin">KIN</span> is
            constantly working to increase social awareness among the general
            people. <span className="kin">KIN</span> organizes various awareness
            programs on{" "}
            <span className="">
              {" "}
              important national and international days, e.g. Children{"'"}s
              Day, Labour Day, Mental Health Day, Blood Donor Day, Environment
              Day, International Mother Language Day, Independence Day, Victory
              Day,
            </span>{" "}
            etc. <span className="kin">KIN</span> also protests against the
            various injustices that are happening around us.
          </p>
        </div>
        <div>
          <PhotoProvider>
            <PhotoView src="/images/wings/social.webp">
              <Image
                src="/images/wings/social.webp"
                width={1000}
                height={500}
                alt="KIN Social Awareness"
                className="mx-auto rounded-lg border-8  border-[#e2e2ec] dark:border-[#32265a6f] w-full cursor-pointer"
                placeholder="blur"
                blurDataURL="/images/blur/blur.webp"
                loading="lazy"
              />
            </PhotoView>
          </PhotoProvider>
        </div>
        <div className="my-5">
          <p>
            For example, <span className="kin">KIN</span> protested against the
            sexual violence that occurred at TSC on the 1st day of Baishakh in
            the year 1422 BS. <span className="kin">KIN</span> also protested
            against all sexual harassment incidents that took place before and
            after that, by organizing a human chain and a rally involving
            students of SUST in 2019.
          </p>
        </div>
        <div className="my-5">
          <p>
            In addition, <span className="kin">KIN</span> organized a protest
            program titled{" "}
            <span className="font-semibold">চলো আওয়াজ তুলি</span> in 2015,
            targeting eve-teasing, sexual harassment, and rapists. Similar
            protest programs were also held in 2014 and 2015, addressing various
            injustices happening around us.
          </p>
        </div>
      </div>
    </section>
  );
}
