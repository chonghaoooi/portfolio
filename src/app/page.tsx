import { Mail } from "lucide-react";
import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  about,
  certifications,
  contact,
  education,
  experience,
  profile,
  projects,
  skills,
  type Project,
} from "@/data/portfolio";
import { cn } from "@/lib/utils";

// Simple Icons (CC0)
const logos: Record<string, string> = {
  LinkedIn: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  GitHub: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
};

const iconButton =
  "press grid size-10 shrink-0 place-items-center rounded-md text-foreground hover:text-muted-foreground";

function Logos() {
  return (
    <ul className="-ml-2.5 flex">
      {contact
        .filter((link) => link.enabled)
        .map(({ label, href }) => {
          const isEmail = href.startsWith("mailto:");
          return (
            <li key={href}>
              <a
                href={href}
                aria-label={isEmail ? `Email ${label}` : `${label} (opens in a new tab)`}
                title={label}
                {...(!isEmail && { target: "_blank", rel: "noopener noreferrer" })}
                className={iconButton}
              >
                {logos[label] ? (
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="size-5">
                    <path d={logos[label]} />
                  </svg>
                ) : (
                  <Mail aria-hidden className="size-5" />
                )}
              </a>
            </li>
          );
        })}
    </ul>
  );
}

function Article({ project, lead }: { project: Project; lead?: boolean }) {
  const links = project.links.filter((link) => link.enabled);
  return (
    <article
      className={cn(
        "bg-card p-5 sm:p-6",
        lead && "col-span-full grid items-center gap-5 sm:grid-cols-2 sm:gap-8",
      )}
    >
      {lead && project.image && (
        <Image
          src={project.image.src}
          alt={project.image.alt}
          width={project.image.width}
          height={project.image.height}
          sizes="(min-width: 640px) 720px, 150vw"
          className="aspect-4/3 w-full rounded-md border object-cover object-top"
        />
      )}
      <div>
        <p className="font-mono text-xs leading-5 text-muted-foreground">
          {project.context}
          {project.date && <span className="block">{project.date}</span>}
        </p>
        <h2
          className={cn(
            "mt-2 font-semibold text-balance",
            lead ? "text-2xl leading-tight tracking-[-0.03em] sm:text-3xl" : "text-lg leading-snug tracking-[-0.02em]",
          )}
        >
          {project.title}
        </h2>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">{project.summary}</p>
        <ul className="mt-3 space-y-2 text-sm leading-6">
          {project.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
        <p className="mt-3 font-mono text-xs leading-5 text-muted-foreground">
          {project.stack.map((tool, i) => (
            <span key={tool}>
              {i > 0 && ", "}
              <span className="whitespace-nowrap">{tool}</span>
            </span>
          ))}
        </p>
        {links.length > 0 && (
          <p className="mt-2 flex gap-4 text-sm">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 font-medium underline decoration-muted-foreground/50 underline-offset-4 hover:decoration-current"
              >
                {link.label}
                <span className="sr-only"> for {project.title} (opens in a new tab)</span>
              </a>
            ))}
          </p>
        )}
      </div>
    </article>
  );
}

function News({ items }: { items: Project[] }) {
  const lead = items.find((project) => project.image);
  const rest = items.filter((project) => project !== lead);
  // The 1px grid gap over a border-coloured background draws the newspaper rules.
  return (
    <div
      className={cn("-mb-px grid gap-px border-b bg-border sm:grid-cols-2", rest.length > 2 && "md:grid-cols-3")}
    >
      {lead && <Article project={lead} lead />}
      {rest.map((project) => (
        <Article key={project.title} project={project} />
      ))}
    </div>
  );
}

const categories = ["Full stack", "AI", "Data"] as const;
const newsTabs: string[] = ["Projects", ...categories];

