"use client";  // This must be at the top

import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`fixed top-0 left-0 w-full transition-all duration-300 z-50 ${isScrolled ? 'bg-[#0a0a0a] shadow-lg' : 'bg-transparent'}`}>
            <div className='flex w-full justify-evenly items-center py-5'>
                <Link href='/'>
                    <h1 className='text-4xl font-black text-white'>Eventara Admin Portal</h1>
                </Link>
                <div className='flex text-[#d1d1d1] ml-12 gap-8 text-lg'>
                    <Link href='/events'>
                        <h2 className='hover:text-white/80 mt-3 duration-200'>Events</h2>
                    </Link>
                    <Link href='/about'>
                        <h2 className='hover:text-white/80 mt-3 duration-200'>About</h2>
                    </Link>
                    <Link href='/community'>
                        <h2 className='hover:text-white/80 mt-3 duration-200'>Community</h2>
                    </Link>
                </div>
                <div className='text-xl font-semibold gap-12 flex'>
                    {/* Organize an Event Button (Now Redirects to /organizer) */}
                   {/* <Link href='src\app\organizer.js'>
                        <button className='text-[#d1d1d1] hover:text-white duration-200'>
                            Organize an Event
                        </button>
                    </Link>*/}

                    {/*<Link href='/login'>
                        <button className='text-[#d1d1d1] border-2 px-5 rounded-lg hover:bg-[#d1d1d1] hover:text-black duration-200 py-2 border-[#d1d1d1]'>
                            Sign In
                        </button>
                    </Link>*/}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
