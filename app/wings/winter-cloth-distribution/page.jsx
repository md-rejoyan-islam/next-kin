"use client"
import Image from "next/image";
import { PhotoProvider, PhotoView } from "react-photo-view";



export default function WinterClothDistribution() {
  return (
    <section className=" bg-[#fff] text-black  px-5 m-auto text-justify  md:text-[20px] text-[18px] py-5  dark:bg-[#151f32]  dark:text-[#cacfd5] ">
      <div className="xl:w-[1200px] mx-auto  wrapper">
        <div className="my-5 header-wrapper">
          <p>
            <span className="kin">KIN </span>
            organizes a{" "}
            <span className="font-semibold">
              Winter Cloth Collection and Distribution Program
            </span>{" "}
            every year to stand with helpless and impoverished people against
            the severity of cold in winter. Donation collection, warm cloth
            collection and distribution, and the{" "}
            <span className=" kin">KIN</span> charity hoodie are the main
            features of this program. The main reason behind this program is to
            spread warmth and put a smile on the faces of needy people.
          </p>
        </div>
        <div className="body-wrapper">
          <div className="my-10">
            <h1 className=" font-serif font-black md:text-3xl text-2xl text-center dark:text-[#fc535a] py-3">
              2021
            </h1>
            <p>
              In 2021, this program was held in Ward No. 2 - Doara Bazar - West
              Machimpur - Chhatak, at KIN School, in Tarapur Tea Estate, among
              the poor people near SUST, among the homeless people living in the
              railway station, Shahjalal Mazar, and on the sidewalks of Sylhet
              city. Blankets were distributed among about 190 families, and
              winter clothes were distributed among about 400 people, including
              students of KIN School.
            </p>
          </div>
          <div className="my-5">
            <PhotoProvider>
              <PhotoView src="/images/wings/winter.webp">
                <Image
                  src="/images/wings/winter.webp"
                  width={1200}
                  height={500}
                  alt="KIN Winter Cloth Distribution"
                  className="mx-auto rounded-lg border-8  border-[#e2e2ec] dark:border-[#32265a6f]  cursor-pointer"
                  placeholder="blur"
                  blurDataURL="images/blur/blur.webp"
                  loading="lazy"
                />
              </PhotoView>
            </PhotoProvider>
          </div>

          <div className="my-10">
            <h1 className=" font-serif font-black md:text-3xl text-2xl text-center dark:text-[#fc535a] py-3">
              2020
            </h1>
            <p>
              In 2020, winter clothing and financial donations were collected
              from about 16 districts of the country for this program. These
              winter clothes were distributed among the helpless people in
              different parts of the country, including Noakhali Companiganj,
              Rangamati Taimidang, Sirajganj, Sherpur, Srimangal, Mymensingh,
              Laxmipur, Sunamganj, and Daldali Tea Garden, among others. A total
              of 422 blankets, 2259 winter clothes, and 349 ordinary clothes
              were distributed among the poor people, and 135 hoodies were
              distributed among the students of KIN School and Padmu Primary
              School situated at Ujanipara, Bandarban.
            </p>
          </div>

          <div className="my-10">
            <h1 className=" font-serif font-black md:text-3xl text-2xl text-center dark:text-[#fc535a] py-3">
              2019
            </h1>
            <p>
              In 2019, blankets were distributed among 104 families of
              Keorachhara Tea Garden in Sylhet, and winter clothes along with
              petroleum jelly were distributed among 90 students of KIN School.
            </p>
          </div>

          <div className="my-10">
            <h1 className=" font-serif font-black md:text-3xl text-2xl text-center dark:text-[#fc535a] py-3">
              2018
            </h1>
            <p>
              In 2018, winter clothes and blankets were distributed at Daldali
              Tea Garden of Shahi Idgah, in schools, 5 villages of Dargapasha
              Upazila of Sunamganj, and among the students of KIN School.
              Blankets were distributed to schools, 216 poor families; winter
              clothes and general clothes to 500 people. Additionally, winter
              clothes and petroleum jelly were distributed to students of KIN
              School, totaling 95 students.
            </p>
          </div>

          <div className="my-10">
            <h1 className=" font-serif font-black md:text-3xl text-2xl text-center dark:text-[#fc535a] py-3">
              2017
            </h1>
            <p>
              In 2017, winter clothes were distributed in various areas,
              including Palash Union of Bishambhpur Upazila in Sunamganj
              district, the railway station of Sylhet, Bandar, Kin Bridge,
              Zindabazar, and Chauhatta areas. Approximately 220 winter clothes
              were distributed around the school, railway station, Bandar, Kin
              Bridge, Zindabazar, and Chauhatta areas. Additional winter clothes
              were distributed among the students of KIN School, totaling 100
              students.
            </p>
          </div>

          <div className="my-10">
            <h1 className=" font-serif font-black md:text-3xl text-2xl text-center dark:text-[#fc535a] py-3">
              2015
            </h1>
            <p>
              In this year, a total of 2200 warm clothes were distributed in
              Lalakhal Tea Estate among the residents of Lalakhal and State,
              Jaintapur, as well as the students of KIN School.
            </p>
          </div>

          <div className="my-10">
            <h1 className=" font-serif font-black md:text-3xl text-2xl text-center dark:text-[#fc535a] py-3">
              2014
            </h1>
            <p>
              In 2014, 160 winter clothes were distributed in Taraganj of
              Rangpur, and 200 winter clothes were distributed among the
              students of KIN School.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
