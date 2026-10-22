import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
    title: 'Forgot Password | Fitlog',
    description: 'Request a password reset link for your Fitlog account.',
};

export default function ForgotPasswordLayout({ children }: { children: ReactNode }) {
    return children;
}