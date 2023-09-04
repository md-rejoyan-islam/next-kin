"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function FindAccount() {
  // dispatch
    const dispatch = useDispatch();
    const router =useRouter()
    const { message, error } = useSelector(getAuthData);
  //input
  const [input, setInput] = useState("");

  //search  email
  const handleSubmit = async () => {
    dispatch(findAccount({ email: input }));
  };

  useEffect(() => {
    dispatch(setMessageEmpty());
    if (message) {
      toast.success(message);
      if (message === "User found!") {
        router.push(`/password-reset?email=${input}`);
      }
    }
    error && toast.error(error);
  }, [message, error,router,dispatch]);
  return (
    <section className="bg-white dark:bg-[#151f32]  dark:text-[#cacfd5]   py-24 ">
      <div className=" ">
        <div className="content-body     p-4 border-zinc-700">
          <div className="dark:bg-[#182c49] max-w-[460px] mx-auto h-fit  rounded-md bg-[#eceff1]">
            <div className="content-header border-b p-4 dark:border-zinc-700 border-zinc-400">
              <h1 className="dark:text-[#cdd6dd] text-[#3c4046] font-bold text-xl text-center">
                Enter Your Email Address
              </h1>
            </div>
            <div className="content-body  text-[#3c4046]  p-4 border-zinc-700">
              <div className="relative mb-4">
                <label className=" cursor-text">
                  <span
                    className={`absolute   left-3 duration-150 text-zinc-500 ${
                      input
                        ? "top-[1px] text-[12px] dark:text-blue-400"
                        : "top-[18px] text-[20px]"
                    }`}
                  >
                    Enter Your Email Address
                  </span>
                  <input
                    type="text"
                    name="name"
                    value={input}
                    onChange={(e) => {
                      setInput(e.target.value);
                    }}
                    className={`focus:outline-none  py-3 h-16 bg-[#fafafa] text-zinc-800 dark:bg-[#0d091c52] dark:border-zinc-700 dark:text-[#b6bfca] focus:ring-0 focus:border-[#b5b2b2] border border-[#dbdbdb] w-full  text-[21px] px-3 rounded-md ${
                      input ? "pt-4 pb-0" : "py-[8px]"
                    }`}
                  />
                </label>
              </div>
            </div>
            <div className="flex content-footer justify-between p-4 text-right">
              <button
                className="z-10 text-[#ffffff] font-bold bg-[#9a7ff0] hover:bg-[#7161eb] dark:bg-[#2320e64d]  focus:outline-none focus:ring-0  rounded-lg text-sm   px-5 py-2.5 text-center"
                onClick={() => {
                  navigate("/login");
                }}
              >
                CANCEL
              </button>
              <button
                className="z-10 text-[#ffffff] font-bold bg-[#9a7ff0] hover:bg-[#7161eb] dark:bg-[#2420e6d4]  focus:outline-none focus:ring-0  rounded-lg text-sm   px-5 py-2.5 text-center"
                onClick={handleSubmit}
              >
                SEARCH
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* email verify modal */}
    </section>
  );
}
import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getAuthData, setMessageEmpty } from "../login/authRedux/authSlice";
import { findAccount } from "../login/authRedux/authApiSlice";
import { toast } from "react-toastify";



