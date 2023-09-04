'use client'
import Count from "@/components/count/Count";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { getAuthData, setMessageEmpty } from "../login/authRedux/authSlice";
import { activeAccount, sendActiveCode } from "../login/authRedux/authApiSlice";
import { toast } from "react-toastify";

export default function Verify() {
  // dispatch
  const dispatch = useDispatch();
  // user , message
  const { message, error } = useSelector(getAuthData);

  const { count, time, setTime } = Count(290);

  // search params
  const searchParams = useSearchParams();


  // navigate
const router =useRouter()

  // auto input field focus
  const focusChange = (e) => {
    if (e.target.value && e.target.nextElementSibling) {
      e.target.nextElementSibling.focus();
    } else if (
      e?.target.value &&
      e.key === "Enter" &&
      e.target.nextElementSibling
    ) {
      e.target.nextElementSibling.focus();
    }
    if (e.key === "Backspace" && e.target.previousElementSibling) {
      e.target.previousElementSibling.focus();
    }
  };

  // handle code submit & email verify
  const handleCodeSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const codeArray = [data.code1, data.code2, data.code3, data.code4];
    const code = codeArray.join("");

    dispatch(activeAccount({ code }));
    // value reset
    e.target.reset();
  };

  // handle resend code
  const handleResend = async () => {
    dispatch(sendActiveCode({ email: searchParams.get("email") }));
    setTime(300);
  };

  // message and error
  useEffect(() => {
    if (message) {
      toast.success(message);
      if (message === "Successfully activated your account.") {
        router.push("/login");
      }
    }
    error && toast.error(error);
    dispatch(setMessageEmpty());
  }, [message, error,dispatch,router]);
  return (
    <section className="  bg-white py-16  dark:bg-[#151f32]  dark:text-[#cacfd5]">
      <div className=" ">
        <div className="content-body     p-4 dark:border-zinc-700 border-zinc-300">
          <div className=" max-w-[460px] mx-auto h-fit  rounded-md dark:bg-[#182c49] bg-[#eceff1]">
            <div className="content-header border-b p-4 dark:border-zinc-700 border-zinc-300">
              <h1 className="text-[#3c4046] dark:text-[#cdd6e2] font-bold text-xl text-center">
                Enter Security Code
              </h1>
            </div>
            <div className="content-body text-center   text-[#3c4046]  p-4 dark:border-zinc-700 border-zinc-300 dark:text-[#cdd6e2]">
              <p>Four digit security code sent to your Email.</p>
              <p className="pt-2 flex justify-center">
                {time ? (
                  <span>Code Expired in : &nbsp; {count}</span>
                ) : (
                  <>
                    <span className="text-red-500">Expired!</span>
                  </>
                )}
              </p>
              <form className="pb-1 pt-4  " onSubmit={handleCodeSubmit}>
                <div className="flex justify-between px-4 ">
                  <input
                    type="text"
                    maxLength={"1"}
                    name="code1"
                    className="text-center z-10 text-2xl border w-16  rounded-sm h-16 dark:bg-[#0202246a] dark:text-[#cdd6dd] dark:border-zinc-700 border-zinc-300 focus:outline-none focus:border-zinc-600 focus:ring-0 bg-white"
                    onKeyUp={focusChange}
                  />
                  <input
                    type="text"
                    maxLength={"1"}
                    name="code2"
                    className="text-center z-10 text-2xl border w-16  rounded-sm h-16 dark:bg-[#0202246a] dark:text-[#cdd6dd] dark:border-zinc-700 border-zinc-300 focus:outline-none focus:border-zinc-600 focus:ring-0 bg-white"
                    onKeyUp={focusChange}
                  />
                  <input
                    type="text"
                    maxLength={"1"}
                    name="code3"
                    className="text-center z-10 text-2xl border w-16  rounded-sm h-16 dark:bg-[#0202246a] dark:text-[#cdd6dd] dark:border-zinc-700 border-zinc-300 focus:outline-none focus:border-zinc-600 focus:ring-0 bg-white"
                    onKeyUp={focusChange}
                  />
                  <input
                    type="text"
                    maxLength={"1"}
                    name="code4"
                    className="text-center z-10 text-2xl border w-16  rounded-sm h-16 dark:bg-[#0202246a] dark:text-[#cdd6dd] dark:border-zinc-700 border-zinc-300 focus:outline-none focus:border-zinc-600 focus:ring-0 bg-white"
                    onKeyUp={focusChange}
                  />
                </div>
                <div className="modal-action  pt-3 px-4 text-right">
                  {!time && (
                    <span
                      className="flex items-center text-white py-1 px-2 cursor-pointer z-10 rounded-sm bg-blue-600 text-sm"
                      onClick={handleResend}
                    >
                      resend code
                    </span>
                  )}
                  <button
                    type="submit"
                    className="py-[6px] px-3 hover:bg-[#1068f5] rounded-md   z-10 text-white bg-[#0c51d2] "
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
