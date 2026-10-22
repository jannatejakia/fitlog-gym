'use client';

import { authClient, signUp } from "@/lib/auth-client";
import {Button, Description, FieldError, Form, Input, Label, TextField, toast} from "@heroui/react";
import { useRouter } from "next/navigation";


const SignUpPage = () => {
    const router = useRouter();

    const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const resData: Record<string, string> = {};
            formData.forEach((value, key) => {
            resData[key] = value.toString();
    });

        const { data, error} = await signUp.email({
            name: resData.name as string,
            email: resData.email as string,
            password: resData.password as string,
        })
        console.log('sign up data', data);

        if (error) {
            toast.danger("Sign Up Failed!")
        } else {
            toast.success("Sign Up Successful! Please check your email to verify your account.");
            router.push('/sign-in');
        }
    }
const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
    });
}

    
    return (
        <div className="flex min-h-[calc(100vh-64px)] flex-col items-center justify-center px-4 py-4">
            <h1 className="mb-5 text-center text-2xl font-bold">Sign Up</h1>
                <Form className="mx-auto flex max-w-md flex-col gap-4 md:pl-20"
                onSubmit={handleSignUp}>
                <TextField className="flex flex-col gap-1"
                    isRequired
                    name="name"
                    validate={(value) => {
                        if (value.length < 3) {
                            return "Name must be at least 3 characters";
                        }
                        return null;
                    }}>
                    <Label>Name</Label>
                    <Input placeholder="Your name" />
                    <FieldError />
                </TextField>

                <TextField
                    className="flex flex-col gap-1"
                    isRequired
                    name="email"
                    type="email"
                    validate={(value) => {
                        if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                                value
                            )
                        ) {
                            return "Please enter a valid email address";
                        }
                        return null;
                    }}>
                    <Label>Email</Label>
                    <Input className='text-white' placeholder="Enter email address" />
                    <FieldError />
                </TextField>

                <TextField
                    className="flex flex-col gap-1"
                    isRequired
                    minLength={8}
                    name="password"
                    type="password"
                    validate={(value) => {
                        if (value.length < 8) {
                            return "Password must be at least 8 characters";
                        }
                        if (!/[A-Z]/.test(value)) {
                            return "Password must contain at least one uppercase letter";
                        }
                        if (!/[0-9]/.test(value)) {
                            return "Password must contain at least one number";
                        }
                        return null;
                    }}>
                    <Label>Password</Label>
                    <Input className='text-white' placeholder="Enter your password" />
                    <Description>
                        Must be at least 8 characters with 1 uppercase and 1 number
                    </Description>
                    <FieldError />
                </TextField>
                <div className="flex justify-center gap-3">
                    <Button type="submit" variant="primary"
                        className="min-w-24">
                        Submit
                    </Button>
                    <Button type="reset" variant="secondary"
                        className="min-w-24">
                        Reset
                    </Button>
                </div>
                <div className='text-center py-1 flex flex-col items-center justify-center gap-2'>
                    <p>or</p>
                <Button onClick={handleGoogleSignIn} type="button">Sign In with Google</Button>
                </div>
            </Form>
        </div>
    );
};

export default SignUpPage;