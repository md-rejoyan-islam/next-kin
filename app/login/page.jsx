"use client";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

import { toast } from "react-toastify";
import {
  sendActiveCode,
  userLogin,

} from "./authRedux/authApiSlice";
import { useRouter } from "next/navigation";
import { getAuthData, setMessageEmpty } from "./authRedux/authSlice";

export default function Login() {
  // dispatch
  const dispatch = useDispatch();
  // message and error
  const { message, error } = useSelector((state)=>state.auth);
  // navigate
  const router = useRouter(); 
  // password show hide
  const [show, setShow] = useState(false);
  // is register before
  const [isRegister, setIsRegister] = useState(false);
  // input fields value
  const [inputs, setInputs] = useState({
    email: "",
    password: "",  
  });

  // input value change
  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // handle login submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = inputs;

    // empty  input field check
    if (!email || !password) {
      return toast.error("All field are required!");
    }

    


    dispatch(userLogin({ data: inputs, router }));
  };

  // message or error show
  useEffect(() => {
    if (message) {
      toast.success(message);
      setInputs({
        email: "",
        password: "",
      });
    }
    if (error) {
      toast.error(error);
      if (error == "Please active your account.") {
        setIsRegister(true);
      }
    }
    dispatch(setMessageEmpty());
  }, [message, error, dispatch]);

  // send account active email
  const handleActiveAccount = async () => {
    setIsRegister(false);
    dispatch(sendActiveCode({ email: inputs.email }));
    setTimeout(() => {
      // navigate("/verify?email=" + inputs.email);
      router.push("/verify?email=" + inputs.email);
    }, 500);
  };
  return (
    <section className="py-24 bg-[#fff] px-4 dark:bg-[#151f32]    dark:text-[#fff] ">
      <div className="bg-[#f6f7f8] max-w-[450px] mx-auto shadow-lg py-5 sm:px-8 px-4 rounded-md border  dark:bg-[#182c49] dark:border-[#6f5dbd29]  text-left">
        <h2 className="text-center text-2xl pt-1 pb-4 font-bold dark:text-white text-zinc-700">
          Login
        </h2>
        <form onSubmit={handleSubmit} className="dark:text-[#fff] z-10">
          <div className="my-4 flex items-center">
            <span className="bg-[#506bc2cf] rounded-[5px_0px_0px_5px] h-11 px-4 flex items-center">
              <FaUserAlt className="text-white" />
            </span>
            <input
              placeholder="Type Your Email Address"
              className=" z-10 rounded-[0px_5px_5px_0px] dark:bg-[#150d36] h-11 px-3 bg-white border text-[17px] text-zinc-600 dark:text-zinc-400 border-zinc-300 dark:border-zinc-600 focus:outline-none  w-full max-full "
              value={inputs.email}
              onChange={handleChange}
              name="email"
            />
          </div>
          <div className="mb-4 relative">
            <div className="flex items-center">
              <span className="bg-[#506bc2cf]  rounded-[5px_0px_0px_5px] h-11 px-4 flex items-center">
                <FaLock className=" text-white" />
              </span>
              <input
                placeholder="Type Your Password"
                name="password"
                className="rounded-[0px_5px_5px_0px] dark:bg-[#150d36] h-11 px-3 bg-white border text-[17px] text-zinc-600 dark:text-zinc-400 border-zinc-300 dark:border-zinc-600 focus:outline-none  w-full max-full  z-10"
                value={inputs.password}
                onChange={handleChange}
                type={show ? "text" : "password"}
              />
            </div>

            {/* eye icon */}

            <span
              className="z-10 cursor-pointer absolute top-3 right-5"
              onClick={() => {
                show ? setShow(false) : setShow(true);
              }}
            >
              {inputs.password &&
                (show ? (
                  <AiFillEyeInvisible className="text-[20px] text-[#76de0e]" />
                ) : (
                  <AiFillEye className="text-[20px]  text-[#76de0e]" />
                ))}
            </span>
          </div>
          <div className="my-5 z-10">
            <span className="text-sm flex justify-between">
              {!isRegister ? (
                <Link
                  className="z-10 block text-[17px] text-red-400 hover:text-blue-600 dark:text-red-400"
                  href={"/find-account"}
                >
                  Forgot Password?
                </Link>
              ) : (
                <button
                  className="z-10 block text-[17px] dark:text-red-400  text-red-400"
                  onClick={handleActiveAccount}
                >
                  Active account?
                </button>
              )}
              <Link
                href={"/register"}
                className="z-10  text-blue-600 px-2 text-[17px] hover:text-violet-600"
              >
                Sign Up
              </Link>
            </span>
          </div>

          <div className=" flex">
            <button
              className="z-10 py-2 rounded-md text-semibold font-semibold cursor-pointer bg-blue-500 hover:bg-violet-500 text-white border-none dark:bg-violet-600 dark:hover:bg-blue-600  w-full max-full 
                text-[17px]"
              type="submit"
            >
              LOGIN
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
