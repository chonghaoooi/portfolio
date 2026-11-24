"use client";

import { useState, type ReactNode } from "react";
import type { Project } from "@/data/portfolio";
import { cn } from "@/lib/utils";

type ProjectCard = {
  title: string;
  category: Project["category"];
  featured: boolean;
  content: ReactNode;
};

export function ProjectGrid({
  cards,
  categories,
}: {
  cards: ProjectCard[];
  categories: readonly ProjectCard["category"][];
}) {
  const [category, setCategory] = useState("");
  const visibleCards = category ? cards.filter((card) => card.category === category) : cards;
  const regularCardCount = visibleCards.filter((card) => !card.featured).length;

  return (
    <>
      <div className="flex justify-end border-b px-5 py-3 sm:px-6">
        <label className="flex items-center gap-2 text-sm text-muted-foreground">
          Category
          <select
            value={category}
            onChange={(event) => setCategory(event.currentTarget.value)}
            className="min-h-9 rounded-md border bg-card py-1 pl-2 pr-6 font-medium text-foreground"
          >
            <option value="">All projects</option>
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <p role="status" className="sr-only">
          {visibleCards.length} {visibleCards.length === 1 ? "project" : "projects"}
        </p>
      </div>
      <div
        className={cn(
          "-mb-px grid gap-px border-b bg-border",
          regularCardCount > 1 && "sm:grid-cols-2",
          regularCardCount > 2 && "md:grid-cols-3",
        )}
      >
        {visibleCards.map((card) => (
          <div key={card.title} className={card.featured ? "col-span-full" : undefined}>
            {card.content}
          </div>
        ))}
      </div>
    </>
  );
}
