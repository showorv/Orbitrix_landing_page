import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getProject, projects } from "@/lib/project";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const project = getProject(params.id);
  if (!project) return {};

  return {
    title: `${project.title} — ORBITRIX`,
    description: project.tagline,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: { id: string };
}) {
    const {id} = await params
  const project = getProject(id);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const prev = projects[currentIndex - 1];
  const next = projects[currentIndex + 1];

  return (
    <main className="min-h-screen mt-20 bg-background text-foreground">

      {/* Back */}
      <div className="max-w-7xl mx-auto px-6 pt-8">
        <Link
          href="/#portfolio"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition"
        >
          <ArrowLeft size={15} />
          Back to projects
        </Link>
      </div>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-16">
        <div className="flex flex-col gap-5">

          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-widest text-primary">
              {project.category}
            </span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span className="text-xs text-muted-foreground">
              {project.year}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold font-[Syne] leading-tight">
            {project.title}
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl">
            {project.tagline}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-md text-xs bg-muted text-muted-foreground border border-border"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex gap-3 flex-wrap">
            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target="_blank"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg
                  bg-primary text-primary-foreground text-sm font-semibold
                  hover:opacity-90 transition"
              >
                View Project
              </Link>
            )}

            {project.githubUrl && (
              <Link
                href={project.githubUrl}
                target="_blank"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg
                  border border-border text-sm hover:bg-muted transition"
              >
                GitHub
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* IMAGE */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="relative aspect-[16/8] rounded-2xl overflow-hidden border border-border">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 pb-28">
        <div className="grid md:grid-cols-[2fr_1fr] gap-16">

          {/* LEFT */}
          <div className="flex flex-col gap-14">

            {/* Problem */}
            <div>
              <p className="text-xs uppercase tracking-widest text-primary mb-4">
                The problem
              </p>
              <p className="text-muted-foreground">
                {project.problem}
              </p>
            </div>

            <div className="h-px bg-border" />

            {/* Solution */}
            <div>
              <p className="text-xs uppercase tracking-widest text-primary mb-4">
                Our solution
              </p>
              <p className="text-muted-foreground">
                {project.solution}
              </p>
            </div>

            <div className="h-px bg-border" />

            {/* Results */}
            <div>
              <p className="text-xs uppercase tracking-widest text-primary mb-5">
                Results
              </p>
              <ul className="flex flex-col gap-3">
                {project.results.map((r, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 w-5 h-5 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary text-[10px]">
                      ✓
                    </span>
                    <span className="text-sm text-foreground">
                      {r}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div>
            <div className="sticky top-8">

              <p className="text-xs uppercase tracking-widest text-primary mb-4">
                Tech stack
              </p>

              <div className="flex flex-col gap-2">
                {project.tags.map((tag) => (
                  <div
                    key={tag}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg
                      bg-card border border-border"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                    <span className="text-sm text-muted-foreground">
                      {tag}
                    </span>
                  </div>
                ))}
              </div>

              {project.liveUrl && (
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  className="mt-6 w-full inline-flex items-center justify-center gap-2
                    px-4 py-3 rounded-lg border border-primary/30 text-primary
                    text-sm hover:bg-primary/10 transition"
                >
                  Visit live site
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* NAVIGATION */}
        {(prev || next) && (
          <div className="mt-20 pt-10 border-t border-border grid grid-cols-2 gap-6">
            {prev ? (
              <Link href={`/portfolio/${prev.id}`}>
                <p className="text-xs text-muted-foreground">Previous</p>
                <p className="font-semibold">{prev.title}</p>
              </Link>
            ) : <div />}

            {next && (
              <Link href={`/portfolio/${next.id}`} className="text-right">
                <p className="text-xs text-muted-foreground">Next</p>
                <p className="font-semibold">{next.title}</p>
              </Link>
            )}
          </div>
        )}
      </div>
    </main>
  );
}