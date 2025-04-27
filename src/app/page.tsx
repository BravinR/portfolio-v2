import React from "react";
import { ContactForm } from '@/components/contact-form';
import { ExternalLink, Github, Heart } from 'lucide-react';
import Link from 'next/link';

function Home() {

  return (
    <div className="overflow-hidden lg:text-xl 2xl:mx-[15%] xl:mx-[10%]">
      <div className="flex justify-between mx-7 lg:mx-24">
        <div className="hidden lg:block"></div>
        <div className="mt-20 lg:mt-40 ">
          <div className="flex flex-col gap-4 lg:gap-10">
            <h1 className="text-text ">Hi, my name is </h1>
            <h1 className="text-[#F2A0AF] text-4xl lg:text-6xl">
              Bravin Rutto
            </h1>
            <h1 className="text-[#976DA0] text-4xl lg:w-1/2 lg:text-6xl">
              I create beautiful web experiences.
            </h1>
            <p className="text-[#976DA0] lg:w-3/5">
              {" "}
              I&apos;m a back-end engineer with expertise in crafting (and
              occasionally designing) high-performance API’s. Currently, my
              focus is on constructing accessible, user-centric backend systems
              at Goldman Sachs.
            </p>
            <Link
              href="#contact"
              className="inline-block px-4 py-2 w-fit  border-2 border-green-400 text-green-400 rounded hover:bg-green-400 hover:bg-opacity-10 transition"
            >
              Get in Touch
            </Link>
          </div>
          <div className="mt-20 flex flex-col gap-4 lg:mt-48">
            <div className="flex items-center">
              <h1 className="text-[#F2A0AF] text-2xl pr-4" id="about-anchor">
                About Me
              </h1>
              <div className="border-b border-[#F2A0AF] w-3/5"></div>
            </div>
            <div className="text-[#976DA0] flex flex-col gap-14 lg:w-3/5">
              <p>
                I am a back-end engineer who&apos;s really into electronics and
                embedded systems. My journey into the world of programming
                kicked off in 2018 when I decided to tinker with custom C-based
                applications.{" "}
              </p>
              <p>
                It turns out, my attempt at building something unique taught me
                a ton about C programming and software development.
              </p>
              <p>
                Here are a few technologies I&apos;ve been working with
                recently:
              </p>
            </div>
            <div className="flex items-center text-[#c8abcf]">
              <span className="text-green-400 mr-2">▹</span>
              <h1 className="ml-1 mr-5">Java</h1>
              <span className="text-green-400 mr-2">▹</span>
              <h1 className="ml-1 mr-5">Python</h1>
              <span className="text-green-400 mr-2">▹</span>
              <h1 className="ml-1 mr-5">React</h1>
              <span className="text-green-400 mr-2">▹</span>
              <h1 className="ml-1">Spring Boot</h1>
            </div>
          </div>

          <div className="mt-20 flex flex-col gap-8 lg:mt-40">
            <div className="flex items-center" id="projects-anchor">
              <h1 className="text-[#F2A0AF] text-2xl pr-4">
                Some things I’ve Built
              </h1>
              <div className="border-b border-[#F2A0AF] w-1/3"></div>
            </div>
            <div className="relative">
              <img
                className="w-[220px] lg:w-[624px] lg:h-[400px]"
                src="/LeicaStore3.png"
                alt="website screenshot of recipe website"
              ></img>
              <div className="absolute top-0 right-0  lg:right-1/4 lg:top-16">
                <h1 className="text-text text-sm flex justify-end">
                  Featured Project
                </h1>
                <h1 className="text-[#F2A0AF] lg:text-3xl">Leica Store</h1>
              </div>
              <div className="absolute top-12 right-0 w-3/4 lg:w-[50%] bg-[#020107] rounded-md lg:right-[15%] lg:top-36">
                <p className="hidden lg:flex text-[#B3B0E0] p-2">
                  &quot;Leica M16&quot; is an e-commerce landing page case study
                  that demonstrates the creative use of a single color to craft
                  a visually striking and thoughtful website, showcasing the
                  power of a monochromatic design approach in web design.
                </p>
                <p className="flex lg:hidden text-[#B3B0E0] text-xs p-2">
                  Leica M16 is an e-commerce landing page case study that
                  demonstrates the creative use of a single color.
                </p>
                <div className="flex justify-end space-x-4">
                  <a href="https://github.com/BravinR/One-color-UI">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_21_2)">
                        <path
                          d="M15 0.625C6.7125 0.625 0 7.225 0 15.365C0 21.8788 4.2975 27.4025 10.2563 29.35C11.0063 29.4888 11.2812 29.0325 11.2812 28.6413C11.2812 28.2913 11.2688 27.3638 11.2625 26.135C7.09 27.0238 6.21 24.1575 6.21 24.1575C5.5275 22.4563 4.54125 22.0013 4.54125 22.0013C3.1825 21.0875 4.64625 21.1063 4.64625 21.1063C6.1525 21.2088 6.94375 22.625 6.94375 22.625C8.28125 24.8788 10.455 24.2275 11.3125 23.8513C11.4475 22.8975 11.8338 22.2488 12.2625 21.88C8.93125 21.5113 5.43 20.2438 5.43 14.5963C5.43 12.9875 6.01125 11.6725 6.97375 10.6413C6.805 10.2688 6.29875 8.77 7.105 6.74C7.105 6.74 8.36125 6.345 11.23 8.25125C12.43 7.92375 13.705 7.76125 14.98 7.75375C16.255 7.76125 17.53 7.92375 18.73 8.25125C21.58 6.345 22.8362 6.74 22.8362 6.74C23.6425 8.77 23.1362 10.2688 22.9862 10.6413C23.9425 11.6725 24.5238 12.9875 24.5238 14.5963C24.5238 20.2588 21.0175 21.505 17.68 21.8675C18.205 22.31 18.6925 23.2138 18.6925 24.595C18.6925 26.5675 18.6737 28.1525 18.6737 28.6313C18.6737 29.0175 18.9363 29.4788 19.705 29.3313C25.7062 27.3963 30 21.8688 30 15.365C30 7.225 23.2838 0.625 15 0.625Z"
                          fill="#FCBDB7"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_21_2">
                          <rect width="30" height="30" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                  <a href="https://vibrant-yalow-8b054d.netlify.app">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_20_16)">
                        <path
                          d="M28.6364 0H17.7273C16.9742 0 16.3637 0.610547 16.3637 1.36365C16.3637 2.11676 16.9742 2.7273 17.7273 2.7273H25.3443L11.3086 16.7631C10.776 17.2956 10.776 18.159 11.3086 18.6915C11.5748 18.9578 11.9238 19.0909 12.2728 19.0909C12.6217 19.0909 12.9708 18.9578 13.237 18.6915L27.2728 4.65574V12.2728C27.2728 13.0259 27.8834 13.6364 28.6365 13.6364C29.3896 13.6364 30.0001 13.0259 30.0001 12.2728V1.36365C30.0001 0.610547 29.3895 0 28.6364 0Z"
                          fill="#FCBDB7"
                        />
                        <path
                          d="M23.1818 13.6364C22.4287 13.6364 21.8181 14.2469 21.8181 15V27.2728H2.72725V8.18184H15C15.7531 8.18184 16.3637 7.57129 16.3637 6.81818C16.3637 6.06508 15.7531 5.45459 15 5.45459H1.36365C0.610547 5.45459 0 6.06514 0 6.81824V28.6364C0 29.3895 0.610547 30 1.36365 30H23.1819C23.935 30 24.5455 29.3895 24.5455 28.6364V15C24.5455 14.2469 23.9349 13.6364 23.1818 13.6364Z"
                          fill="#FCBDB7"
                        />
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
              <img
                className="w-[220px] lg:w-[610px] lg:h-[403px]"
                src="/RecipePro.png"
                alt="website screenshot of recipe website"
              ></img>
              <div className="absolute left-0 top-0 lg:left-1/4 lg:top-24">
                <h1 className="text-text text-sm flex justify-start">
                  Featured Project
                </h1>
                <h1 className="text-[#F2A0AF] lg:text-3xl">Recipe Pro</h1>
              </div>
              <div className="bg-[#020107] rounded-md absolute top-12 lg:top-40 left-0 w-3/4 lg:w-[50%] lg:left-[15%]">
                <p className="text-[#B3B0E0] text-xs p-2 lg:hidden">
                  Offers access to a vast database of over 100,000 recipes from
                  around the world. Users can search for recipes, and view the
                  ingredient lists for each dish.
                </p>
                <p className="text-[#B3B0E0] p-2 hidden lg:flex">
                  {" "}
                  &quot;Recipe Pro&quot; is a website that offers access to a
                  vast database of over 100,000 recipes from around the world.
                  Users can search for recipes, view the ingredient lists, and
                  find the calorie information for each dish, making it a
                  valuable resource for cooking enthusiasts.
                </p>
                <div className="flex space-x-4">
                  <a href="https://github.com/BravinR/Recipe-Search-Api">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_21_2)">
                        <path
                          d="M15 0.625C6.7125 0.625 0 7.225 0 15.365C0 21.8788 4.2975 27.4025 10.2563 29.35C11.0063 29.4888 11.2812 29.0325 11.2812 28.6413C11.2812 28.2913 11.2688 27.3638 11.2625 26.135C7.09 27.0238 6.21 24.1575 6.21 24.1575C5.5275 22.4563 4.54125 22.0013 4.54125 22.0013C3.1825 21.0875 4.64625 21.1063 4.64625 21.1063C6.1525 21.2088 6.94375 22.625 6.94375 22.625C8.28125 24.8788 10.455 24.2275 11.3125 23.8513C11.4475 22.8975 11.8338 22.2488 12.2625 21.88C8.93125 21.5113 5.43 20.2438 5.43 14.5963C5.43 12.9875 6.01125 11.6725 6.97375 10.6413C6.805 10.2688 6.29875 8.77 7.105 6.74C7.105 6.74 8.36125 6.345 11.23 8.25125C12.43 7.92375 13.705 7.76125 14.98 7.75375C16.255 7.76125 17.53 7.92375 18.73 8.25125C21.58 6.345 22.8362 6.74 22.8362 6.74C23.6425 8.77 23.1362 10.2688 22.9862 10.6413C23.9425 11.6725 24.5238 12.9875 24.5238 14.5963C24.5238 20.2588 21.0175 21.505 17.68 21.8675C18.205 22.31 18.6925 23.2138 18.6925 24.595C18.6925 26.5675 18.6737 28.1525 18.6737 28.6313C18.6737 29.0175 18.9363 29.4788 19.705 29.3313C25.7062 27.3963 30 21.8688 30 15.365C30 7.225 23.2838 0.625 15 0.625Z"
                          fill="#FCBDB7"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_21_2">
                          <rect width="30" height="30" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                  <a href="https://recipepro.netlify.app">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_20_16)">
                        <path
                          d="M28.6364 0H17.7273C16.9742 0 16.3637 0.610547 16.3637 1.36365C16.3637 2.11676 16.9742 2.7273 17.7273 2.7273H25.3443L11.3086 16.7631C10.776 17.2956 10.776 18.159 11.3086 18.6915C11.5748 18.9578 11.9238 19.0909 12.2728 19.0909C12.6217 19.0909 12.9708 18.9578 13.237 18.6915L27.2728 4.65574V12.2728C27.2728 13.0259 27.8834 13.6364 28.6365 13.6364C29.3896 13.6364 30.0001 13.0259 30.0001 12.2728V1.36365C30.0001 0.610547 29.3895 0 28.6364 0Z"
                          fill="#FCBDB7"
                        />
                        <path
                          d="M23.1818 13.6364C22.4287 13.6364 21.8181 14.2469 21.8181 15V27.2728H2.72725V8.18184H15C15.7531 8.18184 16.3637 7.57129 16.3637 6.81818C16.3637 6.06508 15.7531 5.45459 15 5.45459H1.36365C0.610547 5.45459 0 6.06514 0 6.81824V28.6364C0 29.3895 0.610547 30 1.36365 30H23.1819C23.935 30 24.5455 29.3895 24.5455 28.6364V15C24.5455 14.2469 23.9349 13.6364 23.1818 13.6364Z"
                          fill="#FCBDB7"
                        />
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
              <img
                className="w-[220px] lg:w-[613px] lg:h-[401px]"
                src="/ShareMe.png"
                alt="website screenshot of a gallery website"
              ></img>
              <div className="absolute top-0 right-0  lg:right-1/4 lg:top-16">
                <h1 className="text-text text-sm flex justify-end">
                  Featured Project
                </h1>
                <h1 className="text-[#F2A0AF] lg:text-3xl">Share Me</h1>
              </div>
              <div className="absolute top-12 right-0 w-3/4 lg:w-[50%] bg-[#020107] rounded-md lg:right-[15%] lg:top-36">
                <p className="text-[#B3B0E0] lg:hidden text-xs p-2">
                  Enables users to share photos with their friends, who can like
                  and comment on the shared images.{" "}
                </p>
                <p className="text-[#B3B0E0] hidden lg:flex p-2">
                  {" "}
                  &quot;Share Me&quot; is a website that enables users to share
                  photos with their friends, who can like and comment on the
                  shared images. It provides a platform for social interaction
                  through photo sharing and engagement features.
                </p>
                <div className="flex justify-end space-x-4">
                  <a href="">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_21_2)">
                        <path
                          d="M15 0.625C6.7125 0.625 0 7.225 0 15.365C0 21.8788 4.2975 27.4025 10.2563 29.35C11.0063 29.4888 11.2812 29.0325 11.2812 28.6413C11.2812 28.2913 11.2688 27.3638 11.2625 26.135C7.09 27.0238 6.21 24.1575 6.21 24.1575C5.5275 22.4563 4.54125 22.0013 4.54125 22.0013C3.1825 21.0875 4.64625 21.1063 4.64625 21.1063C6.1525 21.2088 6.94375 22.625 6.94375 22.625C8.28125 24.8788 10.455 24.2275 11.3125 23.8513C11.4475 22.8975 11.8338 22.2488 12.2625 21.88C8.93125 21.5113 5.43 20.2438 5.43 14.5963C5.43 12.9875 6.01125 11.6725 6.97375 10.6413C6.805 10.2688 6.29875 8.77 7.105 6.74C7.105 6.74 8.36125 6.345 11.23 8.25125C12.43 7.92375 13.705 7.76125 14.98 7.75375C16.255 7.76125 17.53 7.92375 18.73 8.25125C21.58 6.345 22.8362 6.74 22.8362 6.74C23.6425 8.77 23.1362 10.2688 22.9862 10.6413C23.9425 11.6725 24.5238 12.9875 24.5238 14.5963C24.5238 20.2588 21.0175 21.505 17.68 21.8675C18.205 22.31 18.6925 23.2138 18.6925 24.595C18.6925 26.5675 18.6737 28.1525 18.6737 28.6313C18.6737 29.0175 18.9363 29.4788 19.705 29.3313C25.7062 27.3963 30 21.8688 30 15.365C30 7.225 23.2838 0.625 15 0.625Z"
                          fill="#FCBDB7"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_21_2">
                          <rect width="30" height="30" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                  <a href="https://sharelove.netlify.app/">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_20_16)">
                        <path
                          d="M28.6364 0H17.7273C16.9742 0 16.3637 0.610547 16.3637 1.36365C16.3637 2.11676 16.9742 2.7273 17.7273 2.7273H25.3443L11.3086 16.7631C10.776 17.2956 10.776 18.159 11.3086 18.6915C11.5748 18.9578 11.9238 19.0909 12.2728 19.0909C12.6217 19.0909 12.9708 18.9578 13.237 18.6915L27.2728 4.65574V12.2728C27.2728 13.0259 27.8834 13.6364 28.6365 13.6364C29.3896 13.6364 30.0001 13.0259 30.0001 12.2728V1.36365C30.0001 0.610547 29.3895 0 28.6364 0Z"
                          fill="#FCBDB7"
                        />
                        <path
                          d="M23.1818 13.6364C22.4287 13.6364 21.8181 14.2469 21.8181 15V27.2728H2.72725V8.18184H15C15.7531 8.18184 16.3637 7.57129 16.3637 6.81818C16.3637 6.06508 15.7531 5.45459 15 5.45459H1.36365C0.610547 5.45459 0 6.06514 0 6.81824V28.6364C0 29.3895 0.610547 30 1.36365 30H23.1819C23.935 30 24.5455 29.3895 24.5455 28.6364V15C24.5455 14.2469 23.9349 13.6364 23.1818 13.6364Z"
                          fill="#FCBDB7"
                        />
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

          {/* Other Projects Section */}
          <section
            id="projects"
            className="container mx-auto px-4 py-20 text-white"
          >
            <h3 className="text-2xl font-bold mb-8 text-[#F2A0AF]">
              Other Noteworthy Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Project 1 */}
              <div className="bg-[#1a1027] p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-2">Tealoy</h4>
                <p className="text-gray-300 mb-4">
                  Tealoy is a web app that provides real-time analytics, content
                  recommendation, and personalization with tags, and a machine
                  learning system to enhance the user experience.
                </p>
                <div className="flex space-x-4">
                  <Link href="#" aria-label="GitHub repository">
                    <Github className="text-gray-400 hover:text-white" />
                  </Link>
                  <Link href="#" aria-label="Live demo">
                    <ExternalLink className="text-gray-400 hover:text-white" />
                  </Link>
                </div>
              </div>

              {/* Project 2 */}
              <div className="bg-[#1a1027] p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-2">Capricorn</h4>
                <p className="text-gray-300 mb-4">
                  A comprehensive scheduling solution with calendar management,
                  session booking, and integration with Slack and Twitter for
                  streamlined login.
                </p>
                <div className="flex space-x-4">
                  <Link href="#" aria-label="GitHub repository">
                    <Github className="text-gray-400 hover:text-white" />
                  </Link>
                  <Link href="#" aria-label="Live demo">
                    <ExternalLink className="text-gray-400 hover:text-white" />
                  </Link>
                </div>
              </div>

              {/* Project 3 */}
              <div className="bg-[#1a1027] p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-2">Music Transfer</h4>
                <p className="text-gray-300 mb-4">
                  A utility that enables users to effortlessly transfer their
                  playlists and albums from Spotify to Apple Music, providing a
                  seamless way to enjoy music on their preferred platform.
                </p>
                <div className="flex space-x-4">
                  <Link href="#" aria-label="GitHub repository">
                    <Github className="text-gray-400 hover:text-white" />
                  </Link>
                  <Link href="#" aria-label="Live demo">
                    <ExternalLink className="text-gray-400 hover:text-white" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <section
            id="contact"
            className="container mx-auto px-4 py-20 text-center"
          >
            <h2 className="text-lg text-green-400 mb-4">What's next?</h2>
            <h3 className="text-4xl font-bold mb-6 text-[#F2A0AF]">
              Get In Touch
            </h3>
            <p className="text-gray-300 max-w-md mx-auto mb-8">
              My inbox is always open. Whether you have a question or just want
              to say hi, I'll try my best to get back to you!
            </p>
            <ContactForm />
          </section>

          {/* Footer */}
          <footer className="container mx-auto px-4 py-6 text-center text-gray-400">
            <p className="flex items-center justify-center">
              Designed & Built by Bravin with{" "}
              <Heart className="h-4 w-4 ml-2 text-pink-500" />
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Home