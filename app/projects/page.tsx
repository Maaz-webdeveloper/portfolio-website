import Link from "next/link";
import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";
import { Eye } from "lucide-react";

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
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-4 text-zinc-400">
            Some of the projects are from work and some are on my own time.
          </p>
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

        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
          {portfolioProjects.slice(5).map((project) => (
            <Link href={project.url} target="_blank" className="h-full">
              <Card key={project.url}>
                <Article project={project as any} views={0} />
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
