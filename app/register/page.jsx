'use client'
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getAuthData, setMessageEmpty } from "../login/authRedux/authSlice";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { userRegister } from "../login/authRedux/authApiSlice";


export default function Register() {
  // dispatch
  const dispatch = useDispatch();
  // message and error
  const { message, error } = useSelector(getAuthData);
  // navigate
//   const navigate = useNavigate();
const router =useRouter()

  // inputs state
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    con_password: "",
    gender: "",
  });

  // input field change
  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  // form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, gender, con_password } = inputs;

    // input field check
    if (!email || !password || !name || !gender || !con_password) {
      return toast.error("All field are required!");
    }

    // password check
    if (password.length < 6) {
      return toast.error("Password can be at least 6 characters.");
    }
    // password match
    if (password !== con_password) {
      return toast.error("Password not match.");
    }

    dispatch(userRegister(inputs));
  };

  // message or error show
  useEffect(() => {
    dispatch(setMessageEmpty());
    if (message) {
      setInputs({
        name: "",
        email: "",
        password: "",
        con_password: "",
        gender: "",
      });
      router.push("/verify?email=" + inputs.email);
      toast.success(message);
      return;
    }
    error && toast.error(error);
  }, [message, error,dispatch,router]);
  return (
    <section className="bg-[#fff] py-24 dark:bg-[#151f32]    dark:text-white px-4 ">
      <div className="dark:bg-[#182c49] dark:border-[#22174bcf] max-w-[450px] bg-[#eceff17e] mx-auto  py-5 px-4 sm:px-8 rounded-md border text-left shadow-xl">
        <h2 className="text-center text-2xl pt-1 pb-4 font-bold dark:text-white text-zinc-700 ">
          Sign Up
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="relative mb-8">
            <input
              type="text"
              id="name"
              className="form-input peer"
              value={inputs.name}
              onChange={handleChange}
              placeholder=" "
              name="name"
            />
            <label htmlFor="name" className="form-label cursor-text">
              Enter Your Full Name
            </label>
          </div>

          <div className="relative mb-8">
            <input
              type="text"
              id="email"
              className="form-input peer"
              value={inputs.email}
              onChange={handleChange}
              placeholder=" "
              name="email"
            />
            <label htmlFor="email" className="form-label cursor-text">
              Enter Your Email Address
            </label>
          </div>

          <div className="relative mb-8">
            <input
              type={show2 ? "text" : "password"}
              name="password"
              value={inputs.password}
              onChange={handleChange}
              id="password"
              className="form-input peer"
              placeholder=" "
            />
            <label htmlFor="password" className="form-label cursor-text">
              Type Your Password
            </label>

            <span
              className="cursor-pointer absolute top-[14px] right-5"
              onClick={() => {
                show2 ? setShow2(false) : setShow2(true);
              }}
            >
              {inputs.password &&
                (show2 ? (
                  <AiFillEyeInvisible className="text-[20px] text-[#76de0e]" />
                ) : (
                  <AiFillEye className="text-[20px]  text-[#76de0e]" />
                ))}
            </span>
          </div>

          <div className="relative mb-8">
            <input
              type={show ? "text" : "password"}
              name="con_password"
              value={inputs.con_password}
              onChange={handleChange}
              id="con_password"
              className="form-input peer"
              placeholder=" "
            />
            <label htmlFor="con_password" className="form-label cursor-text">
              Confirm Your Password
            </label>

            <span
              className="cursor-pointer absolute top-[14px] right-5"
              onClick={() => {
                show ? setShow(false) : setShow(true);
              }}
            >
              {inputs.con_password &&
                (show2 ? (
                  <AiFillEyeInvisible className="text-[20px] text-[#76de0e]" />
                ) : (
                  <AiFillEye className="text-[20px]  text-[#76de0e]" />
                ))}
            </span>
          </div>

          <div className="relative mb-8">
            <div className="form-input peer">
              <span className="flex justify-between gap-4">
                <label className="dark:border-zinc-600 border-zinc-300 cursor-pointer flex-1 border py-2 text-center rounded-sm">
                  <input
                    type="radio"
                    onChange={handleChange}
                    value={"male"}
                    name="gender"
                  />{" "}
                  &nbsp; &nbsp; <span className="text-[17px]">Male</span>
                </label>
                <label className="dark:border-zinc-600 border-zinc-300 cursor-pointer flex-1 border py-2 text-center rounded-sm">
                  <input
                    onChange={handleChange}
                    value={"female"}
                    type="radio"
                    name="gender"
                  />{" "}
                  &nbsp; &nbsp; <span className="text-[17px]">Female</span>
                </label>
              </span>
            </div>
            <label className="form-label">Select Gender</label>
          </div>

          <div className="mt-4 flex justify-center mb-6  text-zinc-500 dark:text-zinc-300">
            Already have a Account? Please{" "}
            <Link
              href={"/login"}
              className="z-10 text-blue-600 font-semibold dark:text-blue-600 hover:text-violet-600 px-2 "
            >
              {" "}
              LOGIN
            </Link>
          </div>
          <div className="mb-6 flex">
            <input
              type="submit"
              className="z-10 border-none py-2 rounded-md text-[17px] font-semibold  w-full dark:bg-violet-600 text-white bg-blue-500 hover:bg-violet-500 cursor-pointer"
              value={"SIGN UP"}
            />
          </div>
        </form>
      </div>
    </section>
  );
}
