"use client";
import PhotoChange from "./PhotoChange";
import { toast } from "react-toastify";

import { AiFillFacebook, AiOutlineInstagram } from "react-icons/ai";
import { MdEdit } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { FaExchangeAlt } from "react-icons/fa";

import { IoMdEye } from "react-icons/io";
import { BsFillEyeSlashFill, BsLinkedin } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAuthData, setMessageEmpty } from "../login/authRedux/authSlice";
import Link from "next/link";

import { useRouter } from "next/navigation";
import { updateUserPassword } from "../login/authRedux/authApiSlice";

export default function Profile() {
  // password show
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const [inputs, setInputs] = useState({
    password: "",
    con_password: "",
  });

  // password change
  const handlePasswordChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const router = useRouter();
  // dispatch
  const dispatch = useDispatch();
  // message and error
  const { message, error, user } = useSelector(getAuthData);

  // password change submit
  const handlePasswordChangeSubmit = async (e) => {
    e.preventDefault();
    // field check
    if (!inputs.password || !inputs.con_password) {
      toast.error("All field are required!");
      return false;
    }
    // password check
    if (inputs.password.length < 6) {
      toast.error("Password can be at least 6 characters.");
      return false;
    }

    // password match
    if (inputs.password !== inputs.con_password) {
      toast.error("Password not match");
      return false;
    }

    dispatch(updateUserPassword({ password: inputs.password }));
  };

  // error or message show
  useEffect(() => {
    if (message == "Password updated successfully.") {
      document.getElementById("passwordChange").click();
      setInputs({ password: "", con_password: "" });
      toast.success(message);
    }
    if (error) {
      toast.error(error);
    }
    dispatch(setMessageEmpty());
  }, [error, message, dispatch]);

  return (
    <section className=" bg-[#fff]   px-5 m-auto text-justify  text-[17px] py-10  dark:bg-[#151f32]  dark:text-[#cacfd5]">
      <div className="lg:w-2/3 w-full mx-auto bg-[#f2f5f9] dark:bg-[#182c49] py-10 px-5">
        <div className="photo relative px-3 ">
          <div className="header sm:flex justify-between items-end  ">
            <PhotoChange />

            <div className="space-x-2 sm:pt-0 pt-4 sm:block flex-wrap gap-3 flex justify-between items-center">
              <span
                className="cursor-pointer bg-blue-500 gap-1 hover:bg-violet-500 inline-flex items-center py-2 rounded-md px-4 mt-2"
                onClick={() => {
                  document.getElementById("passwordChange").click();
                }}
              >
                <span className="text-white sm:text-[16px] text-[13px]">
                  <FaExchangeAlt className="text-white text-sm sm:text-[16px] inline-block" />{" "}
                  Password Change
                </span>
              </span>
              <Link
                className="cursor-pointer bg-blue-500 gap-1 hover:bg-violet-500 inline-flex items-center py-2 rounded-md px-4"
                href={"/profile/edit"}
              >
                <span className="text-white  sm:text-[16px] text-[13px]">
                  <MdEdit className="text-white sm:text-[16px] text-sm inline-block" />{" "}
                  Edit Profile
                </span>
              </Link>
            </div>
          </div>
        </div>{" "}
        <br />
        <hr className="h-1 border-[3px] dark:border-[#0f0826] border-[#dddcdc]" />
        <div className="overflow-x-auto pt-5 text-black dark:text-[#c7cedc]">
          <div className="">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
              <div className=" col-span-1 ">
                <div className="space-y-1">
                  <label className="font-semibold ">Name:</label>
                  <input
                    type="text"
                    className="bg-white dark:bg-[#110b2a] w-full py-2 rounded-md px-4 "
                    disabled
                    value={user?.name}
                  />
                </div>
              </div>
              <div className=" col-span-1 w-full space-y-1">
                <div>
                  <label className="font-semibold">Email:</label>
                  <input
                    type="text"
                    className="bg-white dark:bg-[#110b2a] w-full py-2 rounded-md px-4"
                    disabled
                    value={user?.email}
                  />
                </div>
              </div>

              <div className="space-y-1">
                <div>
                  <label className="inline-block font-semibold">
                    Mobile Number:
                  </label>
                  <input
                    type="text"
                    className="bg-white dark:bg-[#110b2a] w-full py-2 rounded-md px-4"
                    disabled
                    value={user?.mobile}
                  />
                </div>
              </div>

              <div className="space-y-1">
                <div>
                  <label className="inline-block font-semibold">
                    Blood Group:
                  </label>
                  <input
                    type="text"
                    className="bg-white dark:bg-[#110b2a] w-full py-2 rounded-md px-4"
                    disabled
                    value={user?.blood_group ? user?.blood_group : "null"}
                  />
                </div>
              </div>

              <div className="space-y-1">
                <div>
                  <label className="font-semibold">Location:</label>
                  <input
                    type="text"
                    className="bg-white dark:bg-[#110b2a] w-full py-2 rounded-md px-4"
                    disabled
                    value={user?.location ? user?.location : "null"}
                  />
                </div>
              </div>

              <div className="space-y-1">
                <div>
                  <label className="font-semibold">Gender:</label>
                  <input
                    type="text"
                    className="bg-white dark:bg-[#110b2a] w-full py-2 rounded-md px-4"
                    disabled
                    value={user?.gender}
                  />
                </div>
              </div>

              <div className="">
                <div className="space-y-1">
                  <label className="font-semibold">Age:</label>
                  <input
                    type="text"
                    className="bg-white dark:bg-[#110b2a] w-full py-2 rounded-md px-4"
                    disabled
                    value={user?.age ? user?.age : "null"}
                  />
                </div>
              </div>

              {/* <div className="">
                <div className="space-y-1">
                  <label className="inline-block font-semibold">
                    KIN EC Member:
                  </label>
                  <input
                    type="text"
                    className="bg-white dark:bg-[#110b2a] w-full py-2 rounded-md px-4"
                    disabled
                    value={user?.isEc?.year}
                  />
                </div>
              </div> */}
              <div className="my-2 space-y-1 md:col-span-2">
                <div className="space-y-1">
                  <label className="font-semibold">Feedback:</label>
                  <textarea
                    disabled
                    value={user?.feedback ? user?.feedback : "null"}
                    className="bg-white dark:bg-[#110b2a] w-full p-4 rounded-md"
                  />
                </div>
              </div>
              <div className="">
                <div className="space-y-1">
                  <label className="inline-block font-semibold">
                    Social Link:
                  </label>
                  <div className="flex gap-10 items-center">
                    {user?.social_media?.fb && (
                      <Link
                        className="z-10"
                        href={user.social_media.fb}
                        target="_blank"
                      >
                        <AiFillFacebook className="text-3xl" />
                      </Link>
                    )}
                    {user?.social_media?.instagram && (
                      <Link
                        className="z-10"
                        href={user.social_media.fb}
                        target="_blank"
                      >
                        <AiOutlineInstagram className="text-3xl" />
                      </Link>
                    )}
                    {user?.social_media?.linkedIn && (
                      <Link
                        className="z-10"
                        href={user.social_media.linkedIn}
                        target="_blank"
                      >
                        <BsLinkedin className="text-3xl " />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* modal for password change */}

      <input type="checkbox" id="passwordChange" className="modal-toggle" />
      <div
        className="modal "
        style={{ backgroundColor: "rgba(30, 27, 40, 0.8)" }}
      >
        <div className="modal-box relative bg-white dark:bg-[#160d39] text-black dark:text-[#c7cedc]">
          <label
            htmlFor="passwordChange"
            className="btn btn-sm btn-circle border-none absolute right-2 top-2 bg-zinc-300 hover:bg-zinc-400 dark:bg-[#16224f] dark:hover:bg-[#12235c]"
          >
            <RxCross2 className="text-zinc-900 text-xl font-bold  dark:text-white" />
          </label>
          <div>
            <div>
              <h1 className="font-bold text-center text-xl">Update Password</h1>
            </div>
            <form onSubmit={handlePasswordChangeSubmit}>
              <div className="relative">
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  value={inputs.password}
                  placeholder="Enter new password"
                  className="mt-3 bg-white dark:border-[#103c3c] border dark:bg-[#00000075] border-gray-300 dark:text-[#91a3b8] text-sm rounded-lg focus:ring-0 focus:border-zinc-600 dark:focus:border-zinc-500 block w-full p-3 focus:outline-none"
                  onChange={handlePasswordChange}
                />
                <span
                  className="absolute top-3 right-4  cursor-pointer"
                  onClick={() => {
                    show ? setShow(false) : setShow(true);
                  }}
                >
                  {inputs.password &&
                    (show ? <IoMdEye /> : <BsFillEyeSlashFill />)}
                </span>
              </div>
              <div className="relative">
                <input
                  type={show2 ? "text" : "password"}
                  placeholder="Confirm password"
                  value={inputs.con_password}
                  name="con_password"
                  className="mt-3 bg-white dark:border-[#103c3c] border dark:bg-[#00000075] border-gray-300 dark:text-[#91a3b8] text-sm rounded-lg focus:ring-0 focus:border-zinc-600 dark:focus:border-zinc-500 block w-full p-3 focus:outline-none"
                  onChange={handlePasswordChange}
                />
                <span
                  className="absolute top-3 right-4 cursor-pointer"
                  onClick={() => {
                    show2 ? setShow2(false) : setShow2(true);
                  }}
                >
                  {inputs.con_password &&
                    (show2 ? <IoMdEye /> : <BsFillEyeSlashFill />)}
                </span>
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  value={"SUBMIT"}
                  className="bg-blue-500 dark:bg-violet-600 py-[6px] px-4 rounded-md w-full font-semibold text-white "
                >
                  UPDATE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
