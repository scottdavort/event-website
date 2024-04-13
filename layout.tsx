'use client';
import { ReactNode } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import LandingPage from '@/components/landingPage';
import '@/styles/global.css';

type LayoutProps = {
    children: ReactNode;
};



const Layout = ({ children }: LayoutProps) => {
    return (
        <html lang="en" suppressHydrationWarning  >
            <body className='bg-black'>
               
                {children}
                
            </body>
        </html>
    );
};

export default Layout;
