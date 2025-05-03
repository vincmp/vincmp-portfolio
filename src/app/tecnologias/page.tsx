import PageLayout from "@/components/PageLayout/PageLayout";
import DevelopmentTools from "@/components/TechDetails/DevelopmentTools";

export default function Tech() {
  return (
    <PageLayout>
      <div className="ml-10 mr-10 mt-2">
        <h1 className="page-Title">Tecnologias</h1>
        <p className="page-Paragraph max-w-[900px]">
          Eu trabalho com um conjunto sólido de ferramentas e tecnologias como
          Next.js, Tailwind CSS e Vercel para transformar ideias em aplicações
          web modernas e eficientes. Minha prioridade é desenvolver interfaces
          bem estruturadas, acessíveis e com foco em desempenho, sempre aliando
          boas práticas de código e experiência do usuário.
        </p>
        <div className="bg-[var(--bg-primary)] mt-8 rounded-lg grid grid-cols-1 lg:grid-cols-2 gap-6">
          <DevelopmentTools />
        </div>
      </div>
    </PageLayout>
  );
}
