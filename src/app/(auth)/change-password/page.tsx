'use client';

import { authClient } from '@/lib/auth-client';
import { Button, FieldError, Form, Input, Label, TextField, toast } from '@heroui/react';
import { useRouter } from 'next/navigation';
import React from 'react';

const ChangePassword = () => {
    const router = useRouter();

    const handleChangePassword = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        if(data.newPassword !== data.confirmPassword) {
            toast.warning("Passwords do not match!");
            return;
        }

        const { error } = await authClient.changePassword({
            newPassword: data.newPassword as string,
            currentPassword: data.currentPassword as string,
        });

        if(error){
            toast.danger(error.message);
            return;
        }

        toast.success("Password changed successfully");
        form.reset();
        router.push('/sign-in');

    };
    return (
        <div className="flex flex-col items-center justify-center my-10">
            <h1 className="text-xl text-center md:text-left font-bold pr-20 mb-4">Change Password</h1>
            <Form className="flex w-96 flex-col gap-4" onSubmit={handleChangePassword}>
                <TextField isRequired name="currentPassword" type="password">
                    <Label>Current Password</Label>
                    <Input className='text-white' />
                    <FieldError />
                </TextField>
                <TextField isRequired minLength={8} name="newPassword" 
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
                    <Label>New Password</Label>
                    <Input className='text-white' />
                    <FieldError />
                </TextField>
                <TextField isRequired name="confirmPassword" type="password">
                    <Label>Confirm New Password</Label>
                    <Input className='text-white' />
                    <FieldError />
                </TextField>
                <div className="flex flex-col items-center justify-evenly gap-4 mt-4 pr-20">
                    <Button type="submit" variant="primary">
                        Change Password
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default ChangePassword;