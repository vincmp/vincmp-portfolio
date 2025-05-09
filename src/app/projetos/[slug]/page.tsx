import { MDXRemote } from "next-mdx-remote/rsc";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import PageLayout from "@/components/PageLayout/PageLayout";

export async function generateStaticParams() {
  const files = await fs.promises.readdir(path.join("content", "projetos"));
  return files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;

  const fileContent = await fs.promises.readFile(
    path.join("content", "projetos", `${slug}.mdx`),
    "utf-8"
  );
  const { data } = matter(fileContent);

  const pageTitle = `Vicente M | ${data.title}`;

  return {
    title: pageTitle,
    description: data.description,
    openGraph: {
      title: pageTitle,
      description: data.description,
      type: "article",
      publishedTime: data.date,
      authors: ["Vicente M"],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: data.description,
    },
    alternates: {
      canonical: `/projetos/${slug}`,
    },
  };
}

export default async function ProjetoPage({ params }: Props) {
  const { slug } = await params;

  const fileContent = await fs.promises.readFile(
    path.join("content", "projetos", `${slug}.mdx`),
    "utf-8"
  );
  const { content } = matter(fileContent);

  return (
    <PageLayout>
      <article className="prose prose-lg max-w-none mdx-content">
        <MDXRemote source={content} />
      </article>
    </PageLayout>
  );
}
