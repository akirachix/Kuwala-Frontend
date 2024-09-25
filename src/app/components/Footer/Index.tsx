"use client"


import React from 'react';
import { Instagram, Twitter, Facebook, Linkedin } from 'lucide-react';

export default function Footer() {
    return (
        <main>
            <div className="bg-orange-800 text-white p-4 sm:p-6 md:p-8 text-center h-5/6 ipad:text-9xl" style={{ fontFamily: 'Inter, serif' }}>
                <h2 className="text-3xl sm:text-xl md:text-3xl font-bold mb-2 sm:mb-3 md:mb-4 text-orange-500 mb-5">Contact Us</h2>
                <p className="mb-2 sm:mb-3 md:mb-4 text-sm sm:text-base md:text-lg">Questions? Suggestions? We&apos;d love to hear from you</p>
                <p className="sm:mb-3 md:mb-4 pt-3 sm:pt-4 mb-6 md:pt-6 text-sm sm:text-base md:text-lg">Address info</p>
                <div className='mb-2 sm:mb-3 md:mb-4'>
                    <hr className='h-0.5 bg-white'></hr>
                </div>
                <div className="mb-2 sm:mb-4 md:mb-4 md:space-[4px]">
                    <p className="text-sm sm:text-base mt-7 md:text-lg md:mb-2">Email: kuwala@gmail.com</p>
                    <p className='pt-2 sm:pt-3 md:pt-4 text-sm sm:text-base mt-2 md:text-lg'>Phone: 0746568864</p>
                </div>
                <div className="flex justify-center space-x-2 sm:space-x-3 md:space-x-4 mb-4 sm:mb-6 md:mb-8 p-2 sm:p-3 md:p-4">
                    <a href="https://www.instagram.com/dishh_ub?igsh=YzljYTk1ODg3Zg==" target="_blank" rel="noopener noreferrer">
                        <Instagram size={20} className="sm:w-6 md:w-8 sm:h-6 md:h-8" style={{ color: '#F8A11B' }} />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <Twitter size={20} className="sm:w-6 md:w-8 sm:h-6 md:h-8" style={{ color: '#F8A11B' }} />
                    </a>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <Facebook size={20} className="sm:w-6 md:w-8 sm:h-6 md:h-8" style={{ color: '#F8A11B' }} />
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <Linkedin size={20} className="sm:w-6 md:w-8 sm:h-6 md:h-8" style={{ color: '#F8A11B' }} />
                    </a>
                </div>
                <div className="bg-orange-800 text-white p-2 sm:p-3 md:p-4 flex justify-between items-center mx-auto flex-col sm:flex-row ipm:flex-col ipa:flex-col">
                    <div className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-0 ipm:text-center ipm:mb-2 ipa:text-center ipa:mb-2">DishHub</div>
                    <div className="text-xs sm:text-sm md:text-base ipm:text-center ipm:mb-2 ipa:text-center ipa:mb-2">2024 Copyright DishHub App. All rights reserved</div>
                </div>
            </div>
        </main>
    );
}
