import type { Metadata } from 'next';
import React, { Suspense } from 'react';
import ResetPasswordForm from './ResetPasswordForm';

export const metadata: Metadata = {
    title: 'Reset Password | Fitlog',
    description: 'Choose a new password to regain access to your Fitlog account.',
};

const ResetPasswordPage = () => {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <ResetPasswordForm />
            </Suspense>
        </div>
    );
}


export default ResetPasswordPage;