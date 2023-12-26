"use client";
import Image from "next/image";
import logo from "../../../public/images/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthProvider";

const navItems = [
  {
    route: "Home",
    path: "/",
  },
  {
    route: "All Jobs",
    path: "/all-jobs",
  },
  {
    route: "Applied Jobs",
    path: "/applied-jobs",
  },
  {
    route: "Add a Job",
    path: "/add-job",
  },
  {
    route: "My Jobs",
    path: "/my-jobs",
  },
  {
    route: "Blog",
    path: "/blog",
  },
];

const Navbar = () => {
  const pathName = usePathname();
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut();
  };

  return (
    <div className="navbar bg-base-100 px-5 py-3 shadow-md">
      <div className="w-full flex justify-between items items-center">
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems.map((item) => (
              <Link
                href={item.path}
                className={`px-3 text-lg font-semibold ${
                  item.path === pathName ? "text-blue-500" : "text-gray-600"
                }`}
              >
                {item.route}
              </Link>
            ))}
          </ul>
        </div>
        <Link href={"/"}>
          <Image src={logo} width={"200"} height={"200"} alt="" />
        </Link>

        <div className="flex items-center">
          <div className="justify-end items-center hidden lg:flex">
            <ul className="">
              {navItems.map((item) => (
                <Link
                  href={item.path}
                  className={`px-3 text-lg font-semibold ${
                    item.path === pathName ? "text-blue-500" : "text-gray-600"
                  }`}
                >
                  {item.route}
                </Link>
              ))}
            </ul>
          </div>
          <div className="pl-4">
            {user?.email ? (
              <div className="flex items-center gap-3">
                <Image
                  className="rounded-full w-12 h-12"
                  src={user?.photoURL}
                  width={200}
                  height={200}
                  alt=""
                />
                <button
                  onClick={() => handleLogOut()}
                  className="px-4 py-2 rounded-lg bg-red-500 font-semibold text-white"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                href={"/login"}
                className="px-4 py-2 rounded-lg bg-blue-500 font-semibold text-white"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
