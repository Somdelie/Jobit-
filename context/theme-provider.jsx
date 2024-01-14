'use client'
import React from "react";
import { Toaster } from "react-hot-toast"
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children, ...props }) {
  return <NextThemesProvider {...props}> <Toaster position="top-center" reverseOrder={false} />{children}</NextThemesProvider>;
}
