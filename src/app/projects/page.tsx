// Using absolute alias to avoid occasional relative resolution hiccup in TS server
import { ProjectsGrid } from "@/app/projects/projects-grid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | DUYLANG",
  description: "Project portfolio by DUYLANG",
};

export default function ProjectsPage() {
  return <ProjectsGrid />;
}
