"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { setMessageEmpty } from "./subscriberSlice";
import { addSubscriber } from "./subscriberApiSlice";

export default function Subscriber() {
  // subscriber
  const { error, message } = useSelector((state) => state.subscriber);

  // dispatch
  const dispatch = useDispatch();

  const modalId = useRef(null);
  const [subscriber, setScriber] = useState("");
  const [subscribeErr, setSubscribeErr] = useState(false);

  // handle subscribe
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!subscriber) {
      setSubscribeErr(true);
      toast.error("Email is required!");
      return false;
    }
    const emailPattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    const emailTest = emailPattern.test(subscriber);
    if (!emailTest) {
      setSubscribeErr(true);
      toast.error("Invalid Email Address");
      return false;
    }

    dispatch(addSubscriber({ email: subscriber }));
  };
  useEffect(() => {
    if (message) {
      setScriber("");
      toast.success(message);
      modalId.current.click();
    }
    error && toast.error(error) && setSubscribeErr(true);
    dispatch(setMessageEmpty());
  }, [error, message, dispatch]);
  return (
    <>
      <form onSubmit={handleSubmit} className="mx-auto w-fit">
        <div className="btn-group  m-auto md:w-[650px] w-full px-5 sm:px-16 md:my-6 my-2">
          <input
            type="text"
            name="email"
            className={`dark:text-white z-10 py-5 w-3/5 dark:bg-[#1c1e306c] dark:border-zinc-700   px-3 rounded-l-md border focus:outline-none bg-[#f7f5f5]   text-lg ${
              subscribeErr
                ? "text-red-500 border-red-500 dark:border-red-500"
                : "text-black border-sky-400"
            }`}
            value={subscriber}
            onChange={(e) => {
              setSubscribeErr(false);
              setScriber(e.target.value);
            }}
            placeholder="example@gmail.com"
          />
          <button
            className="bg-[#f41e1e] z-10 px-3 py-5 rounded-r-md  w-2/5 sm:text-2xl text-lg text-white"
            type="submit"
          >
            SUBSCRIBE
          </button>
        </div>
      </form>

      {/* modal */}

      <div>
        <input
          type="checkbox"
          id="modalId"
          ref={modalId}
          className="modal-toggle"
        />
        <div className="modal ">
          <div className="modal-box relative dark:text-white bg-white dark:bg-[#000000da]">
            <label
              htmlFor="my-modal-3"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="text-2xl   font-bold">Successfully subscribe.</h3>
            <p className="py-4 text-xl dark:text-[#cdd6e2]">
              For More Details. Please{" "}
              <Link
                className="font-bold text-[#fc535a] underline"
                href={"/register"}
              >
                Register Now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
