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
    <div className="flex flex-col items-center justify-center gap-4 mx-auto h-screen lg:py-0">
      {" "}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-4">
          {" "}
          <TextInputForm
            label="Your First Name"
            name="firstName"
            register={register}
            errors={errors}
            addon={<FolderEdit />}
          />
          <TextInputForm
            label="Your Surname"
            name="lastName"
            register={register}
            errors={errors}
            addon={<FolderEdit />}
          />
          <TextInputForm
            label="Your email"
            name="email"
            register={register}
            errors={errors}
            type="email"
            addon="@"
          />
          <TextInputForm
            label="Your password"
            name="password"
            register={register}
            errors={errors}
            type="password"
            addon={<Lock />}
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

        <div className="mt-6">
          {loading ? (
            <button
              disabled
              type="button"
              className="bg-green-600 text-slate-300 px-5 py-2 rounded-lg mt-4 flex items-center gap-2"
            >
              <CircularProgress color="inherit" size={16} /> Creating your
              account please wait...
            </button>
          ) : (
            <button className="bg-teal-600 rounded-[8px] hover:opacity-60 text-slate-300 px-5 py-2 mt-4 flex items-center gap-2">
              Register
            </button>
          )}
        </div>
        <div className="flex items-center mt-4">
          <div className="w-full bg-slate-500 h-[1px]"></div>
          <span className="mx-2">or</span>
          <div className="w-full bg-slate-500 h-[1px]"></div>
        </div>

        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-medium text-purple-600 hover:underline dark:text-purple-500"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
