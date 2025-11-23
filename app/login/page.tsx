"use client";

import Container from "@/layout/Container";
import logo from "@/public/icons/common/logo.svg";
import google from "@/public/icons/auth/google.svg";
import apple from "@/public/icons/auth/apple.svg";
import phone from "@/public/icons/auth/phone.svg";
import login from "@/public/images/login.svg";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

export default function LoginPage() {
  const providers = useMemo(
    () => [
      { icon: google, alt: "Google", text: "Continue with Google" },
      { icon: apple, alt: "Apple", text: "Continue with Apple" },
      { icon: phone, alt: "Email/Phone", text: "Continue with Email/Phone" },
    ],
    []
  );

  return (
    <Container>
      <div className="md:flex pt-12 lg:pt-0 items-center min-h-screen justify-center">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 items-center w-full">
          <div className="flex col-span-5 max-w-120 mx-auto flex-col items-center w-full">
            <Image src={logo} width={100} height={100} className="w-44" alt="logo" priority />
            <p className="text-2xl lg:text-[2.1rem] font-semibold mt-5">
              Create New Account
            </p>
            <p className="font-medium mt-1">Let’s login to grab amazing deal</p>

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
                    priority
                  />
                  <p className="text-[#42526D] font-medium">{provider.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center font-medium gap-2">
              <p>Don't have an account?</p>
              <Link className="text-(--color-primary)" href={"/singup"}>
                Sign Up
              </Link>
            </div>
          </div>

          <Image
            src={login}
            width={100}
            height={100}
            className="max-w-3xl w-full hidden lg:block lg:col-span-7"
            alt="login"
            priority
          />
        </div>
      </div>
    </Container>
  );
}
