"use client";
import TextInputForm from "@/components/ui/TextInput";
import { CircularProgress } from "@mui/material";
import { Checkbox, Label } from "flowbite-react";
import Link from "next/link";
import React, { useState } from "react";
import { FolderEdit, Lock } from "lucide-react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import axios from "axios";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    console.log(data);

    setLoading(true);

    axios
      .post("/api/register", data)
      .then(() => {
        toast.success("Account created!");

        signIn("credentials", {
          email: data.email,
          password: data.password,
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
      })
      .catch(() => toast.error("Something went wrong"))
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <section className="flex items-center justify-between px-4 py-2 md:p-0">
      <Image
        width={500}
        height={500}
        src="/illustration.svg"
        alt=""
        className="hidden md:block"
      />
      <div className="w-full bg-white rounded shadow-2xl dark:bg-darkCard p-6">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-slate-300 ">
          Create your account.
        </h1>
        <p className="text=[14px] text-paragraph my-2">
          Start your website in seconds. Already have an account?{" "}
          <Link href="/login" className="text-blue-500">
            Login here
          </Link>
          .
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {" "}
            <TextInputForm
              label="Your First Name"
              name="firstName"
              register={register}
              errors={errors}
              addon={<FolderEdit />}
              className="border w-full rounded text-sm font-light text-gray-500 dark:text-gray-400"
            />
            <TextInputForm
              label="Your Surname"
              name="lastName"
              register={register}
              errors={errors}
              addon={<FolderEdit />}
              className="border w-full rounded text-sm font-light text-gray-500 dark:text-gray-400"
            />
            <TextInputForm
              label="Your email"
              name="email"
              register={register}
              errors={errors}
              type="email"
              addon="@"
              className="border w-full rounded text-sm font-light text-gray-500 dark:text-gray-400"
            />
            <TextInputForm
              label="Your password"
              name="password"
              register={register}
              errors={errors}
              type="password"
              addon={<Lock />}
              className="border w-full rounded text-sm font-light text-gray-500 dark:text-gray-400"
            />
          </div>

          <div className=" grid grid-cols-2 gap-4 mt-4">
            <div className="flex items-center gap-2">
              <Checkbox id="accept" required />
              <Label htmlFor="accept" className="flex">
                I agree with the&nbsp;
                <Link
                  href="#"
                  className="text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  terms and conditions
                </Link>
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="age" required />
              <Label htmlFor="age">I am 18 years or older</Label>
            </div>
          </div>
          <div className="flex items-center mt-4 w-full sm:col-span-2">
            <div className="w-full bg-slate-500 h-[1px]"></div>
            <span className="mx-2">or</span>
            <div className="w-full bg-slate-500 h-[1px]"></div>
          </div>
          <div className="flex items-center shadow my-2 w-full justify-center transition cursor-pointer hover:bg-gray-300 sm:col-span-2 gap-2 border rounded py-2">
            <FcGoogle /> Sign in with Google
          </div>
          <div className="flex transition shadow cursor-pointer hover:bg-gray-300 items-center w-full justify-center sm:col-span-2 gap-2 border rounded py-2">
            <FaGithub /> Sign in with Google
          </div>
          <div className="mt-6 w-full sm:col-span-2">
            {loading ? (
              <button
                disabled
                type="button"
                className="bg-roseRed rounded-[8px] hover:opacity-60 text-slate-300 px-5 py-2 w-full justify-center flex items-center gap-2"
              >
                <CircularProgress color="inherit" size={16} /> Creating your
                account please wait...
              </button>
            ) : (
              <button className="bg-roseRed rounded-[8px] hover:opacity-60 text-slate-300 px-5 py-2 w-full justify-center flex items-center gap-2">
                Register
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
