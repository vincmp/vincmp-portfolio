import { MDXRemote } from "next-mdx-remote/rsc";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import PageLayout from "@/components/PageLayout/Layout";

export async function generateStaticParams() {
  const files = await fs.promises.readdir(path.join("content", "projetos"));
  return files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;

  const fileContent = await fs.promises.readFile(
    path.join("content", "projetos", `${slug}.mdx`),
    "utf-8"
  );
  const { data } = matter(fileContent);

  return {
    title: data.title,
    description: data.description,
  };
}

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  const fileContent = await fs.promises.readFile(
    path.join("content", "projetos", `${slug}.mdx`),
    "utf-8"
  );
  const { content } = matter(fileContent);

  return (
    <PageLayout>
      <article className="prose prose-lg max-w-none">
        <MDXRemote source={content} />
      </article>
    </PageLayout>
  );
}
