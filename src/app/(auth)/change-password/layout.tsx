import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
    title: 'Change Password | Fitlog',
    description: 'Update the password for your Fitlog account.',
};

export default function ChangePasswordLayout({ children }: { children: ReactNode }) {
    return children;
}