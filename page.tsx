'use client';
import Navigation from '@/components/navigation';
import Layout from './layout';
import { motion } from 'framer-motion';
import Footer from '@/components/footer';
import LandingPage from '@/components/landingPage';


const EventPage = () => {
    return (
        <Layout>
            <Navigation />
            <LandingPage />
            <Footer />
        </Layout>
    );
};

export default EventPage;
