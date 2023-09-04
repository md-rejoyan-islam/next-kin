"use client";
import ApiURL from "@/components/api/Api";
import Image from "next/image";
import Link from "next/link";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogs } from "./postsApiSlice";
import { ScaleLoader } from "react-spinners";

export default function Posts() {
  const { blogs, pagination } = useSelector((state) => state.blogs);
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
    dispatch(getAllBlogs({ page }));
  };
  if (blogs.length > 0) {
    return (
      <section className=" bg-[#fcf9fe]    dark:bg-[#151f32]    min-h-screen">
        <main className=" xl:w-[1200px] py-10 px-5 lg:m-auto ">
          <div className="z ">
            {blogs?.map((post, index) => (
              <div
                className=" text-black border dark:bg-[#182c49] dark:hover:bg-[#182c49dc] dark:text-white dark:border-[#2d2254] bg-[#fff] border-violet-200 rounded-[8px] z-10  flex  lg:mx-24 flex-col md:flex-row max-w-[400px] mx-auto md:max-w-full my-5"
                key={index}
              >
                <figure className="basis-2/5 z-10 flex items-stretch">
                  <PhotoProvider>
                    <PhotoView
                      src={`${ApiURL}/public/images/posts/${post?.post_photo}`}
                    >
                      <Image
                        src={`${ApiURL}/public/images/posts/${post?.post_photo}`}
                        width={400}
                        height={300}
                        alt="KIN blood donation"
                        layout="responsive"
                        placeholder="blur"
                        blurDataURL={`${ApiURL}/public/images/posts/${post?.post_photo}`}
                        loading="lazy"
                        className="md:rounded-l-md rounded-t-md md:rounded-tr-none  object-cover w-full h-full "
                      />
                    </PhotoView>
                  </PhotoProvider>
                </figure>
                <div className="pb-2 basis-3/5 p-5  dark:hover:bg-[#150f31b9] z-10 flex flex-col justify-between">
                  <div className="">
                    <h3 className="font-bold  text-2xl text-justify">
                      {post?.title}
                    </h3>

                    {/* large display */}
                    <p
                      className="xl:block hidden text-justify text-[17px]"
                      id="details"
                    >
                      {post?.banner?.split(" ").slice(0, 30).join(" ")}. . .
                    </p>
                    {/* medium display */}
                    <p
                      className="md:block xl:hidden hidden text-justify text-[17px]"
                      id="details"
                    >
                      {post?.banner?.split(" ").slice(0, 17).join(" ")}. . .
                    </p>
                    {/* small display */}
                    <p
                      className="md:hidden text-justify text-[17px]"
                      id="details"
                    >
                      {post?.banner?.split(" ").slice(0, 17).join(" ")}. . .
                    </p>

                    <div className="card-actions justify-start">
                      <Link
                        href={`/posts/${post?.slug}`}
                        className="z-10 my-2  bg-transparent text-violet-600 border-violet-600  dark:text-white   border py-2 flex items-center gap-2 rounded-md px-3 "
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
                        <span> Read Full Post</span>
                      </Link>
                    </div>
                  </div>
                  <div className="text-left pt-3 flex justify-between text-[17px]">
                    <span className="flex gap-3 items-center">
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
                      {post.date}
                      {/* {post &&
                        new Date(post.createdAt)
                          .toLocaleString("en-US", {
                            timeZone: "Asia/Dhaka",
                            dateStyle: "long",
                            timeStyle: "short",
                          })
                          .split("at")[0]} */}
                    </span>
                    <span className=" flex items-center gap-2">
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
                              fill="#6c7ed6"
                              d="M444.394 3.996H159.322c-37.183 0-67.606 30.423-67.606 67.606v23.004h257.871c37.183 0 67.606 30.423 67.606 67.606v168.547h27.201c37.183 0 67.606-30.423 67.606-67.606V71.602c0-37.184-30.423-67.606-67.606-67.606z"
                              data-original="#6c7ed6"
                            ></path>
                            <path
                              fill="#4f67d2"
                              d="M396.461 91.515H111.389a67.033 67.033 0 0 0-19.673 2.946v.145h257.871c37.183 0 67.606 30.423 67.606 67.606v168.547h27.2a67.033 67.033 0 0 0 19.673-2.946V159.121c.001-37.183-30.422-67.606-67.605-67.606z"
                              data-original="#4f67d2"
                            ></path>
                            <path
                              fill="#60b8fe"
                              d="M352.678 91.515H67.606C30.423 91.515 0 121.938 0 159.121v191.55c0 37.183 30.423 67.606 67.606 67.606h171.096c7.335 0 12.811 6.826 11.133 13.966-4.537 19.317-11.48 39.745-21.744 60.686-4.609 9.405 5.876 18.966 14.782 13.454 25.751-15.937 62.389-42.61 93.244-80.317 4.056-4.957 10.156-7.79 16.561-7.79 37.183 0 67.606-30.423 67.606-67.606V159.12c0-37.182-30.423-67.605-67.606-67.605z"
                              data-original="#60b8fe"
                            ></path>
                            <path
                              fill="#23a8fe"
                              d="M293.618 432.243c1.677-7.141-3.798-13.966-11.133-13.966h-43.783c7.335 0 12.81 6.825 11.133 13.966-4.537 19.317-11.48 39.745-21.744 60.686-4.609 9.405 5.876 18.966 14.782 13.454a413.564 413.564 0 0 0 33.509-23.108c7.832-17.563 13.399-34.696 17.236-51.032zM43.783 350.671v-191.55c0-37.183 30.423-67.606 67.606-67.606H67.606C30.423 91.515 0 121.938 0 159.121v191.55c0 37.183 30.423 67.606 67.606 67.606h43.783c-37.184 0-67.606-30.422-67.606-67.606z"
                              data-original="#23a8fe"
                            ></path>
                            <g fill="#dfebfa">
                              <circle
                                cx="93.714"
                                cy="260.397"
                                r="22.434"
                                fill="#dfebfa"
                                data-original="#dfebfa"
                              ></circle>
                              <circle
                                cx="166.174"
                                cy="260.397"
                                r="22.434"
                                fill="#dfebfa"
                                data-original="#dfebfa"
                              ></circle>
                              <circle
                                cx="238.633"
                                cy="260.397"
                                r="22.434"
                                fill="#dfebfa"
                                data-original="#dfebfa"
                              ></circle>
                              <circle
                                cx="311.093"
                                cy="260.397"
                                r="22.434"
                                fill="#dfebfa"
                                data-original="#dfebfa"
                              ></circle>
                            </g>
                            <path
                              fill="#b1dbfc"
                              d="M93.714 260.397c0-8.302 4.514-15.546 11.217-19.425a22.323 22.323 0 0 0-11.217-3.009c-12.39 0-22.434 10.044-22.434 22.434s10.044 22.434 22.434 22.434a22.32 22.32 0 0 0 11.217-3.009c-6.704-3.879-11.217-11.123-11.217-19.425zM166.174 260.397c0-8.302 4.514-15.546 11.217-19.425a22.323 22.323 0 0 0-11.217-3.009c-12.39 0-22.434 10.044-22.434 22.434s10.044 22.434 22.434 22.434c4.088 0 7.916-1.099 11.217-3.009-6.704-3.879-11.217-11.123-11.217-19.425zM238.633 260.397c0-8.302 4.514-15.546 11.217-19.425a22.326 22.326 0 0 0-11.217-3.009c-12.39 0-22.434 10.044-22.434 22.434s10.044 22.434 22.434 22.434a22.32 22.32 0 0 0 11.217-3.009c-6.703-3.879-11.217-11.123-11.217-19.425zM311.093 260.397c0-8.302 4.513-15.546 11.217-19.425a22.326 22.326 0 0 0-11.217-3.009c-12.39 0-22.434 10.044-22.434 22.434s10.044 22.434 22.434 22.434a22.32 22.32 0 0 0 11.217-3.009c-6.704-3.879-11.217-11.123-11.217-19.425z"
                              data-original="#b1dbfc"
                            ></path>
                          </g>
                        </svg>
                      </span>
                      {post?.comment?.length}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* pagination */}
          {blogs.length > 0 ? (
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

                {new Array(pagination?.totalPages)
                  .fill(null)
                  .map((_, index) => (
                    <>
                      <button
                        className={`join-item btn  dark:bg-violet-700 hover:dark:bg-violet-500 ${
                          pagination.currentPage === index + 1
                            ? "bg-violet-700 dark:bg-violet-700 dark:hover:bg-violet-800"
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
        </main>
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
