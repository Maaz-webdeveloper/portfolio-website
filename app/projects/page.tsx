import Link from "next/link";
import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";

export default async function ProjectsPage() {
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
      title: "Text Reverse",
      description:
        "A versatile text utility tool designed for creators and storytellers. Featuring word-reversal, character flipping, and 20+ aesthetic font styles, it combines a seamless mobile-first UI with powerful string manipulation to elevate your social media presence.",
      date: "2026-02-25",
      url: "https://reverse-eight-sooty.vercel.app/",
      imgSrc: "/projects/text-reverse.png", // Isko khali chor den ya null kar den
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
    <div className="relative pb-16">
      <Navigation />
      <section className="mx-auto max-w-7xl space-y-8 px-4 pb-24 pt-20 sm:px-6 md:space-y-16 md:px-6 md:pt-24 lg:px-8 lg:pt-32">
        <div className="flex w-full flex-col items-start gap-4 lg:mx-0 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projects
          </h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-zinc-400 sm:text-base md:max-w-none md:leading-normal">
            Some of the projects are from work and some are on my own time.
          </p>
          </div>
          <Link
            href="/contact"
            className="duration-200 text-zinc-400 hover:text-zinc-100"
          >
            Contact
          </Link>
        </div>

        <div className="h-px w-full bg-zinc-800" />

        <div className="mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 sm:grid-rows-2 lg:mx-0">
          {portfolioProjects.slice(0, 5).map((project, idx) => (
            <Link
              key={`${project.title}-${project.url}-${idx}`}
              href={project.url}
              target="_blank"
              className={idx === 0 ? "h-full sm:row-span-2" : "h-full"}
            >
              <Card
                className={idx === 0 ? "h-full min-h-[320px] sm:min-h-0" : "h-full min-h-[260px] sm:min-h-0"}
                image={true}
                imgSrc={project?.imgSrc}
                imgAlt={project.title}
              >
                <Article project={project as any} views={0} />
              </Card>
            </Link>
          ))}
        </div>

        <div className="h-px w-full bg-zinc-800" />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mx-0 lg:grid-cols-3">
          {portfolioProjects.slice(5).map((project, idx) => (
            <Link
              key={`${project.title}-${project.url}-${idx}`}
              href={project.url}
              target="_blank"
              className="h-full"
            >
              <Card className="h-full min-h-[240px] sm:min-h-0">
                <Article project={project as any} views={0} />
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
