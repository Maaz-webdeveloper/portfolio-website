import type { Project } from "@/.contentlayer/generated";
import { Code, ExternalLink, Figma } from "lucide-react";

type Props = {
  project: Project;
  views: number;
};

export const Article = ({ project }: Props) => {
  const isComingSoon = project.url === "#";

  return (
    <article className="flex h-full min-h-[220px] flex-col p-4 md:p-8">
      <div className="flex items-start justify-between gap-4">
        <span className="inline-flex rounded-full border border-zinc-700/80 bg-zinc-900/80 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-300 md:rounded-none md:border-0 md:bg-transparent md:px-0 md:py-0 md:text-xs md:font-normal md:normal-case md:tracking-normal">
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
        <div className="flex items-center gap-2 rounded-full border border-zinc-800/80 bg-zinc-950/80 px-2 py-1 md:rounded-none md:border-0 md:bg-transparent md:px-0 md:py-0">
          <ExternalLink className="h-4 w-4 text-zinc-400 md:h-5 md:w-5" />
          <Code className="h-4 w-4 text-zinc-400 md:h-5 md:w-5" />
          <Figma className="h-4 w-4 text-zinc-400 md:h-5 md:w-5" />
        </div>
      </div>
      <div className="mt-4 flex-1 md:mt-2">
        <h2 className="font-display text-xl font-medium text-zinc-200 lg:text-3xl">
          {project.title}
        </h2>
        <p className="mt-3 line-clamp-4 text-sm leading-6 text-zinc-400 md:mt-4 md:line-clamp-none md:leading-normal">
          {project.description}
        </p>
      </div>
      <div className="mt-5 flex items-center justify-between gap-3 border-t border-zinc-800/80 pt-4 text-xs text-zinc-500 md:hidden">
        <span>{isComingSoon ? "In progress concept" : "Live project preview"}</span>
        <span className="text-zinc-300 transition duration-300 group-hover:translate-x-1 group-hover:text-zinc-100">
          {isComingSoon ? "Stay tuned" : "Open project"}
        </span>
      </div>
    </article>
  );
};
