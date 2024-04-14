'use client';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { Button } from '@mui/material';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import Link from 'next/link';
import Image from 'next/image';

const sessionDetails = [
    { title: "How to Make the Perfect Martini", presenter: "James Bond", location: "MI6", time: "7:00 PM - Room 100" },
    { title: "Perfect Attack Pen", presenter: "Q", location: "MI6: London", time: "8:00 PM - Room 101" },
    { title: "Mastering Espionage Gadgets", presenter: "M", location: "MI6", time: "9:00 PM - Room 102" },
    { title: "Advanced Stealth Tactics", presenter: "Eve Moneypenny", location: "MI6: Field Operations", time: "10:00 PM - Room 103" },
    { title: "The Art of Seduction", presenter: "Vesper Lynd", location: "MI6", time: "11:00 PM - Room 104" },
    { title: "Explosives 101: Booby Traps", presenter: "Q", location: "MI6: London", time: "12:00 AM - Room 105" },
    { title: "Psychological Warfare", presenter: "Raoul Silva", location: "Freelancer", time: "1:00 AM - Room 106" },
    { title: "Surviving Poison Attacks", presenter: "Dr. No", location: "SPECTRE", time: "2:00 AM - Room 107" },
    { title: "Underwater Espionage", presenter: "Q", location: "MI6: London", time: "3:00 AM - Room 108" },
    { title: "Escape Room: Real-life Scenarios", presenter: "Hinx", location: "SPECTRE", time: "4:00 AM - Room 109" },
    { title: "Hacking for Spies", presenter: "Q", location: "MI6: Tech Division", time: "5:00 AM - Room 110" },
    { title: "Close Combat: Defend Yourself", presenter: "James Bond", location: "MI6", time: "6:00 AM - Room 111" }
];

const Schedule = () => {
    return (
        <div className='bg-darkblue text-white'>
            <Navigation />
            <div className='relative max-w-1024px mx-auto w-full h-96 bg-darkblue overflow-hidden'>
                <Image 
                    src='/img/spy_man_02.jpg' 
                    alt='International Spy Conference' 
                    layout='fill'
                    objectFit='cover'
                />
            </div>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-center mb-8">Conference Schedule</h1>
                <div className="grid md:grid-cols-2 gap-x-20 gap-y-8">
                    {sessionDetails.map((session, index) => (
                        <div key={index} className="flex flex-col md:flex-row justify-between items-start mb-8">
                            <div className="mb-4 md:mb-0">
                                <h2 className="font-bold text-lg">{`Session ${index + 1}`}</h2>
                                <p>{session.time}</p>
                                <h3>{`"${session.title}"`}</h3>
                                <p>{`Presented by ${session.presenter} from ${session.location}`}</p>
                            </div>
                            <div>
                                <p>{`Join ${session.presenter} as they dive into the secrets of ${session.title.toLowerCase()} and share unparalleled insights into the world of espionage.`}</p>
                                <Button variant="contained" startIcon={<EventAvailableIcon />} sx={{ backgroundColor: 'yellow', color: 'black', marginTop: '8px' }}>
                                    <Link href="/register">Register</Link>
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Schedule;