const tabs: { name: string; content: React.ReactNode }[] = [
  { name: "Projects", content: <News items={projects} /> },
  ...categories.map((category) => ({
    name: category,
    content: <News items={projects.filter((project) => project.category === category)} />,
  })),
  {
    name: "About",
    content: (
      <div className="gap-8 space-y-4 leading-7 [column-rule:1px_solid_var(--border)] sm:columns-2">
        {about.map((text) => (
          <p key={text}>{text}</p>
        ))}
        <div className="break-inside-avoid">
          <h2 className="text-lg font-semibold tracking-[-0.02em]">{education.school}</h2>
          <p className="mt-1">{education.award}</p>
          <dl className="mt-3 space-y-2 text-sm leading-6">
            {[
              ["Dates", education.dates],
              ["GPA", education.gpa],
              ["Modules", education.modules.join(", ")],
            ].map(([term, value]) => (
              <div key={term}>
                <dt className="text-muted-foreground">{term}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    ),
  },
  {
    name: "Skills",
    content: (
      <dl className="-my-5 divide-y">
        {skills.map(({ group, items }) => (
          <div key={group} className="grid gap-3 py-5 sm:grid-cols-[12rem_1fr]">
            <dt className="leading-6 font-medium">{group}</dt>
            <dd className="flex flex-wrap gap-2">
              {items.map((item) => (
                <Badge key={item} variant="secondary" className="h-6 font-normal">
                  {item}
                </Badge>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    ),
  },
  {
    name: "Experience",
    content: (
      <ol className="-my-6 divide-y">
        {experience.map((item) => (
          <li key={item.role} className="grid gap-2 py-6 sm:grid-cols-[12rem_1fr]">
            <p className="font-mono text-xs leading-7 text-muted-foreground">{item.date}</p>
            <div>
              <h2 className="text-lg leading-7 font-semibold tracking-[-0.02em]">{item.role}</h2>
              <p className="text-muted-foreground">{item.org}</p>
              {item.points.map((point) => (
                <p key={point} className="mt-3 leading-6">
                  {point}
                </p>
              ))}
            </div>
          </li>
        ))}
      </ol>
    ),
  },
  {
    name: "Certifications",
    content: (
      <div className="grid gap-8 sm:grid-cols-3">
        {certifications.map(({ group, items }) => (
          <div key={group}>
            <h2 className="text-lg font-semibold tracking-[-0.02em]">{group}</h2>
            <ul className="mt-3 space-y-2 leading-6">
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    ),
  },
];

export default function Home() {
  return (
    // 210mm is the width of an A4 page.
    <div className="mx-auto max-w-[calc(210mm+2rem)] px-4">
      {/* First screen: 25% introduction, 75% box. */}
      <header className="grid min-h-[25svh] grid-cols-[auto_1fr] content-center items-center gap-x-4 gap-y-2 py-3 sm:gap-x-8">
        <Image
          src={profile.photo.src}
          alt={profile.photo.alt}
          width={200}
          height={200}
          preload
          sizes="(min-width: 640px) 144px, 72px"
          className="row-span-2 size-18 rounded-lg border object-cover sm:row-span-3 sm:size-36"
        />
        <h1 className="text-2xl leading-tight font-semibold tracking-[-0.03em] sm:text-4xl">{profile.name}</h1>
        <p className="col-span-2 row-start-3 text-sm leading-5 text-muted-foreground sm:col-span-1 sm:row-start-auto sm:text-base sm:leading-6">
          {profile.intro}
        </p>
        <Logos />
      </header>

      <main className="mb-4 flex min-h-[calc(75svh-1rem)] flex-col rounded-xl border bg-card text-card-foreground">
        <Tabs defaultValue="Projects" className="grow gap-0">
          <div className="sticky top-0 z-10 flex items-center rounded-t-xl border-b bg-card pr-2">
            <div className="min-w-0 grow overflow-x-auto [scrollbar-width:none] max-md:mask-r-from-85%">
              <TabsList variant="line" aria-label="Categories" className="h-12! px-2">
                {tabs.map(({ name }) => (
                  <TabsTrigger
                    key={name}
                    value={name}
                    className="h-12 px-2.5 text-muted-foreground -outline-offset-4! after:bottom-0! md:px-3"
                  >
                    {name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            <ThemeToggle className={iconButton} />
          </div>
          {tabs.map(({ name, content }) => (
            <TabsContent
              key={name}
              value={name}
              className={cn("overflow-hidden rounded-b-xl", !newsTabs.includes(name) && "p-5 sm:p-6")}
            >
              {content}
            </TabsContent>
          ))}
        </Tabs>
      </main>
    </div>
  );
}
