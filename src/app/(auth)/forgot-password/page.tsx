'use client'

import React, { useState } from "react";
import { Form, Input, Button, Link, toast, Label, TextField } from "@heroui/react";import { authClient } from "@/lib/auth-client";

export default function ForgotPasswordPage() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const resData: Record<string, string> = {};

        formData.forEach((value, key) => {
        resData[key] = value.toString();
    });
        
        const { data, error} = await authClient.requestPasswordReset({
            email: resData.email as string,
            redirectTo: '/reset-password',
        })
        console.log("After Send reset email", data);
        setSubmitted(true);

        toast.success("Password reset link sent! Please check your email.");
    };

    if (submitted) {
        return (
        <div className="max-w-md w-full mx-auto p-6 text-center space-y-4">
            <h2 className="text-xl font-bold">Check your email</h2>
            <p className="text-default-500 text-sm">
            We have sent a password reset link to your email address.
            </p>
            <Button onPress={() => setSubmitted(false)}>
            Resend email
            </Button>
        </div>
        );
    }

    return (
        <div className="max-w-md w-full mx-auto p-6">
        <h2 className="text-xl font-bold mb-2">Forgot Password?</h2>
        <p className="text-default-500 text-sm mb-6">
            Enter your registered email address and we&apos;ll send you instructions to reset your password.
        </p>

        <Form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <TextField name="email" type="email" isRequired>
            <Label>Email Address</Label>
            <Input placeholder="enter valid email address" autoComplete="email" />
        </TextField>

        <Button type="submit" variant="primary" fullWidth>
            Send Reset Link
        </Button>
        </Form>

        <p className="text-center text-sm text-default-500 mt-4">
            Remember your password?{" "}
            <Link href="/sign-in" className="text-blue-500 hover:underline">
                Sign In
            </Link>
        </p>
        </div>
    );
}