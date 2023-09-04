"use client";
import ApiURL from "@/components/api/Api";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";

import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { getSingleBlog } from "../postsApiSlice";
import { ScaleLoader } from "react-spinners";
import { setBlogEmpty } from "../postSlice";

export default function SinglePost() {
  const dispatch = useDispatch();
  const { slug } = useParams();

  useEffect(() => {
    dispatch(getSingleBlog(slug));
  }, [dispatch, slug]);

  const { blogs, message, error, blog } = useSelector((state) => state.blogs);

  const [size, setSize] = useState(2);
  const [full, setFull] = useState("notFull");
  const formField = useRef(null);

  // comment on a blog
  const handleComment = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { name, email, comment } = Object.fromEntries(formData.entries());
    if (!name || !email || !comment) {
      return toast.error("Please fill all the fields");
    }

    const emailPattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

    if (!emailPattern.test(email)) {
      return toast.error("Please enter a valid email address");
    }
    dispatch(commentOnBlog({ data: { name, email, comment }, id: blog._id }));
  };

  const showAll = () => {
    setSize(blog?.comment.length);
    setFull("full");
  };
  const hide = () => {
    setFull("notFull");
    setSize(2);
  };

  // message and error
  //   useEffect(() => {
  //     if (message) {
  //       toast.success("Comment added successfully");
  //       formField.current.reset();
  //     }
  //     error && toast.error(error);
  //     dispatch(setMessageEmpty());
  //   }, [message, error]);
  if (blog) {
    return (
      <section className=" md:text-[20px] text-[18px] rounded-none  mx-auto dark:bg-[#151f32]     dark:text-zinc-200 bg-[#fff]">
        <div className="grid xl:grid-cols-12  dark:bg-[#0f172ad9] w-full divide-gray-400 ">
          <div className="border-r dark:text-[#fffffff6] text-black dark:border-[#2a3651]  w-full  m-auto col-span-9 py-5  lg:px-16 md:px-8 px-3">
            <div className="">
              <h2 className="font-['Hind_Siliguri'] card-title font-bold justify-center text-3xl pt-3">
                {blog?.title}
              </h2>
              <p className="mb-5 " id="subTitle"></p>

              <figure>
                <PhotoProvider>
                  <PhotoView
                    src={`${ApiURL}/public/images/posts/${blog?.post_photo}`}
                  >
                    <Image
                      src={`${ApiURL}/public/images/posts/${blog?.post_photo}`}
                      width={1200}
                      height={600}
                      alt={blog?.title}
                      
                      placeholder="blur"
                      blurDataURL={`${ApiURL}/public/images/posts/${blog?.post_photo}`}
                      loading="lazy"
                      className=" w-full mx-auto cursor-pointer"
                    />
                  </PhotoView>
                </PhotoProvider>
              </figure>
              <p
                className="my-5  text-justify"
                dangerouslySetInnerHTML={{ __html: blog?.details }}
              ></p>
            </div>
            {/* comment section */}

            <div className="bg-[#858ac524] dark:bg-[#202c4976] lg:py-8 py-6 rounded-md text-left ">
              <div className=" md:w-2/3 px-4 md:px-0 mx-auto">
                <h2 className="font-bold pb-3 text-black dark:text-white ">
                  {blog && blog?.comment?.length > 0 && "Comments :"}
                </h2>
                {blog?.comment &&
                  [...blog.comment]
                    .reverse()
                    .slice(0, size)
                    .map((com, index) => (
                      <div
                        key={index}
                        className="mb-3 bg-[#ffffff] dark:bg-[#64c8e70e] rounded-md p-2"
                      >
                        <p className="">
                          <span className=" dark:text-[#fc535a] font-black">
                            {com?.name}
                          </span>{" "}
                          <span className=" dark:text-[#ffffff8a]">
                            {" "}
                            {`<${com?.email}>`}{" "}
                            <span className="text-[13px] px-2">
                              {com?.time?.publish} {com?.time?.month},{" "}
                              {blog?.time?.year}
                            </span>
                          </span>
                        </p>
                        <p className="">{com?.comment}</p>
                      </div>
                    ))}
                {full === "full" && (
                  <button
                    className=" bg-violet-600 hover:bg-violet-500 text-[#fff] py-2 px-2 mb-4 rounded-md"
                    onClick={hide}
                  >
                    Hide
                  </button>
                )}
                {full === "notFull" && blog && blog.comment.length > 2 && (
                  <button
                    className=" bg-violet-600 hover:bg-violet-500 text-[#fff] py-2 px-2 mb-4 rounded-md"
                    onClick={showAll}
                  >
                    See More
                  </button>
                )}
              </div>

              <div className="md:w-2/3 px-4 md:px-0  mx-auto">
                <form onSubmit={handleComment} ref={formField}>
                  <h1 className="font-bold mb-3">Type Your Comment :</h1>
                  <div className="grid sm:grid-cols-2 pb-3 gap-3">
                    <div>
                      <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        className="w-full dark:bg-[#ffffff2b] p-3 bg-white rounded-md 
                      "
                      />
                    </div>
                    <div className="">
                      <input
                        type="name"
                        name="email"
                        placeholder="Email Address"
                        className="w-full dark:bg-[#ffffff2b] bg-white rounded-md p-3 "
                      />
                    </div>
                  </div>
                  <div>
                    <textarea
                      className="w-full dark:bg-[#ffffff2b] bg-white rounded-lg p-3"
                      name="comment"
                      rows={"4"}
                      placeholder="Type Your comment . . ."
                    ></textarea>
                  </div>
                  <div className="pt-2 text-left">
                    <input
                      type="submit"
                      value="Submit comment"
                      className=" dark:text-[#fff] bg-violet-600 p-3 btn border-none text-white hover:text-white hover:bg-violet-500 "
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className=" hidden xl:col-span-3  px-5 pt-5 h-fit  xl:block sticky top-1  mb-5">
            <h2 className=" text-center text-xl font-bold text-black dark:text-white">
              Release Notes
            </h2>
            <ul className="">
              {blogs &&
                blogs?.map((blog, index) => (
                  <li className="my-3 " key={index}>
                    <div className="flex justify-items-start relative  bg-white dark:bg-[#141c2f]">
                      <span className="-mr-5 bg-zinc-200 h-fit rounded-md ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M4 6h2v2H4zm0 5h2v2H4zm0 5h2v2H4zm16-8V6H8.023v2H18.8zM8 11h12v2H8zm0 5h12v2H8z"></path>
                        </svg>
                      </span>

                      <Link
                        href={`/posts/${blog?.slug}`}
                        onClick={()=>{
                          dispatch(setBlogEmpty()); 
                        }}
                        className=" hover:text-[#ed1018] dark:hover:text-[#fc535a]  active:bg-transparent  focus-visible:outline-none "
                      >
                        <span className="pl-8 pb-[4px]">{blog?.title}</span>
                      </Link>
                    </div>
                  </li>
                ))}
            </ul>
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
