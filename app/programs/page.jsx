"use client";
import ApiURL from "@/components/api/Api";
import Image from "next/image";
import Link from "next/link";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useDispatch, useSelector } from "react-redux";
import { getAllPrograms } from "./programsApiSlice";
import { ScaleLoader } from "react-spinners";
import './program.scss'





export default function Programs() {
  const { programs, pagination } = useSelector((state) => state.programs);
  const dispatch = useDispatch();

  // pagination
  const handlePagination = (value) => {
    const { currentPage, nextPage, previousPage } = pagination;
    let page = currentPage;

    switch (value) {
      case "next":
        page = nextPage;
        break;
      case "previous":
        page = previousPage;
        break;
      default:
        page = value;
        break;
    }
    dispatch(getAllPrograms({ page }));
  };
  if (programs.length > 0) {
    return (
      <section className=" bg-[#f9fafc]  min-h-screen dark:bg-[#151f32]   pb-8">
        <div className="pt-10 pb-6 px-5 xl:w-[1200px]  lg:m-auto ">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 justify-items-center  grid-cols-1 overflow-hidden">
            {programs?.map((program, index) => {
              const title = program?.title.replace(
                "KIN",
                '<font color="#dc2626" style=font-family:"Arial Black"> KIN </font>'
              );

              return (
                <div
                  className="card card-compact border  border-[rgb(229,231,235)] dark:border-none  bg-[#fff]   rounded-md  dark:bg-[#192b48] max-w-[410px] mx-auto  shadow-lg"
                  key={index}
                >
                  <div className="box text-red-600"></div>
                  <figure className="rounded-t-md bg-white overflow-hidden">
                    <PhotoProvider>
                      <PhotoView
                        src={`${ApiURL}/public/images/programs/${program?.program_photo}`}
                      >
                        <Image
                          src={`${ApiURL}/public/images/programs/${program?.program_photo}`}
                          width={410}
                          height={220}
                          alt={program?.title}
                          placeholder="blur"
                          blurDataURL={`${ApiURL}/public/images/programs/${program?.program_photo}`}
                          loading="lazy"
                          className="w-full img h-[220px] rounded-t-md border dark:border-none cursor-pointer"
                        />
                      </PhotoView>
                    </PhotoProvider>
                  </figure>
                  <div className=" card-body  dark:text-[#cdd6e2] text-black">
                    <p
                      className="font-['Hind_Siliguri'] text-xl py-3 font-bold text-center pt-2 hover:text-[#fc535a]"
                      dangerouslySetInnerHTML={{ __html: title }}
                    ></p>

                    <p className="flex gap-4">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          version="1.1"
                          width={24}
                          height={24}
                          x="0"
                          y="0"
                          viewBox="0 0 512 512"
                        >
                          <g>
                            <path
                              d="M317.8 335.3c-5.7-.3-11.1 2.1-14.099 6.901L256 416.6l-47.701-74.399c-2.999-4.801-8.399-7.5-14.099-6.901C94.9 345.801 31 379.701 31 422c0 58.5 115.8 90 225 90s225-31.5 225-90c0-42.299-63.9-76.199-163.2-86.7z"
                              fill="#61de56"
                              data-original="#61de56"
                            ></path>
                            <path
                              d="M481 422c0 58.5-115.8 90-225 90v-95.4l47.701-74.399c2.999-4.801 8.399-7.202 14.099-6.901C417.1 345.801 481 379.701 481 422z"
                              fill="#13c37b"
                              data-original="#13c37b"
                            ></path>
                            <path
                              d="M256 0C166 0 91 72.599 91 165c0 35.099 10.499 66.599 30.901 96l121.5 191.6c2.999 4.799 7.8 6.899 12.6 6.899 4.799 0 9.6-2.1 12.599-6.899l122.1-192.2c19.801-28.2 30.3-61.2 30.3-95.4C421 74.099 346.901 0 256 0zm0 240c-41.355 0-75-33.645-75-75s33.645-75 75-75 75 33.645 75 75-33.645 75-75 75z"
                              fill="#fd3018"
                              data-original="#fd3018"
                            ></path>
                            <path
                              d="M256 0v90c41.355 0 75 33.645 75 75s-33.645 75-75 75v219.5c4.799 0 9.6-2.1 12.599-6.899L390.7 260.4c19.801-28.2 30.3-61.2 30.3-95.4C421 74.099 346.901 0 256 0z"
                              fill="#e61e14"
                              data-original="#e61e14"
                            ></path>
                          </g>
                        </svg>
                      </span>
                      <span className="font-['Hind_Siliguri']">
                        {program?.venue}
                      </span>
                    </p>
                    <p className="flex gap-4">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          version="1.1"
                          width="24"
                          height="24"
                          x="0"
                          y="0"
                          viewBox="0 0 512 512"
                        >
                          <g>
                            <path
                              fill="#d3dcfb"
                              d="M246.23 426.666H51.191c-18.851 0-34.132-15.282-34.132-34.132V358.4h261.957z"
                              data-original="#d3dcfb"
                            ></path>
                            <path
                              fill="#ebf5fc"
                              d="M460.825 153.6V392.532H51.191c-18.851 0-34.132-15.282-34.132-34.133V153.6l238.95-85.334z"
                              data-original="#ebf5fc"
                            ></path>
                            <g fill="#3c58a0">
                              <path
                                d="M77.336 221.867H59.203a8 8 0 0 1-8-8v-18.133a8 8 0 0 1 8-8h18.133a8 8 0 0 1 8 8v18.133a8 8 0 0 1-8 8zM145.603 221.867H127.47a8 8 0 0 1-8-8v-18.133a8 8 0 0 1 8-8h18.133a8 8 0 0 1 8 8v18.133a8 8 0 0 1-8 8zM213.869 221.867h-18.133a8 8 0 0 1-8-8v-18.133a8 8 0 0 1 8-8h18.133a8 8 0 0 1 8 8v18.133a8 8 0 0 1-8 8zM282.136 221.867h-18.133a8 8 0 0 1-8-8v-18.133a8 8 0 0 1 8-8h18.133a8 8 0 0 1 8 8v18.133a8 8 0 0 1-8 8zM350.391 221.867h-18.133a8 8 0 0 1-8-8v-18.133a8 8 0 0 1 8-8h18.133a8 8 0 0 1 8 8v18.133a8 8 0 0 1-8 8zM418.658 221.867h-18.133a8 8 0 0 1-8-8v-18.133a8 8 0 0 1 8-8h18.133a8 8 0 0 1 8 8v18.133a8 8 0 0 1-8 8zM77.336 290.133H59.203a8 8 0 0 1-8-8V264a8 8 0 0 1 8-8h18.133a8 8 0 0 1 8 8v18.133a8 8 0 0 1-8 8zM145.603 290.133H127.47a8 8 0 0 1-8-8V264a8 8 0 0 1 8-8h18.133a8 8 0 0 1 8 8v18.133a8 8 0 0 1-8 8zM213.869 290.133h-18.133a8 8 0 0 1-8-8V264a8 8 0 0 1 8-8h18.133a8 8 0 0 1 8 8v18.133a8 8 0 0 1-8 8zM290.136 290.133v-25.6a8.533 8.533 0 0 0-8.533-8.533h-17.067a8.533 8.533 0 0 0-8.533 8.533V281.6a8.533 8.533 0 0 0 8.533 8.533zM77.336 358.4H59.203a8 8 0 0 1-8-8v-18.133a8 8 0 0 1 8-8h18.133a8 8 0 0 1 8 8V350.4a8 8 0 0 1-8 8zM145.603 358.4H127.47a8 8 0 0 1-8-8v-18.133a8 8 0 0 1 8-8h18.133a8 8 0 0 1 8 8V350.4a8 8 0 0 1-8 8zM213.869 358.4h-18.133a8 8 0 0 1-8-8v-18.133a8 8 0 0 1 8-8h18.133a8 8 0 0 1 8 8V350.4a8 8 0 0 1-8 8z"
                                fill="#3c58a0"
                                data-original="#3c58a0"
                              ></path>
                            </g>
                            <path
                              fill="#2a428c"
                              d="M418.417 187.733h-17.65c-1.068 0-2.085.21-3.022.579a8.237 8.237 0 0 1 5.219 7.662v17.65c0 3.484-2.165 6.456-5.219 7.662.937.37 1.954.58 3.022.58h17.65a8.242 8.242 0 0 0 8.242-8.241v-17.65a8.243 8.243 0 0 0-8.242-8.242zM350.15 187.733H332.5c-1.068 0-2.085.21-3.022.579a8.237 8.237 0 0 1 5.219 7.662v17.65c0 3.484-2.165 6.456-5.219 7.662.937.37 1.954.58 3.022.58h17.65a8.24 8.24 0 0 0 8.241-8.241v-17.65a8.241 8.241 0 0 0-8.241-8.242zM281.895 187.733h-17.65c-1.068 0-2.085.21-3.022.579 3.055 1.206 5.22 4.178 5.22 7.662v17.65c0 3.484-2.165 6.456-5.22 7.662.937.37 1.954.58 3.022.58h17.65a8.242 8.242 0 0 0 8.242-8.241v-17.65a8.243 8.243 0 0 0-8.242-8.242zM213.628 187.733h-17.65c-1.068 0-2.085.21-3.022.579 3.055 1.206 5.22 4.178 5.22 7.662v17.65c0 3.484-2.165 6.456-5.22 7.662.937.37 1.954.58 3.022.58h17.65a8.242 8.242 0 0 0 8.242-8.241v-17.65a8.243 8.243 0 0 0-8.242-8.242zM145.361 187.733h-17.65c-1.068 0-2.085.21-3.022.579a8.237 8.237 0 0 1 5.219 7.662v17.65c0 3.484-2.165 6.456-5.219 7.662.937.37 1.954.58 3.022.58h17.65a8.242 8.242 0 0 0 8.242-8.241v-17.65a8.242 8.242 0 0 0-8.242-8.242zM77.095 187.733h-17.65c-1.068 0-2.085.21-3.022.579 3.055 1.206 5.22 4.178 5.22 7.662v17.65c0 3.484-2.165 6.456-5.22 7.662.937.37 1.954.58 3.022.58h17.65a8.242 8.242 0 0 0 8.242-8.241v-17.65a8.243 8.243 0 0 0-8.242-8.242zM77.095 256h-17.65c-1.068 0-2.085.21-3.022.579 3.055 1.206 5.22 4.178 5.22 7.662v17.651c0 3.484-2.165 6.456-5.22 7.662.937.37 1.954.58 3.022.58h17.65a8.242 8.242 0 0 0 8.242-8.241v-17.651A8.243 8.243 0 0 0 77.095 256zM77.095 324.267h-17.65c-1.068 0-2.085.21-3.022.579 3.055 1.206 5.22 4.178 5.22 7.662v17.651c0 3.484-2.165 6.456-5.22 7.662.937.37 1.954.58 3.022.58h17.65a8.242 8.242 0 0 0 8.242-8.241v-17.651a8.243 8.243 0 0 0-8.242-8.242zM145.361 256h-17.65c-1.068 0-2.085.21-3.022.579a8.237 8.237 0 0 1 5.219 7.662v17.651c0 3.484-2.165 6.456-5.219 7.662.937.37 1.954.58 3.022.58h17.65a8.242 8.242 0 0 0 8.242-8.241v-17.651a8.242 8.242 0 0 0-8.242-8.242zM145.361 324.267h-17.65c-1.068 0-2.085.21-3.022.579a8.237 8.237 0 0 1 5.219 7.662v17.651c0 3.484-2.165 6.456-5.219 7.662.937.37 1.954.58 3.022.58h17.65a8.242 8.242 0 0 0 8.242-8.241v-17.651a8.241 8.241 0 0 0-8.242-8.242zM213.628 256h-17.65c-1.068 0-2.085.21-3.022.579 3.055 1.206 5.22 4.178 5.22 7.662v17.651c0 3.484-2.165 6.456-5.22 7.662.937.37 1.954.58 3.022.58h17.65a8.242 8.242 0 0 0 8.242-8.241v-17.651a8.243 8.243 0 0 0-8.242-8.242zM290.136 290.133v-25.892a8.241 8.241 0 0 0-8.242-8.241h-17.65c-1.068 0-2.085.21-3.022.579 3.055 1.206 5.22 4.178 5.22 7.662v17.651c0 3.484-2.165 6.456-5.22 7.662.937.37 1.954.58 3.022.58h25.892zM213.628 324.267h-17.65c-1.068 0-2.085.21-3.022.579 3.055 1.206 5.22 4.178 5.22 7.662v17.651c0 3.484-2.165 6.456-5.22 7.662.937.37 1.954.58 3.022.58h17.65a8.242 8.242 0 0 0 8.242-8.241v-17.651a8.242 8.242 0 0 0-8.242-8.242z"
                              data-original="#2a428c"
                            ></path>
                            <path
                              fill="#d3dcfb"
                              d="M437.114 143.721V392.533h23.711V153.6z"
                              data-original="#d3dcfb"
                            ></path>
                            <path
                              fill="#ff4155"
                              d="M460.825 153.6V68.266c0-18.851-15.282-34.132-34.132-34.132H51.191c-18.851 0-34.132 15.281-34.132 34.132V153.6z"
                              data-original="#ff4155"
                            ></path>
                            <path
                              fill="#e80054"
                              d="M124.609 75.993h-22.217a7.726 7.726 0 1 1 0-15.452h22.217a7.726 7.726 0 1 1 0 15.452zM179.191 75.993h-22.217a7.726 7.726 0 1 1 0-15.452h22.217c4.268 0 7.726 3.459 7.726 7.726s-3.458 7.726-7.726 7.726zM320.887 75.993h-22.218a7.726 7.726 0 1 1 0-15.452h22.218c4.268 0 7.726 3.459 7.726 7.726s-3.458 7.726-7.726 7.726zM375.47 75.993h-22.218a7.726 7.726 0 1 1 0-15.452h22.218a7.726 7.726 0 1 1 0 15.452z"
                              data-original="#e80054"
                            ></path>
                            <path
                              fill="#ebf5fc"
                              d="M162.125 64c0 11.782-9.551 21.333-21.333 21.333S119.459 75.782 119.459 64V21.333C119.458 9.551 129.009 0 140.791 0s21.333 9.551 21.333 21.333V64zM358.403 64c0 11.782-9.551 21.333-21.333 21.333S315.736 75.782 315.736 64V21.333C315.736 9.551 325.287 0 337.069 0s21.333 9.551 21.333 21.333V64z"
                              data-original="#ebf5fc"
                            ></path>
                            <path
                              fill="#d3dcfb"
                              d="M337.069 0c-4.38 0-8.448 1.324-11.836 3.588 5.725 3.826 9.498 10.343 9.498 17.746V64c0 7.402-3.773 13.92-9.498 17.746a21.233 21.233 0 0 0 11.836 3.588c11.782 0 21.333-9.551 21.333-21.333V21.333C358.403 9.551 348.852 0 337.069 0zM140.791 0c-4.38 0-8.448 1.324-11.836 3.588 5.725 3.826 9.498 10.343 9.498 17.746V64c0 7.402-3.773 13.92-9.498 17.746a21.233 21.233 0 0 0 11.836 3.588c11.782 0 21.333-9.551 21.333-21.333V21.333C162.125 9.551 152.574 0 140.791 0z"
                              data-original="#d3dcfb"
                            ></path>
                            <path
                              fill="#e80054"
                              d="M426.693 34.133H402.99c18.851 0 34.132 15.281 34.132 34.132V153.6h23.702V68.266c.001-18.851-15.281-34.133-34.131-34.133z"
                              data-original="#e80054"
                            ></path>
                            <path
                              fill="#e80054"
                              d="M17.058 111.74h443.767v15.453H17.058z"
                              data-original="#e80054"
                            ></path>
                            <circle
                              cx="366.942"
                              cy="384"
                              r="128"
                              fill="#4fabf7"
                              data-original="#4fabf7"
                            ></circle>
                            <circle
                              cx="366.942"
                              cy="384"
                              r="93.867"
                              fill="#ebf5fc"
                              data-original="#ebf5fc"
                            ></circle>
                            <path
                              fill="#3c58a0"
                              d="M366.942 374.659a7.725 7.725 0 0 1-7.726-7.726v-42.667a7.726 7.726 0 1 1 15.452 0v42.667a7.726 7.726 0 0 1-7.726 7.726zM409.609 391.726h-25.601a7.726 7.726 0 1 1 0-15.452h25.601a7.726 7.726 0 1 1 0 15.452z"
                              data-original="#3c58a0"
                            ></path>
                            <path
                              fill="#1886ea"
                              d="M366.942 256c-3.995 0-7.945.193-11.847.551C420.232 262.53 471.247 317.303 471.247 384s-51.016 121.47-116.153 127.449c3.902.358 7.852.551 11.847.551 70.692 0 128-57.308 128-128s-57.307-128-127.999-128z"
                              data-original="#1886ea"
                            ></path>
                            <path
                              fill="#d3dcfb"
                              d="M366.942 290.133c-4.01 0-7.961.253-11.839.741 46.252 5.821 82.028 45.295 82.028 93.126s-35.776 87.305-82.028 93.126c3.878.488 7.829.741 11.839.741 51.841 0 93.867-42.026 93.867-93.867s-42.026-93.867-93.867-93.867z"
                              data-original="#d3dcfb"
                            ></path>
                            <circle
                              cx="366.942"
                              cy="384"
                              r="17.067"
                              fill="#ffdd40"
                              data-original="#ffdd40"
                            ></circle>
                          </g>
                        </svg>
                      </span>
                      <span className="font-['Hind_Siliguri']">
                        {program?.date}
                      </span>
                    </p>
                    <p className="flex gap-4">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          version="1.1"
                          width="24"
                          height="24"
                          x="0"
                          y="0"
                          viewBox="0 0 512 512"
                        >
                          <g>
                            <path
                              d="m149.944 101.607-29.896-29.958c-6.935-6.949-16.16-10.775-25.977-10.775s-19.042 3.827-25.976 10.775L46.424 93.367c-14.265 14.293-14.265 37.551 0 51.845l29.959 30.021a14.952 14.952 0 0 0 10.618 4.404c3.833 0 7.668-1.461 10.596-4.382 5.864-5.852 46.47-46.591 52.326-52.435 5.863-5.851 5.873-15.348.021-21.213z"
                              fill="#105c6e"
                              data-original="#105c6e"
                            ></path>
                            <path
                              d="M256 3c-8.284 0-15 6.716-15 15v48c0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15V18c0-8.284-6.716-15-15-15z"
                              fill="#26879c"
                              data-original="#26879c"
                            ></path>
                            <path
                              d="M293 0h-74c-8.284 0-15 6.716-15 15s6.716 15 15 15h74c8.284 0 15-6.716 15-15s-6.716-15-15-15z"
                              fill="#de513c"
                              data-original="#de513c"
                            ></path>
                            <path
                              d="M256 0h-37c-8.284 0-15 6.716-15 15s6.716 15 15 15h37V0z"
                              fill="#fc6249"
                              data-original="#fc6249"
                            ></path>
                            <path
                              d="M418.645 118.615C375.203 75.083 317.441 51.108 256 51.108S136.797 75.083 93.355 118.615c-43.434 43.524-67.354 101.391-67.354 162.939s23.92 119.415 67.354 162.939C136.797 488.025 194.559 512 256 512s119.203-23.975 162.645-67.507c43.434-43.524 67.354-101.391 67.354-162.939s-23.92-119.415-67.354-162.939z"
                              fill="#de513c"
                              data-original="#de513c"
                            ></path>
                            <path
                              d="M256 51.108c-61.441 0-119.203 23.975-162.645 67.507-43.434 43.524-67.354 101.391-67.354 162.939s23.92 119.415 67.354 162.939C136.797 488.025 194.559 512 256 512V51.108z"
                              fill="#fc6249"
                              data-original="#fc6249"
                            ></path>
                            <path
                              d="M256 108.538c-95.218 0-172.684 77.614-172.684 173.015S160.782 454.569 256 454.569s172.684-77.615 172.684-173.016S351.218 108.538 256 108.538z"
                              fill="#96d1d9"
                              data-original="#96d1d9"
                            ></path>
                            <path
                              d="M256 108.538c-95.218 0-172.684 77.614-172.684 173.015S160.782 454.569 256 454.569V108.538z"
                              fill="#f4f2e6"
                              data-original="#f4f2e6"
                            ></path>
                            <path
                              d="M256 146.007c8.284 0 15-6.716 15-15v-21.808c-4.945-.428-9.946-.66-15-.66s-10.055.232-15 .66v21.808c0 8.284 6.716 15 15 15zM256 417.101c-8.284 0-15 6.716-15 15v21.808c4.945.428 9.946.66 15 .66s10.055-.232 15-.66v-21.808c0-8.284-6.716-15-15-15zM428.028 266.554h-21.481c-8.284 0-15 6.716-15 15s6.716 15 15 15h21.481c.426-4.945.656-9.946.656-15s-.23-10.055-.656-15zM120.453 281.554c0-8.284-6.716-15-15-15H83.972c-.426 4.945-.656 9.946-.656 15s.23 10.055.656 15h21.481c8.284 0 15-6.716 15-15zM293 272.897h-21.162V212.23c0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15v75.667c0 8.284 6.716 15 15 15H293c8.284 0 15-6.716 15-15s-6.716-15-15-15z"
                              fill="#105c6e"
                              data-original="#105c6e"
                            ></path>
                          </g>
                        </svg>
                      </span>
                      <span className="font-['Hind_Siliguri']">
                        {program?.time}
                      </span>
                    </p>
                    <div className="my-3">
                      <div className="card-actions justify-center w-full">
                        <Link
                          href={program?.fb_url.split(":")[1]}
                          target={"_blank"}
                          className="z-10 my-2  bg-transparent text-violet-600 border-violet-600  dark:text-white   border py-2 flex items-center w-full text-center justify-center gap-2 rounded-md px-3 "
                        >
                          <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            height="14"
                            width="14"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                          </svg>{" "}
                          <span> LEARN MORE</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* pagination */}
        {programs.length > 0 ? (
          <div className="pt-4 mx-auto text-center">
            <div className="join  text-center ">
              <button
                onClick={() => {
                  handlePagination("previous");
                }}
                className="join-item btn   dark:bg-violet-700 hover:dark:bg-violet-500  z-10 bg-violet-500 hover:bg-violet-700 disabled:bg-violet-500 dark:disabled:bg-violet-500  disabled:text-white dark:hover:bg-violet-800 text-white hover:text-white border-none "
                disabled={!pagination?.previousPage ? true : false}
              >
                Previous
              </button>
              <div className="w-[2.8px] h-full "></div>

              {new Array(pagination?.totalPages).fill(null).map((_, index) => (
                <>
                  <button
                    className={`join-item btn  dark:bg-violet-700 hover:dark:bg-violet-500 ${
                      pagination.currentPage === index + 1
                        ? "bg-violet-700 dark:bg-violet-800 dark:hover:bg-violet-800"
                        : "bg-violet-500 "
                    }  hover:bg-violet-700 dark:hover:bg-violet-800 text-white border-none  z-10  hover:text-white border-violet-300`}
                    onClick={() => {
                      handlePagination(index + 1);
                    }}
                  >
                    {index + 1}
                  </button>
                  <div className="w-[2.8px] h-full "></div>
                </>
              ))}

              <button
                className="join-item btn   dark:bg-violet-700 hover:dark:bg-violet-500  z-10 bg-violet-500 hover:bg-violet-700 dark:disabled:bg-violet-500 disabled:bg-violet-500 disabled:text-white text-white dark:hover:bg-violet-800 hover:text-white border-none"
                onClick={() => {
                  handlePagination("next");
                }}
                disabled={!pagination?.nextPage ? true : false}
              >
                Next
              </button>
            </div>
          </div>
        ) : (
          <div>
            <h1 className="text-center px-4 text-black dark:text-white">
              No Data Found!
            </h1>
          </div>
        )}
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
