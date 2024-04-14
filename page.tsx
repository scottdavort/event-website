'use client';
import Navigation from '@/components/navigation';
import Layout from './layout';
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
