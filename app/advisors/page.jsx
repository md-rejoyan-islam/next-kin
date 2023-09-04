"use client";
import ApiURL from "@/components/api/Api";
import Image from "next/image";
import Link from "next/link";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useSelector } from "react-redux";
import { ScaleLoader } from "react-spinners";

export default function Advisors() {
  const { advisors } = useSelector((state) => state.advisors);
  if (advisors.length > 0) {
    return (
      <section className="bg-[#fff]  py-5   text-black  bg-no-repeat   dark:bg-[#151f32]  dark:text-[#cacfd5]  h-full px-4">
        <div className="pt-5 pb-7  rounded-md mx-auto border-black xl:w-[1150px] lg:px-12 md:px-28 px-4">
          <h1 className="font-serif dark:text-[#fc535a] xl:text-6xl md:text-5xl text-3xl text-center font-bold py-2">
            Our Honourable Advisors{" "}
          </h1>
          <p className="dark:text-white text-center xl:text-3xl text-xl sm:text-2xl">
            <span className="text-red-600 font-['Arial'] dark:text-red-600">
              KIN
            </span>{" "}
            is working with the guidance of a group of Honourable teachers of
            SUST
          </p>
        </div>
        <div className="">
          <div className="my-5   rounded-md py-5  border-black xl:w-[1150px] lg:px-12 md:px-28 px-4   gap-8 flex-wrap justify-center  flex  mx-auto">
            {advisors?.map((advisor, index) => (
              <div key={index}>
                <div className="text-center relative   dark:text-[#cdd6e2]  max-w-[330px] duration-700 h-full   ">
                  <div className="flex flex-col justify-between  h-full cardDesign z-50    dark:bg-[#22174b72] dark:hover:bg-[#150f31b9] p-2 hover:bg-[#e2e3e647] bg-[#fdfdfd] dark:border-[#6250ad29] rounded-xl border-zinc-300 border-4 shadow-[0px_2px_5px_#eee] dark:shadow-none">
                    <div>
                      <PhotoProvider>
                        <PhotoView
                          src={`${ApiURL}/public/images/advisors/${advisor?.advisor_photo}`}
                        >
                          <Image
                            src={`${ApiURL}/public/images/advisors/${advisor?.advisor_photo}`}
                            width={500}
                            height={300}
                            alt={advisor?.name}
                            placeholder="blur"
                            blurDataURL={`${ApiURL}/public/images/advisors/${advisor?.advisor_photo}`}
                            loading="lazy"
                            className="cursor-pointer rounded-md  py-2 mx-auto w-[270px] h-[270px] "
                          />
                        </PhotoView>
                      </PhotoProvider>
                      <figure></figure>
                      <div className="">
                        <h3 className="md:text-2xl text-[20px] pb-3 pt-1 font-bold text-center ">
                          {advisor?.name}
                        </h3>
                        <p className="text-[20px] dark:text-[#b6bfcb] text-[#211548] ">
                          {advisor?.designation}, <br />{" "}
                          <span className="text-[16px] font-bold dark:text-[#a1bdc7]">
                            Shahjalal University of Science and Technology
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className=" w-2/3 mx-auto pt-3 grid grid-cols-3 justify-items-center">
                      <Link
                        target="/blank"
                        href={`//${advisor?.website?.split("//")[1]}`}
                        className="dark:fill-[#f5ebeb] bg-[#4c8bd724] w-fit p-1 rounded-md dark:bg-[#170e35] hover:bg-[#f7926e] dark:hover:bg-[#ff338c] linkParent fill-[#e1eef3] "
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          className="linkIcon fill-[#5a9ecb] dark:fill-white"
                        >
                          <path d="M8.465 11.293c1.133-1.133 3.109-1.133 4.242 0l.707.707 1.414-1.414-.707-.707c-.943-.944-2.199-1.465-3.535-1.465s-2.592.521-3.535 1.465L4.929 12a5.008 5.008 0 0 0 0 7.071 4.983 4.983 0 0 0 3.535 1.462A4.982 4.982 0 0 0 12 19.071l.707-.707-1.414-1.414-.707.707a3.007 3.007 0 0 1-4.243 0 3.005 3.005 0 0 1 0-4.243l2.122-2.121z"></path>
                          <path d="m12 4.929-.707.707 1.414 1.414.707-.707a3.007 3.007 0 0 1 4.243 0 3.005 3.005 0 0 1 0 4.243l-2.122 2.121c-1.133 1.133-3.109 1.133-4.242 0L10.586 12l-1.414 1.414.707.707c.943.944 2.199 1.465 3.535 1.465s2.592-.521 3.535-1.465L19.071 12a5.008 5.008 0 0 0 0-7.071 5.006 5.006 0 0 0-7.071 0z"></path>
                        </svg>
                      </Link>
                      <a
                        href={`mailto:${advisor?.email}`}
                        className="dark:fill-[#f5ebeb] bg-[#4c8bd724] w-fit p-1 rounded-md dark:bg-[#170e35] hover:bg-[#f7926e] dark:hover:bg-[#ff338c] linkParent fill-[#e1eef3] "
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          version="1.1"
                          width="24"
                          height="24"
                          x="0"
                          y="0"
                          viewBox="0 0 32 32"
                          className="linkIcon fill-[#5a9ecb] dark:fill-white"
                        >
                          <g>
                            <path
                              d="M30.944 7.139A3.684 3.684 0 0 0 27.311 4H4.689a3.684 3.684 0 0 0-3.633 3.139L16 16.809z"
                              className=""
                            ></path>
                            <path
                              d="M16.543 18.84a1 1 0 0 1-1.086 0L1 9.486v14.825A3.693 3.693 0 0 0 4.689 28h22.622A3.693 3.693 0 0 0 31 24.311V9.485z"
                              className=""
                            ></path>
                          </g>
                        </svg>
                      </a>
                      <a
                        href={`tel:${advisor?.cell}`}
                        className="dark:fill-[#f5ebeb] bg-[#4c8bd724] w-fit p-1 rounded-md dark:bg-[#170e35] hover:bg-[#f7926e] dark:hover:bg-[#ff338c] linkParent fill-[#e1eef3] "
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          className="linkIcon fill-[#5a9ecb] dark:fill-white"
                        >
                          <path d="m20.487 17.14-4.065-3.696a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a.997.997 0 0 0-.085-1.39z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <div className="top-0 left-0 z-[10] h-screen w-full mx-auto flex justify-center bg-white dark:bg-[#0f0826] overflow-hidden absolute items-center">
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
