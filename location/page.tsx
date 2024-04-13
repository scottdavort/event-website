import React from 'react';
import Navigation from '@/components/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/footer';

const Page = () => {
  return (
    <div className='bg-darkblue'>
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <div className='relative max-w-1024px mx-auto w-full h-96 bg-darkblue overflow-hidden'>
        <Image 
          src='/img/spy_man_01.jpg' 
          alt='Palms Casino' 
          layout='fill' 
          objectFit='cover'
        />
      </div>

      <div className="container mx-auto px-4 py-8 bg-darkblue text-white">
        {/* Venue Information */}
        <div className="grid md:grid-cols-2 gap-8 text-justify mb-8">
          <div>
            <h2 className="font-bold text-lg mb-4">Palms Casino: A Venue Like No Other</h2>
            <p>
              Nestled in the heart of Las Vegas, the Palms Casino is not just a luxury destination; it&apos;s the epicenter of the world&apos;s espionage activities for one fateful week. Boasting state-of-the-art facilities, this venue will be transformed into the ultimate spy nexus, accommodating over 20,000 spies from all corners of the globe.
            </p>
          </div>
          <div>
            <h2 className="font-bold text-lg mb-4">Unprecedented Gathering of Spymasters</h2>
            <p>
              The Palms Casino will play host to an unprecedented gathering of espionage&apos;s elite, from shadow operatives to cyber saviors. This grand event promises to be the largest assembly of espionage aficionados, all converging to witness and engage with the latest in spy tech innovation.
            </p>
          </div>
        </div>
        
        {/* Divider */}
        <div className="w-full h-px bg-black mb-8"></div>

        {/* Google Maps Placeholder */}
        <div className="mb-8">
          {/* Replace this div with your Google Maps component */}
          <div className="h-64 bg-gray-300 text-center flex justify-center items-center">
                  {/* Google Maps Embed */}
      
        <iframe
          width="100%"
          height="100%"
          style={{ border: "0" }}
          loading="lazy"
          allowFullScreen
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDn28mU939__29rFMJnD5mKuQr8vsBr67U&q=Palms+Casino+Resort+Las+Vegas`}
        ></iframe>
      
          </div>
        </div>

        {/* Register Button */}
        <div className="flex justify-center my-8">
          <Link href="/register">
            <div className="bg-yellow text-black rounded-md p-2 hover:bg-purple hover:text-black transition-colors duration-300">
              REGISTER
            </div>
          </Link>
        </div>
      </div>
    {/* Footer */}
    <div className='bg-darkblue text-white'>
    <Footer />
  </div>
    </div>

  );
}

export default Page;
