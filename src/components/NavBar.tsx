"use client"
import React from "react";
import logo from './../../public/logo.png';
import Image from 'next/image';
import { useRouter } from 'next/navigation'

function NavBar() {
  const router = useRouter();
  const handleAnchorClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    
    const target = event.currentTarget;
    
    if (target.tagName === 'A' && target.href.startsWith(window.location.origin)) {
      const targetAnchor = target.hash;

      const targetElement = document.querySelector(targetAnchor);

      if (!targetElement) {
        router.push(`/${targetAnchor}`);
        event.preventDefault();
      }
    }
  };

  return (
    <header className="text-sm mt-4 mx-7 lg:mx-24 lg:mt-8 lg:text-xl">
      <div className="flex justify-between">
        <a href="/">
        <svg className="w-14" viewBox="0 0 87 116" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.99">
            <path opacity="0.99" d="M50.602 115.7H0V42.72H50.602C70.672 42.72 87 59.0893 87 79.21C87 99.3306 70.672 115.7 50.602 115.7ZM15.0918 100.57H50.602C56.2528 100.57 61.6721 98.3195 65.6677 94.3138C69.6634 90.308 71.9082 84.875 71.9082 79.21C71.9082 73.5449 69.6634 68.1119 65.6677 64.1062C61.6721 60.1004 56.2528 57.85 50.602 57.85H15.0918V100.57Z" fill="url(#paint0_linear_12_1)" />
          </g>
          <path d="M55.1674 58.3463C57.9905 58.9713 60.6577 60.1645 63.0073 61.8534C65.3569 63.5423 67.34 65.6919 68.8365 68.1719C72.2278 65.0101 76.3092 60.0172 78.7439 56.0946C76.4819 53.3309 73.83 50.9128 70.8717 48.9167C69.387 48.3226 67.86 47.7686 66.322 47.1768C64.1071 52.1531 60.1337 56.1317 55.1674 58.3463Z" fill="#A66894" />
          <path d="M15.0918 42.72V15.13H44.1658C49.8165 15.13 55.2358 17.3804 59.2315 21.3862C63.2272 25.392 65.4719 30.825 65.4719 36.49C65.4719 42.155 63.2272 47.588 59.2315 51.5938C55.2358 55.5996 49.8165 57.85 44.1658 57.85H15.0918V72.98H44.1658C64.2357 72.98 80.5638 56.6107 80.5638 36.49C80.5638 16.3693 64.2357 0 44.1658 0H0V42.72" fill="url(#paint1_linear_12_1)" />
          <path d="M15.0918 72.9801V57.8501H45.7193L15.0918 72.9801Z" fill="#D1799A" />
          <path d="M15.0918 42.72H0V72.98H15.0918V42.72Z" fill="#79578A" fillOpacity="0.6" />
          <defs>
            <linearGradient id="paint0_linear_12_1" x1="-1.78439" y1="113.911" x2="67.6154" y2="44.6841" gradientUnits="userSpaceOnUse">
              <stop stopColor="#4E4F95" />
              <stop offset="1" stopColor="#D186AB" />
            </linearGradient>
            <linearGradient id="paint1_linear_12_1" x1="4.15247" y1="62.013" x2="62.761" y2="3.55006" gradientUnits="userSpaceOnUse">
              <stop stopColor="#E781A6" />
              <stop offset="1" stopColor="#FFC6BA" />
            </linearGradient>
          </defs>
        </svg>
        </a>
        <div className="text-text space-x-4 lg:space-x-8">
          <a href="#projects-anchor" onClick={handleAnchorClick} className="hover:text-gray-200">Projects</a>
          <a href="#about-anchor" onClick={handleAnchorClick} className="hover:text-gray-200 hidden">About Me</a>
          <a href="/blog" className="hover:text-gray-200">Blog</a>
          <a href="https://github.com/BravinR" className="hover:text-gray-200">GitHub</a>
          <a href="#contact-anchor" onClick={handleAnchorClick} className="hover:text-gray-200">Contact</a>
        </div>
      </div>
    </header>
  );
}

export default NavBar;