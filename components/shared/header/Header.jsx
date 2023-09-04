"use client";
import { usePathname, useRouter } from "next/navigation";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import "./Header.scss";
import { HiMenuAlt1 } from "react-icons/hi";
import { useEffect, useRef, useState } from "react";

import { toast } from "react-toastify";
import usePopupControl from "@/hooks/popupControl/usePopupControl";
import Link from "next/link";

import "./Header.scss";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { getAllAdvisors } from "@/app/advisors/advisorApiSlice";
import { getAllEC } from "@/app/executive-committee/ecApiSlice";
import { getAllPrograms } from "@/app/programs/programsApiSlice";
import { getAllBlogs } from "@/app/posts/postsApiSlice";
import { allSliders } from "@/components/slider/sliderApiSlice";
import { loggedInUser, userLogout } from "@/app/login/authRedux/authApiSlice";
import { getAuthData, setMessageEmpty } from "@/app/login/authRedux/authSlice";

export default function Header() {
  const pathname = usePathname();
  const dispatch = useDispatch();

  let theme = "";

  if (typeof window !== "undefined") {
    theme = localStorage.getItem("theme") || "light";
    if (theme === "dark") {
      document.querySelector("body").classList.add("dark");
      theme = "dark";
    } else {
      document.querySelector("body").classList.remove("dark");
      theme = "light";
    }
  }

  const handleChangeTheme = () => {
    if (theme === "light") {
      document.querySelector("body").classList.add("dark");
      localStorage.setItem("theme", "dark");
      theme = "dark";
    } else {
      document.querySelector("body").classList.remove("dark");
      localStorage.setItem("theme", "light");
      theme = "light";
    }
  };

  // user

  const { user, message } = useSelector(getAuthData);
  // dispatch
  // const dispatch = useDispatch();

  // navigate
  // const navigate = useNavigate();

  // navbar close
  const { isOpen, toggleMenu, dropDownRef } = usePopupControl();

  // sticky mode
  const [direction, setDirection] = useState("relative");

  useEffect(() => {
    let oldScrollY = window.scrollY;
    const handleScroll = () => {
      oldScrollY > window.scrollY ? setDirection("sticky") : setDirection("");
      oldScrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [direction]);

  // handle logout
  const handleLogout = () => {
    dispatch(userLogout());
  };

  const router = useRouter()

  useEffect(() => {
    if (message === "Successfully Logout.") {
      toast.success(message);
      dispatch(setMessageEmpty());
      router.push('/login')
    }
  }, [message, dispatch,router]);
  const dropDownMenuRef = useRef(null);

  // organizing week
  const [showOrg, setShowOrg] = useState(false);

  // all api call

  useEffect(() => {
    dispatch(loggedInUser());
    dispatch(getAllAdvisors());
    dispatch(getAllEC());
    dispatch(getAllPrograms());
    dispatch(getAllBlogs());
    dispatch(allSliders());
  }, [dispatch]);

  return (
    <section
      className={`  top-0  bg-[#f2f5f9] dark:bg-[#0f1829] shadow-md     border  dark:border-[#1b2341] dark:border-b dark:border-t-0 dark:border-l-0 dark:border-r-0 ${direction} `}
      style={{ zIndex: "100" }}
    >
      <div className=" navbar  px-4 py-0 xl:w-[1200px] m-auto ">
        <div className="navbar-start  w-fit grow lg:grow-0 " ref={dropDownRef}>
          <button
            className="p-2 text-[#374246] dark:text-white bg-[#5a7b862c] cursor-pointer dark:bg-[#9f98b720] rounded-md lg:hidden"
            onClick={() => {
              toggleMenu(!isOpen);
            }}
          >
            <HiMenuAlt1 className="text-[22px] " />
          </button>
          {/* vertical menu */}
          <div className="dropdown">
            {isOpen && (
              <ul
                tabIndex={0}
                className="top-[33px] -left-[54px] p-2 shadow  rounded-b-md w-60 absolute dark:bg-[#0f0826f7] space-y-[1px] bg-[#f1f5f9] lg:hidden"
                ref={dropDownMenuRef}
                style={{ zIndex: "300" }}
              >
                <li
                  className=""
                  onClick={() => {
                    toggleMenu(!isOpen);
                  }}
                >
                  <Link
                    href={"/"}
                    className={`${
                      pathname === "/" ? "active" : ""
                    } custom-style-menu-a`}
                  >
                    Home
                  </Link>
                </li>
                <li className="text-[#334155]  active:bg-transparent   ">
                  <label
                    htmlFor="menu-toggle"
                    className="flex justify-between w-full cursor-pointer"
                  >
                    <span className=" w-full h-full custom-style-menu-a new-menu flex justify-between py-[6px] px-[10px]">
                      About Us
                      <MdKeyboardArrowDown className="text-xl" />
                    </span>
                  </label>
                  <input type="checkbox" id="menu-toggle" className="hidden" />

                  <ul
                    className=" 
                      space-y-[2px] shadow-md mt-1 vertical-child-1 bg-white dark:bg-[#1f273476] z-50  rounded-md "
                  >
                    <li
                      className="rounded-[4px]"
                      onClick={() => {
                        toggleMenu(!isOpen);
                      }}
                    >
                      <Link
                        href={"/our-history"}
                        className={`${
                          pathname === "/our-history" ? "active" : ""
                        } custom-style-menu-a`}
                      >
                        Our History
                      </Link>
                    </li>
                    <li
                      onClick={() => {
                        toggleMenu(!isOpen);
                      }}
                    >
                      <Link
                        href={"/executive-committee"}
                        className={`${
                          pathname === "/executive-committee" ? "active" : ""
                        } custom-style-menu-a`}
                      >
                        Executive Committee
                      </Link>
                    </li>
                    <li
                      onClick={() => {
                        toggleMenu(!isOpen);
                      }}
                    >
                      <Link
                        href={"/advisors"}
                        className={`${
                          pathname === "/advisors" ? "active" : ""
                        } custom-style-menu-a`}
                      >
                        Advisors
                      </Link>
                    </li>
                    <li
                      onClick={() => {
                        toggleMenu(!isOpen);
                      }}
                    >
                      <Link
                        href={"/faq"}
                        className={`${
                          pathname === "/faq" ? "active" : ""
                        } custom-style-menu-a`}
                      >
                        FAQ
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className=" text-[#334155]  active:bg-transparent ">
                  <label
                    htmlFor="menu-toggle2"
                    className="flex justify-between w-full"
                  >
                    <span className="custom-style-menu-a flex justify-between py-[6px] px-[10px] cursor-pointer hover:text-white w-full h-full">
                      Wings
                      <MdKeyboardArrowDown className="text-xl" />
                    </span>
                  </label>
                  <input type="checkbox" id="menu-toggle2" className="hidden" />

                  <ul className=" space-y-[2px] shadow-md mt-1 vertical-child-2 bg-white z-30 dark:bg-[#1f273476]  rounded-md ">
                    <li
                      onClick={() => {
                        toggleMenu(!isOpen);
                      }}
                    >
                      <Link
                        href={"/wings/kin-school"}
                        className={`${
                          pathname === "/wings/kin-school" ? "active" : ""
                        } custom-style-menu-a`}
                      >
                        KIN School
                      </Link>
                    </li>
                    <li
                      onClick={() => {
                        toggleMenu(!isOpen);
                      }}
                    >
                      <Link
                        href={"/wings/blood-donation"}
                        className={`${
                          pathname === "/wings/blood-donation" ? "active" : ""
                        } custom-style-menu-a`}
                      >
                        Blood Donation
                      </Link>
                    </li>
                    <li
                      onClick={() => {
                        toggleMenu(!isOpen);
                      }}
                    >
                      <Link
                        href={"/wings/social-awareness"}
                        className={`${
                          pathname === "/wings/social-awareness" ? "active" : ""
                        } custom-style-menu-a`}
                      >
                        Social Awareness
                      </Link>
                    </li>
                    <li
                      onClick={() => {
                        toggleMenu(!isOpen);
                      }}
                    >
                      <Link
                        href={"/wings/charity&aid"}
                        className={`${
                          pathname === "/wings/charity&aid" ? "active" : ""
                        } custom-style-menu-a`}
                      >
                        Charity & Aid
                      </Link>
                    </li>
                    <li
                      onClick={() => {
                        toggleMenu(!isOpen);
                      }}
                    >
                      <Link
                        href={"/wings/winter-cloth-distribution"}
                        className={`${
                          pathname === "/wings/winter-cloth-distribution"
                            ? "active"
                            : ""
                        } custom-style-menu-a`}
                      >
                        Winter Cloth Distribution
                      </Link>
                    </li>
                  </ul>
                </li>

                <li
                  onClick={() => {
                    toggleMenu(!isOpen);
                  }}
                >
                  <Link
                    href={"/posts"}
                    className={`${
                      pathname === "/posts" ? "active" : ""
                    } custom-style-menu-a`}
                  >
                    Blog
                  </Link>
                </li>

                <li
                  onClick={() => {
                    toggleMenu(!isOpen);
                  }}
                >
                  <Link
                    href={"/programs"}
                    className={`${
                      pathname === "/programs" ? "active" : ""
                    } custom-style-menu-a`}
                  >
                    Programs
                  </Link>
                </li>

                {showOrg && (
                  <li
                    onClick={() => {
                      toggleMenu(!isOpen);
                    }}
                  >
                    <Link
                      href={"/organizing-week"}
                      className={`${
                        pathname === "/organizing-week" ? "active" : ""
                      } custom-style-menu-a`}
                    >
                      Organizing Week
                    </Link>
                  </li>
                )}

                {user && (
                  <li
                    onClick={() => {
                      toggleMenu(!isOpen);
                    }}
                  >
                    <Link
                      href={"/profile"}
                      className={`${
                        pathname === "/profile" ? "active" : ""
                      } custom-style-menu-a`}
                    >
                      Profile
                    </Link>
                  </li>
                )}

                {/* dashboard or profile */}

                <li
                  onClick={() => {
                    toggleMenu(!isOpen);
                  }}
                >
                  {user ? (
                    <Link
                      className="  custom-style-menu-a"
                      onClick={handleLogout}
                      href={""}
                    >
                      Sign Out
                    </Link>
                  ) : (
                    <Link
                      href={"/login"}
                      className={`${
                        pathname === "/login" ? "active" : ""
                      } custom-style-menu-a`}
                    >
                      Login
                    </Link>
                  )}
                </li>
              </ul>
            )}
          </div>

          {/* logo */}
          <Link className={` h-full  md:mx-0 w-full`} href={"/"}>
            <Image
              src="/images/logo/logo_black.png"
              alt=""
              className="h-16 dark:hidden block mx-auto w-auto"
              width={"100"}
              height={"52"}
              priority={true}
            />
            <Image
              src="/images/logo/logo_white.png"
              alt=""
              className="h-16 dark:block hidden mx-auto w-auto"
              width={"100"}
              height={"52"}
              priority={true}
            />
          </Link>
        </div>
        {/* horizontal */}
        <div className="navbar-center hidden lg:flex p-0 grow ">
          <ul className="menu menu-horizontal p-0 menu-compact space-x-2 mx-auto">
            <li>
              <Link
                href={"/"}
                className={`${
                  pathname === "/" ? "active" : ""
                } custom-style-menu-a`}
              >
                Home
              </Link>
            </li>

            <li>
              <span className="custom-style-menu-a">
                About Us
                <MdKeyboardArrowDown className="text-xl" />
              </span>
              <ul
                className="py-0 shadow-md  top-[35px] dark:bg-[#0f0826] dark:text-zinc-100 
                   bg-[#f1f5f9] text-[#000]  drop-child-1"
                style={{ zIndex: "100" }}
              >
                <li>
                  <Link
                    href={"/our-history"}
                    className={`${
                      pathname === "/our-history" ? "active" : ""
                    } custom-style-menu-a`}
                  >
                    Our History
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/executive-committee"}
                    className={`${
                      pathname === "/executive-committee" ? "active" : ""
                    } custom-style-menu-a`}
                  >
                    Executive Committee
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/advisors"}
                    className={`${
                      pathname === "/advisors" ? "active" : ""
                    } custom-style-menu-a `}
                  >
                    Advisors
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/faq"}
                    className={`${
                      pathname === "/profile" ? "active" : ""
                    } custom-style-menu-a mb-[-1px]`}
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <span className="custom-style-menu-a">
                Wings
                <MdKeyboardArrowDown className="text-xl" />
              </span>
              <ul
                className="py-0 m-0 shadow-md   dark:bg-[#0f0826]  
                   bg-[#f1f5f9] 
                     drop-child-2"
                style={{ zIndex: "100" }}
              >
                <li>
                  <Link
                    href={"/wings/kin-school"}
                    className={`${
                      pathname === "/wings/kin-school" ? "active" : ""
                    } custom-style-menu-a`}
                  >
                    KIN School
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/wings/blood-donation"}
                    className={`${
                      pathname === "/wings/blood-donation" ? "active" : ""
                    } custom-style-menu-a`}
                  >
                    Blood Donation
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/wings/social-awareness"}
                    className={`${
                      pathname === "/wings/social-awareness" ? "active" : ""
                    } custom-style-menu-a`}
                  >
                    Social Awareness
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/wings/charity&aid"}
                    className={`${
                      pathname === "/wings/charity&aid" ? "active" : ""
                    } custom-style-menu-a`}
                  >
                    Charity & Aid
                  </Link>
                </li>
                <li className="">
                  <Link
                    href={"/wings/winter-cloth-distribution"}
                    className={`${
                      pathname === "/wings/winter-cloth-distribution"
                        ? "active"
                        : ""
                    } custom-style-menu-a mb-[-1px]`}
                  >
                    Winter Cloth Distribution
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link
                href={"/posts"}
                className={`${
                  pathname === "/posts" ? "active" : ""
                } custom-style-menu-a`}
              >
                Blog
              </Link>
            </li>

            <li>
              <Link
                href={"/programs"}
                className={`${
                  pathname === "/programs" ? "active" : ""
                } custom-style-menu-a`}
              >
                Programs
              </Link>
            </li>
            {showOrg && (
              <li>
                <Link
                  href={"/organizing-week"}
                  className={`${
                    pathname === "/organizing-week" ? "active" : ""
                  } custom-style-menu-a`}
                >
                  Organizing Week
                </Link>
              </li>
            )}
            {/*  profile */}

            {user && (
              <li>
                <Link
                  href={"/profile"}
                  className={`${
                    pathname === "/profile" ? "active" : ""
                  } custom-style-menu-a`}
                >
                  Profile
                </Link>
              </li>
            )}

            {/* login or sign out part */}
            <li>
              {user ? (
                <Link
                  className="custom-style-menu-a"
                  href={""}
                  onClick={handleLogout}
                >
                  Sign Out
                </Link>
              ) : (
                <Link
                  href={"/login"}
                  className={`${
                    pathname === "/login" ? "active" : ""
                  } custom-style-menu-a`}
                >
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>

        <div className="navbar-end  w-fit">
          <button
            className="border dark:border-zinc-800 p-3 rounded-full  text-[#374246] dark:text-white bg-[#5a7b862c] cursor-pointer dark:bg-[#9f98b720] "
            onClick={handleChangeTheme}
          >
            <BsFillMoonStarsFill className="block dark:hidden   " />
            <BsFillSunFill className="dark:block hidden" />
          </button>
        </div>
      </div>
    </section>
  );
}
