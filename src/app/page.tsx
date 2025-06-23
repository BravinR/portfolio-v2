import React from "react";
import { ContactForm } from '@/components/contact-form';
import { ExternalLink, Github, Heart } from 'lucide-react';
import Link from 'next/link';

// Reusable Project Card Component
interface ProjectCardProps {
  title: string;
  description: string;
  githubLink?: string;
  liveDemoLink?: string;
  imageSrc?: string;
  imageAlt?: string;
  featured?: boolean;
  // New prop to control layout direction for featured projects
  imageOnRight?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  githubLink,
  liveDemoLink,
  imageSrc,
  imageAlt,
  featured = false,
  imageOnRight = false, // Default to image on left for featured projects
}) => {
  if (!featured) {
    return (
      <div className="bg-[#1a1027] p-6 rounded-lg">
        <h4 className="text-xl font-bold mb-2">{title}</h4>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex space-x-4">
          {githubLink && (
            <Link href={githubLink} aria-label="GitHub repository">
              <Github className="text-gray-400 hover:text-white" />
            </Link>
          )}
          {liveDemoLink && (
            <Link href={liveDemoLink} aria-label="Live demo">
              <ExternalLink className="text-gray-400 hover:text-white" />
            </Link>
          )}
        </div>
      </div>
    );
  }

  // Featured Project Layout
  return (
    <div
      className={`relative flex flex-col ${
        imageOnRight ? "items-end lg:flex-row-reverse" : " items-start lg:flex-row"
      }`}
    >
      {/* Image */}
      {imageSrc && (
        <div
          className={`w-2/3 ${
            imageOnRight ? "lg:w-3/5 lg:order-2" : "lg:w-3/5 lg:order-1"
          } `}
        >
          <img
            className="w-full h-auto lg:h-[400px] object-cover rounded-md"
            src={imageSrc}
            alt={imageAlt}
          />
        </div>
      )}

      {/* Text Overlay */}
      <div
        className={`absolute top-0 w-3/4  rounded-md p-2 ${
          imageOnRight
            ? "left-0 lg:left-[15%] md:w-full lg:w-[50%]"
            : "right-0 lg:right-[15%] lg:w-[50%]"
        } lg:top-1/2 lg:-translate-y-1/2 lg:p-6`}
      >
        <h1
          className={`text-text text-sm ${
            imageOnRight ? "text-left" : "text-right"
          }`}
        >
          Featured Project
        </h1>
        <h1
          className={`text-[#F2A0AF] lg:text-3xl ${
            imageOnRight ? "text-left" : "text-right"
          } mb-2`}
        >
          {title}
        </h1>
        <div className="bg-[#020107] p-5 rounded md:w-50%">
          <p className="hidden lg:flex text-[#B3B0E0]">{description}</p>
          <p className="flex lg:hidden text-[#B3B0E0] text-xs">
            {description.substring(0, 100)}...
          </p>
        </div>
        <div
          className={`flex space-x-4 mt-2 ${
            imageOnRight ? "justify-start" : "justify-end"
          }`}
        >
          {githubLink && (
            <a href={githubLink} aria-label="GitHub repository">
              <Github className="text-gray-400 hover:text-white" size={20} />
            </a>
          )}
          {liveDemoLink && (
            <a href={liveDemoLink} aria-label="Live demo">
              <ExternalLink
                className="text-gray-400 hover:text-white"
                size={20}
              />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

function Home() {
  const featuredProjects = [
    {
      title: "Leica Store",
      description:
        "\"Leica M16\" is an e-commerce landing page case study that demonstrates the creative use of a single color to craft a visually striking and thoughtful website, showcasing the power of a monochromatic design approach in web design.",
      imageSrc: "/LeicaStore3.png",
      imageAlt: "website screenshot of Leica Store website",
      githubLink: "https://github.com/BravinR/One-color-UI",
      liveDemoLink: "https://vibrant-yalow-8b054d.netlify.app",
    },
    {
      title: "Recipe Pro",
      description:
        "\"Recipe Pro\" is a website that offers access to a vast database of over 100,000 recipes from around the world. Users can search for recipes, view the ingredient lists, and find the calorie information for each dish, making it a valuable resource for cooking enthusiasts.",
      imageSrc: "/recipes-test-one.png",
      imageAlt: "website screenshot of recipe website",
      githubLink: "https://github.com/BravinR/Recipe-Search-Api",
      liveDemoLink: "https://recipes.bravin.dev",
    },
    {
      title: "Share Me",
      description:
        "\"Share Me\" is a website that enables users to share photos with their friends, who can like and comment on the shared images. It provides a platform for social interaction through photo sharing and engagement features.",
      imageSrc: "/ShareMe.png",
      imageAlt: "website screenshot of a gallery website",
      githubLink: "#",
      liveDemoLink: "https://sharelove.netlify.app/",
    },
  ];

  const otherProjects = [
    {
      title: "Tealoy",
      description:
        "Tealoy is a web app that provides real-time analytics, content recommendation, and personalization with tags, and a machine learning system to enhance the user experience.",
      githubLink: "#",
      liveDemoLink: "#",
    },
    {
      title: "Capricorn",
      description:
        "A comprehensive scheduling solution with calendar management, session booking, and integration with Slack and Twitter for streamlined login.",
      githubLink: "#",
      liveDemoLink: "#",
    },
    {
      title: "Music Transfer",
      description:
        "A utility that enables users to effortlessly transfer their playlists and albums from Spotify to Apple Music, providing a seamless way to enjoy music on their preferred platform.",
      githubLink: "#",
      liveDemoLink: "#",
    },
  ];

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
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={index}
                {...project}
                featured={true}
                imageOnRight={index % 2 !== 0} // True for even indices (0-based) means image on right
              />
            ))}
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
              {otherProjects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
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

export default Home;