"use client";
import Image from "next/image";
import { PhotoProvider, PhotoView } from "react-photo-view";



export default function CharityAid() {
  return (
    <section className=" bg-[#fff] text-black  px-5 m-auto text-justify  md:text-[20px] text-[18px] py-5  dark:bg-[#151f32]  dark:text-[#cacfd5] ">
      <div className="xl:w-[1200px] mx-auto ">
        <div className="my-5">
          <p>
            To assist poverty-stricken individuals,{" "}
            <span className=" kin">KIN</span> organizes a variety of charity
            programs, such as the
            <span className="font-semibold"> Charity Film Fest</span>,
            <span className="font-semibold"> Charity Poster</span>,
            <span className="font-semibold"> Charity T-shirt</span>,
            <span className="font-semibold"> Charity Wristband</span>,
            <span className="font-semibold"> Charity পিঠা উৎসব </span>, and
            <span className="font-semibold"> Charity বই মেলা </span> . The funds
            raised from these programs are utilized sincerely.
          </p>
        </div>
        <div>
          <figure>
            <PhotoProvider>
              <PhotoView src="/images/wings/charity.webp">
                <Image
                  src="/images/wings/charity.webp"
                  width={1000}
                  height={500}
                  alt="KIN Charity"
                  className="mx-auto rounded-lg border-8  border-[#e2e2ec] dark:border-[#32265a6f] w-full cursor-pointer"
                  placeholder="blur"
                  blurDataURL="/images/blur/blur.webp"
                  loading="lazy"
                />
              </PhotoView>
            </PhotoProvider>
          </figure>
        </div>
        <div className="my-5">
          <p>
            In 2021, <span className=" kin">KIN</span> organized the {"'"}{" "}
            <span className="font-semibold">
              KIN LUDO Tournament 2021: Roll The Dice To Save A Smile
            </span>{" "}
            {"'"} and {"'"}{" "}
            <span className="font-semibold">KIN Action Against Hunger 3.0</span>
            {"'"}.
          </p>
        </div>
        <div className="my-5">
          <p>
            In 2020, the event{" "}
            <span className="font-semibold">
              বন্যার্তদের আর্তনাদঃ প্রতিস্পন্দনে আমরা{" "}
            </span>
            was held to help the flood-affected people. Additionally,{" "}
            <span className="font-semibold">
              KIN PUBG Mobile Tournament: Play To Feed A Life
            </span>
            ,{" "}
            <span className="font-semibold">KIN Action Against Hunger 2.0</span>
            , and{" "}
            <span className="font-semibold">KIN Action Against Hunger</span>{" "}
            were organized to assist people during the Covid-19 epidemic.
          </p>
        </div>
        <div className="my-5">
          <p>
            In 2019, as a charity program,{" "}
            <span className="font-semibold">KIN Book Fair 19</span> was
            organized to provide financial assistance for the treatment of a
            poor CNG driver who suffered from cancer. The entire dividend of 1
            lakh tk from the books and T-shirts sold was handed over to him for
            his treatment.
          </p>
        </div>
        <div className="my-5">
          <p>
            In 2018, the{" "}
            <span className="font-semibold">KIN Charity Film Fest</span>
            {", "}
            <span className="font-semibold"> KIN Charity Poster </span>
            were organized to save the lives of two individuals. The charity
            poster program included PVC posters, KIN wristbands, and custom
            posters for medical assistance for the patients.
          </p>
        </div>
        <div className="my-5">
          <p>
            In 2017, KIN organized the{" "}
            <span className="font-semibold">KIN Book Fair</span> to help a
            high-school student who suffered from Leukemia. A total of Tk. 1
            lakh from the dividends of selling books, t-shirts, and wristbands
            was handed over to his father. Additionally, Tk. 30,400 was given to
            help a student from SUST.
          </p>
        </div>
        <div className="my-5">
          <p>
            In 2016, the{" "}
            <span className="font-semibold">KIN Charity Film Fest</span> was
            organized, and in 2015, both the{" "}
            <span className="font-semibold">KIN Book Fair</span> and{" "}
            <span className="font-semibold">KIN Charity Film Festival</span>{" "}
            took place. In 2014, the{" "}
            <span className="font-semibold">KIN Book Fair</span> was organized
            to help a young boy who suffered from Lung Cancer.
          </p>
        </div>
      </div>
    </section>
  );
}
