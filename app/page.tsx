import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

import { Navigation } from "./components/nav";
import { Card } from "./components/card";
import { Article } from "./projects/article";
import { Eye } from "lucide-react";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center min-h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
        <div className="flex flex-col items-center justify-center w-screen min-h-screen overflow-hidden">
          <nav className="my-16 animate-fade-in">
            <ul className="flex items-center justify-center gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href={"resume.pdf"}
                className="text-sm duration-500 text-zinc-500 hover:text-zinc-300 cursor-pointer"
              >
                Resume 
              </Link>
            </ul>
          </nav>
          <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
          <Particles
            className="absolute inset-0 -z-10 animate-fade-in"
            quantity={100}
          />
          <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
            Maaz
          </h1>

          <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
          <div className="my-16 max-w-2xl text-center animate-fade-in">
            <h2 className="text-sm text-zinc-500 ">
              Passionate{" "}
              <span className="text-zinc-300">Frontend Developer</span> with{" "}
              <span className="text-zinc-300">2 years of experience</span>{" "}
              building modern, responsive and high-performance web applications
              using React and Next.js.
            </h2>
          </div>
        </div>

        <ProjectsPage />
      </div>
    </>
  );
}

function ProjectsPage() {
  const portfolioProjects = [
    {
      title: "Stitch&Ink",
      description:
        "A modern, fully responsive custom merchandise landing page built with HTML and Tailwind CSS. Stitch & Ink provides premium custom decorated merchandise solutions for companies, featuring online stores, warehousing, and fulfillment services.",
      date: "2026-02-13",
      url: "https://project-1-nine-inky.vercel.app/",
      imgSrc: "/projects/Stitch&Ink.png",
    },
    {
      title: "Autos",
      description:
        "A stunning, modern web application for Bashar Autos Ltd - your one-stop destination for elite automotive services and luxury vehicle acquisitions. Built with cutting-edge web technologies to deliver a premium user experience that matches the quality of service provided",
      date: "2026-01-15",
      url: "https://autos-five.vercel.app/",
      imgSrc: "/projects/Autos.png",
    },
    {
      title: "Coming Soon...",
      description:
        "Developing a next-generation platform focused on modern web solutions. Stay tuned for an innovative tool that combines seamless UI with powerful backend performance.",
      url: "#",
      imgSrc: "", // Isko khali chor den ya null kar den
    },
    {
      title: "Coming Soon...",
      description:
        "Developing a next-generation platform focused on modern web solutions. Stay tuned for an innovative tool that combines seamless UI with powerful backend performance.",
      url: "#",
      imgSrc: "", // Isko khali chor den ya null kar den
    },
    {
      title: "Coming Soon...",
      description:
        "Developing a next-generation platform focused on modern web solutions. Stay tuned for an innovative tool that combines seamless UI with powerful backend performance.",
      url: "#",
      imgSrc: "", // Isko khali chor den ya null kar den
    },
    {
      title: "Coming Soon...",
      description:
        "Developing a next-generation platform focused on modern web solutions. Stay tuned for an innovative tool that combines seamless UI with powerful backend performance.",
      url: "#",
      imgSrc: "", // Isko khali chor den ya null kar den
    },
  ];

  return (
    <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32 pb-32">
      <div className="w-full mx-auto lg:mx-0 flex items-center justify-between">
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-4 text-zinc-400">
            Some of the projects are from work and some are on my own time.
          </p>
        </div>
        <Link
          href={"/projects"}
          className="duration-200 text-zinc-400 hover:text-zinc-100"
        >
          View All
        </Link>
      </div>

      <div className="w-full h-px bg-zinc-800" />

      <div className="grid grid-cols-2 gap-4 mx-auto lg:mx-0 grid-rows-2">
        {portfolioProjects.slice(0, 5).map((project, idx) => (
          <Link
            href={project.url}
            target="_blank"
            className={idx === 0 ? "row-span-2 h-full" : ""}
          >
            <Card
              key={project.url}
              className="h-full"
              image={true}
              imgSrc={project?.imgSrc}
            >
              <Article project={project as any} views={0} />
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
