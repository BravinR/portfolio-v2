import Image from 'next/image';
import React from "react";
import NavBar from '../components/NavBar';
import LeicaStore from '../../public/LeicaStore.png';
import RecipePro from '../../public/RecipePro.png';
import ShareMe from '../../public/ShareMe.png'

function Home() {

  return (
    <div className="overflow-hidden lg:text-xl 2xl:mx-[15%] xl:mx-[10%]">
      <div className="flex justify-between mx-7 lg:mx-24">
        <div className='hidden lg:block'>
        </div>
        <div className="mt-20 lg:mt-40 ">
          <div className='flex flex-col gap-4 lg:gap-10'>
            <h1 className="text-text ">Hi, my name is </h1>
            <h1 className="text-[#F2A0AF] text-4xl lg:text-6xl">Bravin Rutto</h1>
            <h1 className="text-[#976DA0] text-4xl lg:w-1/2 lg:text-6xl">I create beautiful web experiences.</h1>
            <p className="text-[#976DA0] lg:w-3/5"> I&apos;m a back-end engineer with expertise in crafting (and occasionally designing) high-performance API’s.
              Currently, my focus is on constructing accessible, user-centric backend systems at Goldman Sachs.</p>
            <button className="hover:bg-blue-700 border-2 border-teal-200 text-[#F2A0AF] py-2 px-4 rounded w-fit">
              Get In Touch
            </button>
          </div>
          <div className='mt-20 flex flex-col gap-4 lg:mt-48'>
            <div className="flex items-center">
              <h1 className="text-[#F2A0AF] text-2xl pr-4" id="about-anchor">About Me</h1>
              <div className="border-b border-[#F2A0AF] w-3/5"></div>
            </div>
            <div className="text-[#976DA0] flex flex-col gap-14 lg:w-3/5">
              <p>I am a back-end engineer who&apos;s really into electronics and embedded systems.
                My journey into the world of programming kicked off in 2018 when I decided to tinker with custom C-based applications. </p>
              <p>It turns out, my attempt at building something unique taught me a ton about C programming and software development.</p>
              <p>Here are a few technologies I&apos;ve been working with recently:</p>
            </div>
            <div className="flex items-center text-[#976DA0]">
              <svg width="17" height="" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 11L1 1V21L21 11Z" fill="#9DEC8A" stroke="black" />
              </svg>
              <h1 className="ml-1 mr-5">Java</h1>
              <svg width="17" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 11L1 1V21L21 11Z" fill="#9DEC8A" stroke="black" />
              </svg>
              <h1 className="ml-1 mr-5">Python</h1>
              <svg width="17" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 11L1 1V21L21 11Z" fill="#9DEC8A" stroke="black" />
              </svg>
              <h1 className="ml-1 mr-5">React</h1>

              <svg width="17" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 11L1 1V21L21 11Z" fill="#9DEC8A" stroke="black" />
              </svg>
              <h1 className='ml-1'>Spring Boot</h1>
            </div>
          </div>

          <div className='mt-20 flex flex-col gap-8 lg:mt-40'>
              <div className="flex items-center" id="projects-anchor">
                <h1 className="text-[#F2A0AF] text-2xl pr-4">Some things I’ve Built</h1>
                <div className="border-b border-[#F2A0AF] w-1/3"></div>
              </div>
              <div className="relative">
                <img className="w-[220px] lg:w-[624px] lg:h-[400px]" src="/LeicaStore3.png" alt="website screenshot of recipe website"></img>
                <div className='absolute top-0 right-0  lg:right-1/4 lg:top-16'>
                  <h1 className='text-text text-sm flex justify-end'>Featured Project</h1>
                  <h1 className='text-[#F2A0AF] lg:text-3xl'>Leica Store</h1>
                </div>
                <div className='absolute top-12 right-0 w-3/4 lg:w-[50%] bg-[#020107] rounded-md lg:right-[15%] lg:top-36'>
                  <p className='hidden lg:flex text-[#B3B0E0] p-2'>&quot;Leica M16&quot; is an e-commerce landing page case study that demonstrates the creative use of a single color to craft a visually striking and thoughtful website, showcasing the power of a monochromatic design approach in web design.</p>
                  <p className='flex lg:hidden text-[#B3B0E0] text-xs p-2'>Leica M16 is an e-commerce landing page case study that demonstrates the creative use of a single
                    color.</p>
                  <div className='flex justify-end space-x-4'>
                    <a href="https://github.com/BravinR/One-color-UI">
                      <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_21_2)">
                          <path d="M15 0.625C6.7125 0.625 0 7.225 0 15.365C0 21.8788 4.2975 27.4025 10.2563 29.35C11.0063 29.4888 11.2812 29.0325 11.2812 28.6413C11.2812 28.2913 11.2688 27.3638 11.2625 26.135C7.09 27.0238 6.21 24.1575 6.21 24.1575C5.5275 22.4563 4.54125 22.0013 4.54125 22.0013C3.1825 21.0875 4.64625 21.1063 4.64625 21.1063C6.1525 21.2088 6.94375 22.625 6.94375 22.625C8.28125 24.8788 10.455 24.2275 11.3125 23.8513C11.4475 22.8975 11.8338 22.2488 12.2625 21.88C8.93125 21.5113 5.43 20.2438 5.43 14.5963C5.43 12.9875 6.01125 11.6725 6.97375 10.6413C6.805 10.2688 6.29875 8.77 7.105 6.74C7.105 6.74 8.36125 6.345 11.23 8.25125C12.43 7.92375 13.705 7.76125 14.98 7.75375C16.255 7.76125 17.53 7.92375 18.73 8.25125C21.58 6.345 22.8362 6.74 22.8362 6.74C23.6425 8.77 23.1362 10.2688 22.9862 10.6413C23.9425 11.6725 24.5238 12.9875 24.5238 14.5963C24.5238 20.2588 21.0175 21.505 17.68 21.8675C18.205 22.31 18.6925 23.2138 18.6925 24.595C18.6925 26.5675 18.6737 28.1525 18.6737 28.6313C18.6737 29.0175 18.9363 29.4788 19.705 29.3313C25.7062 27.3963 30 21.8688 30 15.365C30 7.225 23.2838 0.625 15 0.625Z" fill="#FCBDB7" />
                        </g>
                        <defs>
                          <clipPath id="clip0_21_2">
                            <rect width="30" height="30" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                    <a href="https://vibrant-yalow-8b054d.netlify.app">
                      <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_20_16)">
                          <path d="M28.6364 0H17.7273C16.9742 0 16.3637 0.610547 16.3637 1.36365C16.3637 2.11676 16.9742 2.7273 17.7273 2.7273H25.3443L11.3086 16.7631C10.776 17.2956 10.776 18.159 11.3086 18.6915C11.5748 18.9578 11.9238 19.0909 12.2728 19.0909C12.6217 19.0909 12.9708 18.9578 13.237 18.6915L27.2728 4.65574V12.2728C27.2728 13.0259 27.8834 13.6364 28.6365 13.6364C29.3896 13.6364 30.0001 13.0259 30.0001 12.2728V1.36365C30.0001 0.610547 29.3895 0 28.6364 0Z" fill="#FCBDB7" />
                          <path d="M23.1818 13.6364C22.4287 13.6364 21.8181 14.2469 21.8181 15V27.2728H2.72725V8.18184H15C15.7531 8.18184 16.3637 7.57129 16.3637 6.81818C16.3637 6.06508 15.7531 5.45459 15 5.45459H1.36365C0.610547 5.45459 0 6.06514 0 6.81824V28.6364C0 29.3895 0.610547 30 1.36365 30H23.1819C23.935 30 24.5455 29.3895 24.5455 28.6364V15C24.5455 14.2469 23.9349 13.6364 23.1818 13.6364Z" fill="#FCBDB7" />
                        </g>
                        <defs>
                          <clipPath id="clip0_20_16">
                            <rect width="30" height="30" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="relative flex items-center justify-end">
                <img className="w-[220px] lg:w-[610px] lg:h-[403px]" src="/RecipePro.png" alt="website screenshot of recipe website"></img>
                <div className='absolute left-0 top-0 lg:left-1/4 lg:top-24'>
                  <h1 className='text-text text-sm flex justify-start'>Featured Project</h1>
                  <h1 className='text-[#F2A0AF] lg:text-3xl'>Recipe Pro</h1>
                </div>
                <div className='bg-[#020107] rounded-md absolute top-12 lg:top-40 left-0 w-3/4 lg:w-[50%] lg:left-[15%]'>
                  <p className='text-[#B3B0E0] text-xs p-2 lg:hidden'>Offers access to a vast database of over 100,000 recipes from around the world. Users can search for recipes, and view the ingredient lists for each dish.</p>
                  <p className='text-[#B3B0E0] p-2 hidden lg:flex'> &quot;Recipe Pro&quot; is a website that offers access to a vast database of over 100,000 recipes from around the world. Users can search for recipes, view the ingredient lists, and find the calorie information for each dish, making it a valuable resource for cooking enthusiasts.</p>
                  <div className='flex space-x-4'>
                    <a href="https://github.com/BravinR/Recipe-Search-Api">
                      <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_21_2)">
                          <path d="M15 0.625C6.7125 0.625 0 7.225 0 15.365C0 21.8788 4.2975 27.4025 10.2563 29.35C11.0063 29.4888 11.2812 29.0325 11.2812 28.6413C11.2812 28.2913 11.2688 27.3638 11.2625 26.135C7.09 27.0238 6.21 24.1575 6.21 24.1575C5.5275 22.4563 4.54125 22.0013 4.54125 22.0013C3.1825 21.0875 4.64625 21.1063 4.64625 21.1063C6.1525 21.2088 6.94375 22.625 6.94375 22.625C8.28125 24.8788 10.455 24.2275 11.3125 23.8513C11.4475 22.8975 11.8338 22.2488 12.2625 21.88C8.93125 21.5113 5.43 20.2438 5.43 14.5963C5.43 12.9875 6.01125 11.6725 6.97375 10.6413C6.805 10.2688 6.29875 8.77 7.105 6.74C7.105 6.74 8.36125 6.345 11.23 8.25125C12.43 7.92375 13.705 7.76125 14.98 7.75375C16.255 7.76125 17.53 7.92375 18.73 8.25125C21.58 6.345 22.8362 6.74 22.8362 6.74C23.6425 8.77 23.1362 10.2688 22.9862 10.6413C23.9425 11.6725 24.5238 12.9875 24.5238 14.5963C24.5238 20.2588 21.0175 21.505 17.68 21.8675C18.205 22.31 18.6925 23.2138 18.6925 24.595C18.6925 26.5675 18.6737 28.1525 18.6737 28.6313C18.6737 29.0175 18.9363 29.4788 19.705 29.3313C25.7062 27.3963 30 21.8688 30 15.365C30 7.225 23.2838 0.625 15 0.625Z" fill="#FCBDB7" />
                        </g>
                        <defs>
                          <clipPath id="clip0_21_2">
                            <rect width="30" height="30" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                    <a href="https://recipepro.netlify.app">
                      <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_20_16)">
                          <path d="M28.6364 0H17.7273C16.9742 0 16.3637 0.610547 16.3637 1.36365C16.3637 2.11676 16.9742 2.7273 17.7273 2.7273H25.3443L11.3086 16.7631C10.776 17.2956 10.776 18.159 11.3086 18.6915C11.5748 18.9578 11.9238 19.0909 12.2728 19.0909C12.6217 19.0909 12.9708 18.9578 13.237 18.6915L27.2728 4.65574V12.2728C27.2728 13.0259 27.8834 13.6364 28.6365 13.6364C29.3896 13.6364 30.0001 13.0259 30.0001 12.2728V1.36365C30.0001 0.610547 29.3895 0 28.6364 0Z" fill="#FCBDB7" />
                          <path d="M23.1818 13.6364C22.4287 13.6364 21.8181 14.2469 21.8181 15V27.2728H2.72725V8.18184H15C15.7531 8.18184 16.3637 7.57129 16.3637 6.81818C16.3637 6.06508 15.7531 5.45459 15 5.45459H1.36365C0.610547 5.45459 0 6.06514 0 6.81824V28.6364C0 29.3895 0.610547 30 1.36365 30H23.1819C23.935 30 24.5455 29.3895 24.5455 28.6364V15C24.5455 14.2469 23.9349 13.6364 23.1818 13.6364Z" fill="#FCBDB7" />
                        </g>
                        <defs>
                          <clipPath id="clip0_20_16">
                            <rect width="30" height="30" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img className="w-[220px] lg:w-[613px] lg:h-[401px]" src="/ShareMe.png" alt="website screenshot of a gallery website"></img>
                <div className='absolute top-0 right-0  lg:right-1/4 lg:top-16'>
                  <h1 className='text-text text-sm flex justify-end'>Featured Project</h1>
                  <h1 className='text-[#F2A0AF] lg:text-3xl'>Share Me</h1>
                </div>
                <div className='absolute top-12 right-0 w-3/4 lg:w-[50%] bg-[#020107] rounded-md lg:right-[15%] lg:top-36'>
                  <p className='text-[#B3B0E0] lg:hidden text-xs p-2'>Enables users to share photos with their friends, who can like and comment on the shared images. </p>
                  <p className='text-[#B3B0E0] hidden lg:flex p-2'> &quot;Share Me&quot; is a website that enables users to share photos with their friends, who can like and comment on the shared images. It provides a platform for social interaction through photo sharing and engagement features.</p>
                  <div className='flex justify-end space-x-4'>
                    <a href="">
                      <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_21_2)">
                          <path d="M15 0.625C6.7125 0.625 0 7.225 0 15.365C0 21.8788 4.2975 27.4025 10.2563 29.35C11.0063 29.4888 11.2812 29.0325 11.2812 28.6413C11.2812 28.2913 11.2688 27.3638 11.2625 26.135C7.09 27.0238 6.21 24.1575 6.21 24.1575C5.5275 22.4563 4.54125 22.0013 4.54125 22.0013C3.1825 21.0875 4.64625 21.1063 4.64625 21.1063C6.1525 21.2088 6.94375 22.625 6.94375 22.625C8.28125 24.8788 10.455 24.2275 11.3125 23.8513C11.4475 22.8975 11.8338 22.2488 12.2625 21.88C8.93125 21.5113 5.43 20.2438 5.43 14.5963C5.43 12.9875 6.01125 11.6725 6.97375 10.6413C6.805 10.2688 6.29875 8.77 7.105 6.74C7.105 6.74 8.36125 6.345 11.23 8.25125C12.43 7.92375 13.705 7.76125 14.98 7.75375C16.255 7.76125 17.53 7.92375 18.73 8.25125C21.58 6.345 22.8362 6.74 22.8362 6.74C23.6425 8.77 23.1362 10.2688 22.9862 10.6413C23.9425 11.6725 24.5238 12.9875 24.5238 14.5963C24.5238 20.2588 21.0175 21.505 17.68 21.8675C18.205 22.31 18.6925 23.2138 18.6925 24.595C18.6925 26.5675 18.6737 28.1525 18.6737 28.6313C18.6737 29.0175 18.9363 29.4788 19.705 29.3313C25.7062 27.3963 30 21.8688 30 15.365C30 7.225 23.2838 0.625 15 0.625Z" fill="#FCBDB7" />
                        </g>
                        <defs>
                          <clipPath id="clip0_21_2">
                            <rect width="30" height="30" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                    <a href="https://sharelove.netlify.app/">
                      <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_20_16)">
                          <path d="M28.6364 0H17.7273C16.9742 0 16.3637 0.610547 16.3637 1.36365C16.3637 2.11676 16.9742 2.7273 17.7273 2.7273H25.3443L11.3086 16.7631C10.776 17.2956 10.776 18.159 11.3086 18.6915C11.5748 18.9578 11.9238 19.0909 12.2728 19.0909C12.6217 19.0909 12.9708 18.9578 13.237 18.6915L27.2728 4.65574V12.2728C27.2728 13.0259 27.8834 13.6364 28.6365 13.6364C29.3896 13.6364 30.0001 13.0259 30.0001 12.2728V1.36365C30.0001 0.610547 29.3895 0 28.6364 0Z" fill="#FCBDB7" />
                          <path d="M23.1818 13.6364C22.4287 13.6364 21.8181 14.2469 21.8181 15V27.2728H2.72725V8.18184H15C15.7531 8.18184 16.3637 7.57129 16.3637 6.81818C16.3637 6.06508 15.7531 5.45459 15 5.45459H1.36365C0.610547 5.45459 0 6.06514 0 6.81824V28.6364C0 29.3895 0.610547 30 1.36365 30H23.1819C23.935 30 24.5455 29.3895 24.5455 28.6364V15C24.5455 14.2469 23.9349 13.6364 23.1818 13.6364Z" fill="#FCBDB7" />
                        </g>
                        <defs>
                          <clipPath id="clip0_20_16">
                            <rect width="30" height="30" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
          </div>


          <div className='mt-20 flex flex-col gap-8'>
            <h1 className="text-[#F2A0AF] text-2xl">Other Noteworthy Projects</h1>
            <div className='lg:flex  lg:gap-4'>
              <div className='bg-[#020107] rounded-md p-4 mb-8 lg:mb-0'>
                <div className='flex justify-between '>
                  <a href="https://github.com/BravinR/Lireddit">
                    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M32.1695 6.81578H19.5474L17.033 3.83805C16.9501 3.73963 16.8278 3.68306 16.699 3.6836H6.52299C4.95977 3.6836 3.69253 4.95084 3.69253 6.51406V7.34021H2.83046C1.26868 7.34021 0.00197557 8.60529 0 10.1671V28.486C0 30.0493 1.26724 31.3165 2.83046 31.3165H28.477C30.0402 31.3165 31.3075 30.0493 31.3075 28.486V27.6599H32.1695C33.7328 27.6599 35 26.3926 35 24.8294V9.64624C35 8.08302 33.7328 6.81578 32.1695 6.81578ZM30.431 26.8086V28.504C30.4291 29.5844 29.5538 30.4596 28.4734 30.4616H2.83046C1.75009 30.4596 0.87482 29.5844 0.872845 28.504V10.185C0.87482 9.10466 1.75009 8.22939 2.83046 8.22742H12.8305L15.3448 11.2051C15.4278 11.3036 15.5501 11.3601 15.6789 11.3596H28.5022C29.5657 11.3771 30.4214 12.2392 30.431 13.3028V26.8086ZM34.1236 24.851C34.1216 25.9314 33.2463 26.8066 32.1659 26.8086H31.3039V13.3028C31.3039 11.7396 30.0366 10.4724 28.4734 10.4724H15.8549L13.3405 7.49466C13.2575 7.39624 13.1352 7.33967 13.0065 7.34021H4.56897V6.51406C4.57094 5.43369 5.44621 4.55842 6.52658 4.55644H16.5122L19.0266 7.53417C19.1096 7.63259 19.2319 7.68917 19.3606 7.68863H32.1839C33.2643 7.6906 34.1395 8.56587 34.1415 9.64624L34.1236 24.851Z" fill="#B3B0E0" />
                    </svg>
                  </a>
                  <a href="https://www.tealoy.com/">
                    <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_20_16)">
                        <path d="M28.6364 0H17.7273C16.9742 0 16.3637 0.610547 16.3637 1.36365C16.3637 2.11676 16.9742 2.7273 17.7273 2.7273H25.3443L11.3086 16.7631C10.776 17.2956 10.776 18.159 11.3086 18.6915C11.5748 18.9578 11.9238 19.0909 12.2728 19.0909C12.6217 19.0909 12.9708 18.9578 13.237 18.6915L27.2728 4.65574V12.2728C27.2728 13.0259 27.8834 13.6364 28.6365 13.6364C29.3896 13.6364 30.0001 13.0259 30.0001 12.2728V1.36365C30.0001 0.610547 29.3895 0 28.6364 0Z" fill="#FCBDB7" />
                        <path d="M23.1818 13.6364C22.4287 13.6364 21.8181 14.2469 21.8181 15V27.2728H2.72725V8.18184H15C15.7531 8.18184 16.3637 7.57129 16.3637 6.81818C16.3637 6.06508 15.7531 5.45459 15 5.45459H1.36365C0.610547 5.45459 0 6.06514 0 6.81824V28.6364C0 29.3895 0.610547 30 1.36365 30H23.1819C23.935 30 24.5455 29.3895 24.5455 28.6364V15C24.5455 14.2469 23.9349 13.6364 23.1818 13.6364Z" fill="#FCBDB7" />
                      </g>
                      <defs>
                        <clipPath id="clip0_20_16">
                          <rect width="30" height="30" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </div>
                <h1 className='text-[#B3B0E0] text-center mb-6'>Tealoy</h1>
                <p className='text-[#B3B0E0] flex items-center justify-center'>
                  Tealoy is a web app that provides users with the ability to post, upvote, and downvote content, incorporating features like pagination, user authentication with login, and a password recovery system to enhance the user experience.
                </p>
              </div>
              <div className='bg-[#020107] rounded-md p-4 mb-8 lg:mb-0'>
                <div className='flex justify-between '>
                  <a href="">
                    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M32.1695 6.81578H19.5474L17.033 3.83805C16.9501 3.73963 16.8278 3.68306 16.699 3.6836H6.52299C4.95977 3.6836 3.69253 4.95084 3.69253 6.51406V7.34021H2.83046C1.26868 7.34021 0.00197557 8.60529 0 10.1671V28.486C0 30.0493 1.26724 31.3165 2.83046 31.3165H28.477C30.0402 31.3165 31.3075 30.0493 31.3075 28.486V27.6599H32.1695C33.7328 27.6599 35 26.3926 35 24.8294V9.64624C35 8.08302 33.7328 6.81578 32.1695 6.81578ZM30.431 26.8086V28.504C30.4291 29.5844 29.5538 30.4596 28.4734 30.4616H2.83046C1.75009 30.4596 0.87482 29.5844 0.872845 28.504V10.185C0.87482 9.10466 1.75009 8.22939 2.83046 8.22742H12.8305L15.3448 11.2051C15.4278 11.3036 15.5501 11.3601 15.6789 11.3596H28.5022C29.5657 11.3771 30.4214 12.2392 30.431 13.3028V26.8086ZM34.1236 24.851C34.1216 25.9314 33.2463 26.8066 32.1659 26.8086H31.3039V13.3028C31.3039 11.7396 30.0366 10.4724 28.4734 10.4724H15.8549L13.3405 7.49466C13.2575 7.39624 13.1352 7.33967 13.0065 7.34021H4.56897V6.51406C4.57094 5.43369 5.44621 4.55842 6.52658 4.55644H16.5122L19.0266 7.53417C19.1096 7.63259 19.2319 7.68917 19.3606 7.68863H32.1839C33.2643 7.6906 34.1395 8.56587 34.1415 9.64624L34.1236 24.851Z" fill="#B3B0E0" />
                    </svg>
                  </a>
                  <a href="">
                    <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_20_16)">
                        <path d="M28.6364 0H17.7273C16.9742 0 16.3637 0.610547 16.3637 1.36365C16.3637 2.11676 16.9742 2.7273 17.7273 2.7273H25.3443L11.3086 16.7631C10.776 17.2956 10.776 18.159 11.3086 18.6915C11.5748 18.9578 11.9238 19.0909 12.2728 19.0909C12.6217 19.0909 12.9708 18.9578 13.237 18.6915L27.2728 4.65574V12.2728C27.2728 13.0259 27.8834 13.6364 28.6365 13.6364C29.3896 13.6364 30.0001 13.0259 30.0001 12.2728V1.36365C30.0001 0.610547 29.3895 0 28.6364 0Z" fill="#FCBDB7" />
                        <path d="M23.1818 13.6364C22.4287 13.6364 21.8181 14.2469 21.8181 15V27.2728H2.72725V8.18184H15C15.7531 8.18184 16.3637 7.57129 16.3637 6.81818C16.3637 6.06508 15.7531 5.45459 15 5.45459H1.36365C0.610547 5.45459 0 6.06514 0 6.81824V28.6364C0 29.3895 0.610547 30 1.36365 30H23.1819C23.935 30 24.5455 29.3895 24.5455 28.6364V15C24.5455 14.2469 23.9349 13.6364 23.1818 13.6364Z" fill="#FCBDB7" />
                      </g>
                      <defs>
                        <clipPath id="clip0_20_16">
                          <rect width="30" height="30" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </div>
                <h1 className='text-[#B3B0E0] text-center mb-6'>Capricorn</h1>
                <p className='text-[#B3B0E0] flex items-center justify-center'>
                  Capricorn is a web app demonstrating secure authentication with cookie management, session deletion, and integration with Google, GitHub, and Twitter for streamlined login.
                </p>
              </div>
              <div className='bg-[#020107] rounded-md p-4'>
                <div className='flex justify-between '>
                  <a href="">
                    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M32.1695 6.81578H19.5474L17.033 3.83805C16.9501 3.73963 16.8278 3.68306 16.699 3.6836H6.52299C4.95977 3.6836 3.69253 4.95084 3.69253 6.51406V7.34021H2.83046C1.26868 7.34021 0.00197557 8.60529 0 10.1671V28.486C0 30.0493 1.26724 31.3165 2.83046 31.3165H28.477C30.0402 31.3165 31.3075 30.0493 31.3075 28.486V27.6599H32.1695C33.7328 27.6599 35 26.3926 35 24.8294V9.64624C35 8.08302 33.7328 6.81578 32.1695 6.81578ZM30.431 26.8086V28.504C30.4291 29.5844 29.5538 30.4596 28.4734 30.4616H2.83046C1.75009 30.4596 0.87482 29.5844 0.872845 28.504V10.185C0.87482 9.10466 1.75009 8.22939 2.83046 8.22742H12.8305L15.3448 11.2051C15.4278 11.3036 15.5501 11.3601 15.6789 11.3596H28.5022C29.5657 11.3771 30.4214 12.2392 30.431 13.3028V26.8086ZM34.1236 24.851C34.1216 25.9314 33.2463 26.8066 32.1659 26.8086H31.3039V13.3028C31.3039 11.7396 30.0366 10.4724 28.4734 10.4724H15.8549L13.3405 7.49466C13.2575 7.39624 13.1352 7.33967 13.0065 7.34021H4.56897V6.51406C4.57094 5.43369 5.44621 4.55842 6.52658 4.55644H16.5122L19.0266 7.53417C19.1096 7.63259 19.2319 7.68917 19.3606 7.68863H32.1839C33.2643 7.6906 34.1395 8.56587 34.1415 9.64624L34.1236 24.851Z" fill="#B3B0E0" />
                    </svg>
                  </a>
                  <a href="https://github.com/BravinR/YouTube-API-Playlist">
                    <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_20_16)">
                        <path d="M28.6364 0H17.7273C16.9742 0 16.3637 0.610547 16.3637 1.36365C16.3637 2.11676 16.9742 2.7273 17.7273 2.7273H25.3443L11.3086 16.7631C10.776 17.2956 10.776 18.159 11.3086 18.6915C11.5748 18.9578 11.9238 19.0909 12.2728 19.0909C12.6217 19.0909 12.9708 18.9578 13.237 18.6915L27.2728 4.65574V12.2728C27.2728 13.0259 27.8834 13.6364 28.6365 13.6364C29.3896 13.6364 30.0001 13.0259 30.0001 12.2728V1.36365C30.0001 0.610547 29.3895 0 28.6364 0Z" fill="#FCBDB7" />
                        <path d="M23.1818 13.6364C22.4287 13.6364 21.8181 14.2469 21.8181 15V27.2728H2.72725V8.18184H15C15.7531 8.18184 16.3637 7.57129 16.3637 6.81818C16.3637 6.06508 15.7531 5.45459 15 5.45459H1.36365C0.610547 5.45459 0 6.06514 0 6.81824V28.6364C0 29.3895 0.610547 30 1.36365 30H23.1819C23.935 30 24.5455 29.3895 24.5455 28.6364V15C24.5455 14.2469 23.9349 13.6364 23.1818 13.6364Z" fill="#FCBDB7" />
                      </g>
                      <defs>
                        <clipPath id="clip0_20_16">
                          <rect width="30" height="30" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </div>
                <h1 className='text-[#B3B0E0] text-center mb-6'>Music Transfer</h1>
                <p className='text-[#B3B0E0] flex items-center justify-center'>
                  The YouTube-to-Spotify API empowers users to effortlessly transfer their playlists and albums from YouTube to Spotify, ensuring a smooth transition for enjoying music on their preferred platform.
                </p>
              </div>
            </div>
          </div>


          <h1 className='text-text text-center mt-28'>What&apos;s Next?</h1>
          <h1 className='text-4xl text-center text-[#F2A0AF]' id="contact-anchor">Get In Touch</h1>
          <div className="flex justify-center mt-6 mb-28">
            <button className="hover:bg-blue-700 border-2 border-teal-200 text-[#F2A0AF] py-2 px-4 rounded">
              Say Hello
            </button>
          </div>
          <div className="flex justify-center">
            <p className='text-[#FCBDB7] mr-3'>Designed & Built by Bravin </p>
            <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.5 27.3866C14.0871 27.3866 13.6891 27.2371 13.3789 26.9654C12.2074 25.941 11.0779 24.9783 10.0813 24.1291L10.0763 24.1247C7.15463 21.6349 4.63169 19.4848 2.87628 17.3668C0.913992 14.9989 0 12.7539 0 10.3013C0 7.9184 0.817084 5.72004 2.30058 4.11087C3.80177 2.48267 5.86163 1.58594 8.10136 1.58594C9.77536 1.58594 11.3084 2.11517 12.6578 3.15882C13.3388 3.68562 13.9561 4.33035 14.5 5.08239C15.044 4.33035 15.6611 3.68562 16.3423 3.15882C17.6918 2.11517 19.2248 1.58594 20.8988 1.58594C23.1383 1.58594 25.1984 2.48267 26.6996 4.11087C28.1831 5.72004 28.9999 7.9184 28.9999 10.3013C28.9999 12.7539 28.0862 14.9989 26.1239 17.3665C24.3685 19.4848 21.8458 21.6347 18.9246 24.1243C17.9263 24.9748 16.795 25.939 15.6208 26.9658C15.3109 27.2371 14.9126 27.3866 14.5 27.3866ZM8.10136 3.28471C6.34175 3.28471 4.72528 3.98697 3.54932 5.26227C2.35589 6.55682 1.69855 8.34631 1.69855 10.3013C1.69855 12.364 2.46519 14.2088 4.1841 16.2829C5.84548 18.2876 8.31664 20.3935 11.1779 22.8319L11.1832 22.8363C12.1835 23.6888 13.3174 24.6553 14.4975 25.6872C15.6848 24.6533 16.8205 23.6853 17.8227 22.8315C20.6837 20.3931 23.1547 18.2876 24.8161 16.2829C26.5348 14.2088 27.3014 12.364 27.3014 10.3013C27.3014 8.34631 26.6441 6.55682 25.4506 5.26227C24.2749 3.98697 22.6582 3.28471 20.8988 3.28471C19.6098 3.28471 18.4263 3.69447 17.3813 4.50249C16.4501 5.22289 15.8014 6.13356 15.421 6.77077C15.2255 7.09844 14.8812 7.29403 14.5 7.29403C14.1188 7.29403 13.7745 7.09844 13.5789 6.77077C13.1988 6.13356 12.5501 5.22289 11.6186 4.50249C10.5736 3.69447 9.39016 3.28471 8.10136 3.28471Z" fill="#4E4F95" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home