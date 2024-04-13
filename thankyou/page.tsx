import React from 'react';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { Typography, Box, Button } from '@mui/material';
import { CheckCircleOutline as CheckCircleOutlineIcon } from '@mui/icons-material';
import Link from 'next/link';
import Image from 'next/image';

const ThankYouPage = () => {
    return (
        <div className='bg-darkblue text-white'>
            <Navigation />

            <div className='max-w-4xl mx-auto p-4 text-center'>
                <Image 
                    src='/img/ssc_logo_round.png'
                    alt='Thank You'
                    width={1024}
                    height={300}
                    layout='responsive'
                    objectFit='cover'
                />

                <Box mt={4} mb={2}>
                    <CheckCircleOutlineIcon sx={{ fontSize: 60, color: '#4caf50' }} />
                </Box>
                <Typography variant="h4" gutterBottom component="div">
                    Thank You for Registering!
                </Typography>
                <Typography variant="h6" gutterBottom component="div">
                    Your registration for the International Super Secret Spy Conference 2024 has been successfully received.
                </Typography>
                <Typography sx={{ fontSize: 20 }} gutterBottom>
                    You will receive an email with your conference access details shortly. Prepare to dive into the world of espionage and uncover secrets that will redefine global intelligence. We are excited to see you at the grand assembly of the world's most enigmatic figures—heroes and villains alike.
                </Typography>
                
                <Button variant="contained" color="primary" sx={{ mt: 3 }}>
                    <Link href="/">Go to Home</Link>
                </Button>
            </div>

            <Footer />
        </div>
    );
}

export default ThankYouPage;
