'use client';
import React, { useState } from 'react';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { TextField, Button, Typography } from '@mui/material';
import { EventAvailable as EventAvailableIcon } from '@mui/icons-material';
import Image from 'next/image';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        spyFirm: '',
        specializedSkill: '',
        comments: ''
    });

    // Dummy array to simulate database storage
    const submissions: any[] = [];

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // Add form data to dummy array
        submissions.push(formData);
        console.log("Submissions: ", submissions);
        // Simulate redirect
        window.location.href = '/thankyou';  // Change to your "Thank You" or confirmation page path
    };

    return (
        <div className='bg-darkblue text-white'>
            <Navigation />

            <div className='relative max-w-1024px mx-auto w-full h-96 bg-darkblue overflow-hidden'>
                <Image 
                    src='/img/spy_woman_02.jpg'
                    alt='Registration for Spy Conference'
                    width={1024}
                    height={300}
                    layout='responsive'
                    objectFit='cover'
                />
            </div>
            <div className='max-w-1024px mx-auto p-6'>
                <div className='bg-slate-500 p-4 rounded-lg shadow-lg'>
                <Typography variant="h4" component="h1" gutterBottom>
                    Register for the Conference
                </Typography>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <TextField
                        label="Full Name"
                        variant="filled"
                        color="primary"
                        fullWidth
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                    <TextField
                        label="Email Address"
                        variant="filled"
                        type="email"
                        name="email"
                        fullWidth
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <TextField
                        label="Spy Firm"
                        variant="filled"
                        name="spyFirm"
                        fullWidth
                        value={formData.spyFirm}
                        onChange={handleChange}
                        required
                    />

                    <TextField
                        label="Specialized Skill"
                        variant="filled"
                        name="specializedSkill"
                        fullWidth
                        value={formData.specializedSkill}
                        onChange={handleChange}
                        required
                    />

                    <TextField
                        label="Comments"
                        variant="filled"
                        multiline
                        rows={4}
                        name="comments"
                        fullWidth
                        value={formData.comments}
                        onChange={handleChange}
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        color="secondary"
                        startIcon={<EventAvailableIcon />}
                        fullWidth
                    >
                        Register Now
                    </Button>
                </form>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default RegistrationForm;
