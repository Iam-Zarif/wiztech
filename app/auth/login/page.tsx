  "use client";

  import logo from "@/public/icons/common/logo.svg";
  import google from "@/public/icons/auth/google.svg";
  import eye from "@/public/icons/auth/eye.svg";
  import apple from "@/public/icons/auth/apple.svg";
  import Image from "next/image";
  import Link from "next/link";
  import { useMemo } from "react";

  export default function LoginPage() {
    const providers = useMemo(
      () => [
        { icon: google, alt: "Google", text: "Continue with Google" },
        { icon: apple, alt: "Apple", text: "Continue with Apple" },
      ],
      []
    );


    return (
      <div className="flex col-span-5  mx-auto flex-col items-center w-full">
              <Image
                src={logo}
                width={100}
                height={100}
                className="w-44"
                alt="logo"
                priority
              />
              <p className="text-2xl lg:text-[2.1rem] font-semibold mt-5">
                Welcome Back
              </p>
              <p className=" lg:font-medium mt-1">
                Let&apos;s login to grab amazing deal
              </p>

              <div className="flex w-full flex-col items-center mt-8 gap-6">
                {providers.map((provider, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-center cursor-pointer w-full gap-3 border rounded-lg p-4 border-(--color-border)"
                  >
                    <Image
                      src={provider.icon}
                      width={25}
                      height={25}
                      alt={provider.alt}
                      className="w-5 lg:w-6"
                      priority
                    />
                    <p className="text-[#42526D] text-sm lg:text-[16px] font-medium">
                      {provider.text}
                    </p>
                  </div>
                ))}

                <div className="w-full flex items-center gap-2">
                  <div className="w-full bg-(--color-border) h-px"></div>
                  <p className="text-gray-400 text-sm">Or</p>
                  <div className="w-full bg-(--color-border) h-px"></div>
                </div>
              </div>
              <form className="pt-6 w-full">
                <div className="relative w-full">
                  <input
                    id="email"
                    type="text"
                    placeholder=" "
                    className="peer bg-(--color-input) w-full rounded-lg px-3 pt-6 pb-2 text-black focus:outline-none"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-3 top-2 text-gray-400 text-xs leading-tight transition-all 
                peer-placeholder-shown:top-5   peer-placeholder-shown:text-gray-400 
                  peer-focus:top-2 peer-focus:text-xs peer-focus:text-black"
                  >
                    Email
                  </label>
                </div>

                <div className="relative w-full mt-6">
                  <input
                    id="password"
                    type="password"
                    placeholder=" "
                    className="peer bg-(--color-input) w-full rounded-lg px-3 pt-6 pb-2 text-black focus:outline-none"
                  />
                  <label
                    htmlFor="password"
                    className="absolute left-3 top-2 text-gray-400 text-xs leading-tight transition-all 
                peer-placeholder-shown:top-5   peer-placeholder-shown:text-gray-400 
                  peer-focus:top-2 peer-focus:text-xs peer-focus:text-black"
                  >
                    Password
                  </label>
                  <Image
                    src={eye}
                    alt="lock"
                    width={20}
                    height={20}
                    className="absolute top-1/2 right-3 -translate-y-1/2"
                  />
                </div>

                <div className="mt-2 text-sm lg:text-[16px] flex items-center justify-between w-full">
                  <div className="flex items-center gap-1">
                    <input type="checkbox" name="" className="cursor-pointer" id="" />
                    <p>Remember me</p>
                  </div>
                  <p className="underline">Forgot Password?</p>
                </div>

                <Link href={"/"} className="bg-(--color-primary) block text-center w-full rounded-lg p-4 mt-6 text-white">
                  Login
                </Link>
              </form>

              <div className="mt-6 text-sm lg:text-[16px]  flex items-center font-medium gap-2">
                <p>Already have an account?</p>
                <Link className="text-(--color-primary)" href={"/auth/register"}>
                  Sign Up
                </Link>
              </div>
            </div>
    );
  }
