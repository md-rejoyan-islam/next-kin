'use client'
import Image from "next/image";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

export default function page() {
  const containerStyle = {
    height: "400px",
  };
  const onLoad = () => {};
  const center = {
    lat: 24.9203068348844,
    lng: 91.83228375215963,
  };

  return (
    <section
      className=" bg-[#fff]  m-auto pb-5  text-slate-800 
      
      
       dark:bg-[#151f32]  dark:text-[#cacfd5] "
    >
      <div className="">
        <div>
          <PhotoProvider>
            <PhotoView src="/images/history/hand.png">
              <Image
                src="/images/history/hand.png"
                className="w-screen  cursor-pointer"
                alt="kin hand photo"
                height={800}
                width={1000}
                layout="responsive"
                placeholder="blur"
                blurDataURL="/images/history/hand.png"
                loading="lazy"
              />
            </PhotoView>
          </PhotoProvider>
        </div>
        <div className="xl:w-[1200px]   m-auto mt-12 px-5 ">
          <div className="lg:text-[19px] text-[17px]   text-justify">
            <p className="py-3">
              With the resolution{" "}
              <span className="font-semibold">
                {'"'}আত্মার কাছে দায়বদ্ধতায় হাতে রাখি হাত
                {'"'}
              </span>{" "}
              at heart,{" "}
              <span className="font-['Arial'] text-red-600 dark:text-red-600">
                KIN
              </span>
              {"  "}
              commenced its relentless journey on January 30th, 2003. Since
              then,{" "}
              <span className="font-['Arial'] text-red-600 dark:text-red-600">
                KIN
              </span>{" "}
              {"  "}
              has been wholeheartedly engaging in numerous social awareness and
              voluntary activities.{" "}
              <span className="font-['Arial'] text-red-600 dark:text-red-600">
                KIN
              </span>{" "}
              {"  "}
              operates based on five pillars:{" "}
              <span className="font-['Arial'] text-red-600 dark:text-red-600">
                KIN
              </span>{" "}
              {"  "}
              <span className="font-semibold">School</span>,
              <span className="font-semibold"> Blood Donation</span>,
              <span className="font-semibold">
                {" "}
                Warm Cloth Collection and Distribution
              </span>{" "}
              ,<span className="font-semibold"> Charity</span>, and
              <span className="font-semibold"> Social Awareness</span> . The
              encouragement and enthusiasm of a group of young dreamers from
              SUST are propelling{" "}
              <span className="font-['Arial'] text-red-600 dark:text-red-600">
                KIN
              </span>{" "}
              {"  "}
              towards its ultimate goal.
            </p>

            <p className="py-3">
              <span className="font-['Arial'] text-red-600 dark:text-red-600">
                KIN
              </span>{" "}
              {"  "}
              School remains steadfast in its vision of integrating impoverished
              and underprivileged children, who lack access to education, into
              the mainstream educational system, nurturing them into deserving
              and enlightened citizens of the country. In addition to education,{" "}
              <span className="font-['Arial'] text-red-600 dark:text-red-600">
                KIN
              </span>{" "}
              {"  "}
              School also focuses on developing their character and moral
              values.{" "}
              <span className="font-['Arial'] text-red-600 dark:text-red-600">
                KIN
              </span>
              {"  "}
              School conducts its teaching activities every day from 4:00-5:00
              PM in 2nd Floor of the Central Auditorium, SUST.
            </p>

            <p className="py-3">
              <span className="font-['Arial'] text-red-600 dark:text-red-600">
                KIN
              </span>
              {"  "}
              arranges blood for the gasping and ill ones by managing blood and
              arranging blood donation programs throughout the year. Moreover,
              in terms of distributing warm clothes among the helpless and
              forfeited, and arranging charity programs to help the poor and
              destitute,{" "}
              <span className="font-['Arial'] text-red-600 dark:text-red-600">
                KIN
              </span>
              {"  "}
              is always ahead.{" "}
              <span className="font-['Arial'] text-red-600 dark:text-red-600">
                KIN
              </span>
              {"  "}
              is also working relentlessly to raise public awareness. It
              arranges many programs on different important social and national
              days.{" "}
              <span className="font-['Arial'] text-red-600 dark:text-red-600">
                KIN
              </span>
              {"  "}
              has been directly participating in voluntary activities for more
              than 20 years now. It further dreams of standing beside the
              helpless people and living among them for a thousand more years to
              come.
            </p>
          </div>

          <div className="place-items-center py-16 m-auto grid grid-cols-12">
            <span className="xl:col-span-2"></span>
            <figure className="col-span-5 xl:col-span-4">
              <PhotoProvider>
                <PhotoView src="/images/history/map.png">
                  <Image
                    src="/images/history/map.png"
                    className="w-[100px]  cursor-pointer"
                    alt="kin location map"
                    height={20}
                    width={40}
                    
                    loading="lazy"
                  />
                </PhotoView>
              </PhotoProvider>
            </figure>
            <p className="col-span-5 xl:col-span-4  lg:text-[21px] text-[19px] dark:text-white font-semibold ">
              Shahjalal University of Science & Technology, Sylhet-3114,
              Bangladesh
            </p>
            <span className=" xl:col-span-2"></span>
          </div>
          {/* map location */}
          <div className="pb-5">
            <div className=" rounded-lg border-8  border-[#e2e2ec] dark:border-[#32265a6f]">
              <LoadScript googleMapsApiKey="AIzaSyDhWWmZ-Jovpu6rwfSsFt9qYdUSd3G7Mxc">
                <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={center}
                  zoom={16}
                >
                  {/* Child components, such as markers, info windows, etc. */}
                  <Marker position={center} onLoad={onLoad} />
                </GoogleMap>
              </LoadScript>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
