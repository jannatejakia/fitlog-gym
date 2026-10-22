'use client'

import { Button, FieldError, Form, Input, Label, TextField, toast } from '@heroui/react';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import { authClient } from '@/lib/auth-client';

const ResetPasswordForm = () => {
    const searchParams = useSearchParams();;
    const token = searchParams.get('token');
    const router = useRouter()

    const handleResetPassword = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(!token) {
        toast.danger('Invalid or missing reset token');
        return;
    }
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        if (data.newPassword !== data.confirmPassword) {
            toast.warning('Passwords do not match.');
            return;
        }

        const { error } = await authClient.resetPassword({
            newPassword: data.newPassword as string,
            token,
        });

        if (error) {
            toast.danger(error.message);
            return;
        }

        toast.success("Password reset successfully!");
        router.push('/sign-in');

    }
    return (       
        <div className="flex flex-col items-center justify-center my-10">
            <h1 className="text-2xl font-bold mb-4">Reset Password</h1>
            <Form className="flex w-96 flex-col gap-4" render={(props) => <form {...props} data-custom="foo" />}
            onSubmit={handleResetPassword}>
                <input type="hidden" name="token" value={token!} />
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
                <TextField isRequired minLength={8} name="confirmPassword" 
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
                    <Label>Confirm New Password</Label>
                    <Input className='text-white' />
                    <FieldError />
                </TextField>
                <Button type="submit" variant="primary" className="w-full">
                    Reset Password
                </Button>
            </Form>
        </div>
    );
};

export default ResetPasswordForm;