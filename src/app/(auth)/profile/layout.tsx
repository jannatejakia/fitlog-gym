import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
    title: 'Profile | Fitlog',
    description: 'Manage your Fitlog profile and account settings.',
};

export default function ProfileLayout({ children }: { children: ReactNode }) {
    return children;
}