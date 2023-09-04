"use client";
import ApiURL from "@/components/api/Api";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useDispatch, useSelector } from "react-redux";
import { ScaleLoader } from "react-spinners";

export default function ExecutiveCommittee() {
  const dispatch = useDispatch();
  const { ecs, ec } = useSelector((state) => state.ecs);

  // committee number
  const [cNUmber, setCNumber] = useState(null);

  useEffect(() => {
    setCNumber(ecs[0]?.name?.split("th")[0]);
  }, [ecs]);

  // handle change
  const handleChange = (id) => {
    dispatch(getSingleEC(id));
    setCNumber(ecs.find((ec) => ec._id === id).name.split("th")[0]);
  };

  if (ecs.length > 0 && cNUmber) {
    return (
      <section className="  dark:bg-[#151f32]  dark:text-[#cacfd5] bg-[#fff] md:text-[20px] text-18px  py-5 text-black   h-full">
        <div className="   mx-auto xl:w-[1200px] lg:px-12 md:px-28 px-4">
          <div>
            <h1 className=" text-center md:mt-5 mt-3 mb-5 text-[#000000] dark:text-[#fc535a] xl:text-6xl lg:text-4xl  sm:text-3xl text-2xl font-bold">
              {cNUmber}th Executive Committee of KIN
            </h1>
            <div>
              <span className=" font-bold mr-4">Executive Committee :</span>
              <select
                name="ec"
                id=""
                className="py-2 px-3  bg-violet-600 text-white  rounded-md"
                onChange={(e) => {
                  handleChange(e.target.value);
                }}
              >
                {ecs?.map((ec, index) => (
                  <option
                    value={ec._id}
                    selected={ecs[0]._id === ec._id ? true : false}
                    key={index}
                  >
                    {ec?.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className=" grid  lg:grid-cols-3  mb-5 md:mt-16 mt-8 sm:grid-cols-2 mx-auto px-5 gap-10">
            {ec &&
              [...ec?.members]
                ?.sort((a, b) => a.index - b.index)
                .map((member, index) => (
                  <div key={index}>
                    <div className="h-full mx-auto max-w-[310px]">
                      <div className="hover:shadow-md  flex flex-col mx-auto rounded-md  hover:scale-[1.02] h-full ">
                        <div className="h-full  dark:bg-[#182c49] bg-[#efeff13c] dark:border-none border full   rounded-t-md pt-5 pb-2 ">
                          <p className="px-2 text-center text-[22px]  pb-3 font-semibold text-[#3289cb] dark:text-[#87cf92] font-[poppins]">
                            {member?.designation}
                          </p>
                          <figure className="px-3">
                            <PhotoProvider>
                              <PhotoView
                                src={`${ApiURL}/public/images/users/${member?.user?.user_photo}`}
                              >
                                <Image
                                  src={`${ApiURL}/public/images/users/${member?.user?.user_photo}`}
                                  width={240}
                                  height={230}
                                  alt={member?.user?.name}
                                  
                                  placeholder="blur"
                                  blurDataURL={`${ApiURL}/public/images/users/${member?.user?.user_photo}`}
                                  loading="lazy"
                                  className=" duration-200 w-[240px]  h-[230px] mx-auto object-cover  rounded-xl cursor-pointer "
                                />
                              </PhotoView>
                            </PhotoProvider>
                          </figure>
                          <div className="px-4 grid items-center my-3">
                            <h2 className=" my-1 text-2xl font-bold text-[#22174b] dark:text-[#e9ecef] hover:text-[#fc535a]">
                              {member?.user?.name}
                            </h2>

                            {member?.user?.identity?.sustian?.department && (
                              <p className="text-xl dark:text-[#b6bfcb]  text-[#3f3f5d] font-semibold">
                                {member?.user?.identity?.sustian?.department}{" "}
                                {member?.user?.identity?.sustian?.session &&
                                  "(" +
                                    member?.user?.identity?.sustian?.session +
                                    ")"}
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="mt-[2px] flex items-center justify-between px-4 bg-[#efeff1] dark:bg-[#182c49] py-2 rounded-b-md">
                          {member?.user?.social_media?.fb && (
                            <Link
                              href={member?.user?.social_media?.fb}
                              target={"_blank"}
                              className="z-10 dark:fill-white fill-[#443c3c] bg-[#b4bac8] dark:bg-[#000]  rounded-md hover:scale-150 linkParent"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="linkIcon"
                              >
                                <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                              </svg>
                            </Link>
                          )}
                          {member?.user?.social_media?.linkedIn && (
                            <Link
                              className="dark:fill-white dark:bg-[#000]  fill-[#443c3c] bg-[#b4bac8] z-10 rounded-md hover:scale-150 linkParent"
                              target={"_blank"}
                              href={member?.user?.social_media?.linkedIn}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="linkIcon"
                              >
                                <circle
                                  cx="4.983"
                                  cy="5.009"
                                  r="2.188"
                                ></circle>
                                <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path>
                              </svg>
                            </Link>
                          )}
                          {member?.user?.email && (
                            <a
                              className="z-10 dark:bg-[#000] fill-[#443c3c] dark:fill-white bg-[#b4bac8] rounded-md hover:scale-150 linkParent"
                              target={"_blank"}
                              rel="noreferrer"
                              href={`mailto: ${member?.user?.email}`}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="linkIcon"
                              >
                                <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"></path>
                              </svg>
                            </a>
                          )}
                          {member?.user?.mobile && (
                            <a
                              className="z-10 dark:bg-[#000]  fill-[#443c3c] dark:fill-white bg-[#b4bac8] rounded-md hover:scale-150 linkParent"
                              href={`tel:${member?.user?.mobile}`}
                            >
                              {" "}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="linkIcon"
                              >
                                <path d="M20 10.999h2C22 5.869 18.127 2 12.99 2v2C17.052 4 20 6.943 20 10.999z"></path>
                                <path d="M13 8c2.103 0 3 .897 3 3h2c0-3.225-1.775-5-5-5v2zm3.422 5.443a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a1 1 0 0 0-.086-1.391l-4.064-3.696z"></path>
                              </svg>
                            </a>
                          )}
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
