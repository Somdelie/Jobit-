/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TextInputForm from "@/components/ui/TextInput";
import { CircularProgress } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const [emailErr, setEmailErr] = useState("");
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    setLoading(true);
    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback) => {
      if (callback?.ok) {
        router.push("/");
        router.refresh(toast.success("Logged In"));
      }
      if (callback.error) {
        toast.error(callback.error);
      }
    });
  }

  return (
    <section className="flex items-center justify-between p-4 md:p-0">
      <div className="w-full bg-white rounded shadow-2xl dark:bg-darkCard p-6">
        <div className="flex items-center justify-center sm:col-span-2 mb-2">
          <Image width={24} height={24} src="/logo-mobile.png" alt="LOGO" />
          <h1 className="dark:text-white text-[26px] font-semibold">
            SOMDELIE
          </h1>
        </div>
        <div className=" ">
          <h1 className="text-xl my-4 font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-slate-300 ">
            Welcome back
          </h1>
          <p className="text=[14px] text-paragraph mb-4">
            Start your website in seconds. Don’t have an account?{" "}
            <Link href="/register" className="text-blue-500">
              Sign up.
            </Link>
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid sm:grid-cols-2 gap-4 w-[80%] md:w-full"
          >
            <TextInputForm
              label="Your email"
              name="email"
              register={register}
              errors={errors}
              type="email"
              className="border w-full rounded text-sm font-light text-gray-500 dark:text-gray-400"
            />
            <TextInputForm
              label="Your password"
              name="password"
              register={register}
              errors={errors}
              type="password"
              className="border w-full rounded text-sm font-light text-gray-500 dark:text-gray-400"
            />
            <div className="flex items-center mt-4 w-full sm:col-span-2">
              <div className="w-full bg-slate-500 h-[1px]"></div>
              <span className="mx-2">or</span>
              <div className="w-full bg-slate-500 h-[1px]"></div>
            </div>
            <div className="flex shadow items-center w-full justify-center transition cursor-pointer hover:bg-gray-300 sm:col-span-2 gap-2 border rounded py-2">
              <FcGoogle /> Sign in with Google
            </div>
            <div className="flex shadow transition cursor-pointer hover:bg-gray-300 items-center w-full justify-center sm:col-span-2 gap-2 border rounded py-2">
              <FaGithub /> Sign in with Google
            </div>
            <div className="mt-6 w-full sm:col-span-2">
              {loading ? (
                <button
                  disabled
                  type="button"
                  className="bg-roseRed rounded-[8px] hover:opacity-60 text-slate-300 px-5 py-2 w-full justify-center flex items-center gap-2"
                >
                  <CircularProgress color="inherit" size={16} /> Logging you in
                  please wait...
                </button>
              ) : (
                <button className="bg-roseRed rounded-[8px] hover:opacity-60 text-slate-300 px-5 py-2 w-full justify-center flex items-center gap-2">
                  Log In
                </button>
              )}
            </div>
          </form>
        </div>
      </div>

      <Image
        width={500}
        height={500}
        src="/illustration.svg"
        alt=""
        className="hidden md:block"
      />
    </section>
  );
};

export default LoginPage;
