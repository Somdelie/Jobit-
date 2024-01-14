'use server'

import axios from "axios";
import { signIn } from 'next-auth/react';

export const signup = async (data, router) => {
    try {
        console.log(data);
        await axios.post("/api/register", data);

        // Use await here to wait for signIn to complete before proceeding
        await signIn("credentials", {
            email: data.email,
            password: data.password,
            redirect: false,
        });

        // Redirect after successful sign-in
        router.push("/");
    } catch (error) {
        console.error("Registration failed:", error.message);
        // You can handle errors within your component on the client side
    }
};
