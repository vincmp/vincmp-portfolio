import PageLayout from "@/components/PageLayout/Layout";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";

interface Project {
  slug: string;
  frontmatter: {
    title: string;
    description: string;
    coverImage: string;
    date: string;
    tags: string[];
  };
}

export default async function Projetos() {
  const projectsDirectory = path.join(process.cwd(), "content", "projetos");
  const files = await fs.promises.readdir(projectsDirectory);

  const projects = await Promise.all(
    files.map(async (filename) => {
      const slug = filename.replace(".mdx", "");
      const filePath = path.join(projectsDirectory, filename);
      const fileContent = await fs.promises.readFile(filePath, "utf-8");
      const { data: frontmatter } = matter(fileContent);

      return {
        slug,
        frontmatter,
      };
    })
  );

  return (
    <PageLayout>
      <h1 className="text-3xl font-bold mb-8 text-[var(--text-primary)]">
        Meus Projetos
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Link
            href={`/projetos/${project.slug}`}
            key={project.slug}
            className="border border-[var(--border-color)] rounded-lg overflow-hidden hover:shadow-lg transition-shadow bg-[var(--bg-primary)]"
          >
            {project.frontmatter.coverImage && (
              <div className="relative h-48 w-full">
                {typeof project.frontmatter.coverImage === "string" ? (
                  <Image
                    src={project.frontmatter.coverImage}
                    alt={project.frontmatter.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="dark-light-image w-full h-full">
                    <Image
                      src={project.frontmatter.coverImage.light}
                      alt={project.frontmatter.title}
                      fill
                      className="light-image object-cover"
                    />
                    <Image
                      src={project.frontmatter.coverImage.dark}
                      alt={project.frontmatter.title}
                      fill
                      className="dark-image object-cover"
                    />
                  </div>
                )}
              </div>
            )}
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 text-[var(--text-primary)]">
                {project.frontmatter.title}
              </h2>
              <p className="text-[var(--text-secondary)] mb-4">
                {project.frontmatter.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.frontmatter.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="bg-[var(--bg-hover)] text-[var(--text-primary)] text-sm px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </PageLayout>
  );
}
