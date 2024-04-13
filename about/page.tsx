import React from 'react';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import Image from 'next/image';

const About = () => {
  return (
    <div className='bg-darkblue'>
      {/* Navigation */}

      <Navigation /> 
      {/* Hero Section */}
      <div className='relative max-w-1024px mx-auto w-full h-96 bg-darkblue overflow-hidden'> 
        <Image 
        src='/img/spy_woman_01.jpg' 
        alt='picture of spy' 
        layout='fill'
        objectFit='cover'
         /> 

      </div>
    <div className="container mx-auto px-4 py-8 bg-darkblue text-white">
      
      <div className="grid md:grid-cols-2 gap-8 text-justify mb-8">
        <div>
          <h2 className="font-bold text-lg mb-4">The Gathering of Shadows</h2>
          <p>
            In the covert corners of the world, where the game of international espionage paints a chessboard of shadows and light, there comes a convergence like no other. The International Super Secret Spy Conference is the grand assembly of the world&apos;s most enigmatic figures—heroes and villains in a dance of intellect and intrigue.
          </p>
        </div>
        <div>
          <h2 className="font-bold text-lg mb-4">A Legacy of Espionage</h2>
          <p>
            Inspired by the thrilling escapades of the iconic James Bond, this conference celebrates the age-old craft of spycraft. From the silent whispers of double agents to the resounding clatters of techno-gadgets, we pay homage to every narrative that has thrilled audiences and shaped the secret world behind closed doors.
          </p>
        </div>
      </div>
      
      {/* Divider */}
      <div className="w-full h-px  bg-black mb-8"></div>

    {/* Second Half */}
      <div className="grid md:grid-cols-2 gap-8 text-justify mb-8 bg-darkblue text-white">
        <div>
          <h2 className="font-bold text-lg mb-4">Exhibitors from the Underworld</h2>
          <p>
            Thronging the halls will be thousands of exhibitors, each showcasing inventions that may have once been the subject of a top-secret file. Here, in the labyrinth of innovation, gadgets capable of changing the fate of nations emerge from the shadows into the spotlight.
          </p>
        </div>
        <div>
          <h2 className="font-bold text-lg mb-4">For Peace or Peril</h2>
          <p>
            It is a rare sight: the good, the bad, the saviors, and the world-enders, all under one roof. Each spy looks to outsmart the other, whether to save the world or to tip it into chaos. Amidst this thrilling tussle, the greatest minds devise strategies that will define the destiny of espionage.
          </p>
        </div>
      </div>
      
    </div>
    <Footer />
    </div>
  );
}

export default About;
