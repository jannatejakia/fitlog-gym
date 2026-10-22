import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
    title: 'Sign Up | Fitlog',
    description: 'Create your Fitlog account and start tracking your workouts.',
};

export default function SignUpLayout({ children }: { children: ReactNode }) {
    return children;
}