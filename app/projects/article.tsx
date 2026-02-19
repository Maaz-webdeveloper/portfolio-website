import type { Project } from "@/.contentlayer/generated";
import { Code, Figma, Link2Off, ExternalLink,  } from "lucide-react";
import Link from "next/link";

type Props = {
  project: Project;
  views: number;
};

export const Article = ({ project }: Props) => {
  return (
    <article className="p-4 md:p-8">
      <div className="flex items-center justify-between">
        <span className="text-xs text-zinc-200">
          {project.date ? (
            <time dateTime={new Date(project.date).toISOString()}>
              {Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(
                new Date(project.date)
              )}
            </time>
          ) : (
            <span>SOON</span>
          )}
        </span>
        <div className="flex items-center gap-2">
          <ExternalLink className="w-5 h-5 text-zinc-400" />
          <Code className="w-5 h-5 text-zinc-400" />
          <Figma className="w-5 h-5 text-zinc-400" />
        </div>
      </div>
      <h2 className="z-20 mt-2 text-xl font-medium lg:text-3xl text-zinc-200 font-display">
        {project.title}
      </h2>
      <p className="z-20 mt-4 text-sm text-zinc-400">{project.description}</p>
    </article>
  );
};
