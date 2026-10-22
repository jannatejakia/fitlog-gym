import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
    title: 'Sign In | Fitlog',
    description: 'Sign in to Fitlog to manage your workouts and fitness plan.',
};

export default function SignInLayout({ children }: { children: ReactNode }) {
    return children;
}