"use client";
import Image from "next/image";
import { PhotoProvider, PhotoView } from "react-photo-view";



export default function KinSChool() {
  return (
    <section className=" bg-[#fff] text-black  px-5 m-auto text-justify md:text-[20px] text-[18px] py-5  dark:bg-[#151f32]  dark:text-[#cacfd5]  ">
      <div className="xl:w-[1200px] mx-auto z-10 ">
        <div className="my-5 z-10 text-justify">
          <p className="my-5   z-10 ">
            Education is one of the basic necessities of human life, and it is
            the only weapon that holds the power of changing an entire nation.
            Unfortunately, some children are lagging behind in that race, either
            because they are not aware of its importance or they can
            {"'"}t bear the expenses the opportunity brings with it. In the year
            2004, a group of young dreamers from Shahjalal University of Science
            & Technology (SUST) took the aim of spreading the light of education
            among the leftover, underprivileged children of the society, so that
            they can also have access to that opportunity. To fulfill that noble
            aim, <span className="kin">KIN</span>{" "}
            <span className="font-semibold">School </span>
            was formed.
          </p>
        </div>
        <div>
          <PhotoProvider>
            <PhotoView src="/images/wings/school.jpg">
              <Image
                src="/images/wings/school.jpg"
                width={1000}
                height={500}
                alt="KIN School"
                className="mx-auto border-8 rounded-lg border-[#f5efef] dark:border-[#32265a6f] w-full cursor-pointer"
                placeholder="blur"
                blurDataURL="/images/blur/blur.webp"
                loading="lazy"
              />
            </PhotoView>
          </PhotoProvider>
        </div>
        <div className=" ">
          <h1 className="font-bold  dark:text-white mt-3 ">Our Activities: </h1>

          <div className="pl-9">
            <ul>
              <li className=" list-[square]">
                <p>
                  <span className="font-bold dark:text-[#a1b1c6] text-[#1d1f1f]">
                    <span className="kin">KIN</span> School
                  </span>{" "}
                  strongly believes that it is necessary for a child to stay fit
                  in order to get the best out of what they read. With that
                  view, other than their education, it also arranges different
                  health-related programs and health checkups, such as free eye
                  checkups for the children. On 28th June 2019,{" "}
                  <span className="font-bold dark:text-[#a1b1c6] text-[#1d1f1f]">
                    <span className="kin">KIN</span> School
                  </span>
                  , along with SICOPT, arranged a free dental camp for kids,
                  where dentists from {'"'}Shahjalal Microscopic and Endodontic
                  Center
                  {'"'} came and provided free checkups and advice to the
                  children.
                </p>
              </li>
              <li className="list-[square]">
                <p>
                  Moreover, to raise patriotism and moral awareness among
                  children,{" "}
                  <span className="font-bold dark:text-[#a1b1c6] text-[#1d1f1f]">
                    <span className="kin">KIN</span> School
                  </span>{" "}
                  organized various educational programs and contests for the
                  children on various national days like International Mother
                  Language Day, Independence Day, Victory Day, etc.
                </p>
              </li>
              <li className="list-[square]">
                <p>
                  <span className="font-bold dark:text-[#a1b1c6] text-[#1d1f1f]">
                    <span className="kin">KIN</span> School
                  </span>{" "}
                  celebrates its annual anniversary every year to mark the day
                  of its establishment. Last year, on 29th March,{" "}
                  <span className="kin">KIN</span> School, along with its
                  students and well-wishers, arranged a cultural celebration
                  program wholeheartedly.
                </p>
              </li>{" "}
              <li className="list-[square]">
                <p>
                  <span className="font-bold dark:text-[#a1b1c6] text-[#1d1f1f]">
                    <span className="kin">KIN</span> School
                  </span>{" "}
                  also provides warm clothes every year during the winter season
                  to underprivileged children in the society, ensuring they
                  experience the same warmth during cold days as other children.
                  Last year, on 19th December,{" "}
                  <span className="font-bold dark:text-[#a1b1c6] text-[#1d1f1f]">
                    <span className="kin">KIN</span> School
                  </span>{" "}
                  provided warm clothes to 90 students of the school.
                </p>
              </li>
              <li className="list-[square]">
                <p>
                  <span className="kin">KIN</span> believes in the principle
                  that sharing is caring. Hence, every year,{" "}
                  <span className="font-bold dark:text-[#a1b1c6] text-[#1d1f1f]">
                    <span className="kin">KIN</span> School
                  </span>{" "}
                  distributes EID clothes among the less fortunate children,
                  aiming to collectively embrace the joy that EID brings to our
                  lives. In 2019,{" "}
                  <span className="font-bold dark:text-[#a1b1c6] text-[#1d1f1f]">
                    <span className="kin">KIN</span> School{" "}
                  </span>
                  organized {'"'}
                  <span className="kin">KIN</span> ঈদ আনন্দ,{'"'} during which
                  it distributed EID clothes to 125 students of the school.
                </p>
              </li>
            </ul>
          </div>
          <p className="my-5">
            <span className="font-bold  text-[#1d1f1f]">
              <span className="kin">KIN</span> School
            </span>{" "}
            carries out its daily curricular activities from 4:00 pm to 5:00 pm
            at Central Auditorium, SUST. The school{"'"}s workforce consists of
            young, altruistic SUST students who voluntarily contribute their
            efforts wholeheartedly for the children. You are warmly invited to
            dedicate an hour from your busy schedule to these innocent souls,
            helping them strengthen their belief in humanity and fostering a
            greater sense of connection with the more privileged children in our
            society.
          </p>
        </div>
        <div className=" ">
          <p className="font-bold text-[20px] dark:text-white">Objectives:</p>
          <div className="pl-9 mb-10">
            <ul>
              <li className=" list-[square]">
                Since its inception,{" "}
                <span className="font-bold dark:text-[#a1b1c6] text-[#252626]">
                  <span className="kin">KIN</span> School
                </span>{" "}
                has been dedicated to both institutional and extracurricular
                activities for underprivileged children. It passionately focuses
                on their mental, character, and moral development.
              </li>
              <li className="list-[square]">
                The school provides study materials such as pens, pencils,
                erasers, sharpeners, and extends monetary assistance to students
                in need.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
