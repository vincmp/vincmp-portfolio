import PageLayout from "@/components/PageLayout/PageLayout";
import Trae from "@/components/TechDetails/DevelopmentTools/Trae";
import JBRider from "@/components/TechDetails/DevelopmentTools/JBRider";
import BeekeeperST from "@/components/TechDetails/DevelopmentTools/BeekeeperST";
import GitHub from "@/components/TechDetails/DevelopmentTools/GitHub";
import Vercel from "@/components/TechDetails/DevelopmentTools/Vercel";
import NextJS from "@/components/TechDetails/WebDevelopment/NextJS";
import TailwindCSS from "@/components/TechDetails/WebDevelopment/TailwindCSS";

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
        <div className="bg-[var(--bg-primary)] mt-8 rounded-lg">
          <h4 className="Tech-Title p-6 pb-2">
            Ferramentas de Desenvolvimento
          </h4>
          <div className="grid grid-cols-1 lg:grid-cols-2 p-6 pt-2 gap-4 mb-4">
            <Trae />
            <JBRider />
            <BeekeeperST />
            <GitHub />
            <Vercel />
          </div>
          <h4 className="Tech-Title p-6 pb-2">Desenvolvimento Web</h4>
          <div className="grid grid-cols-1 lg:grid-cols-2 p-6 pt-2 gap-4 mb-4">
            <NextJS />
            <TailwindCSS />
          </div>
          <h4 className="Tech-Title p-6 pb-2">Desenvolvimento de Aplicações</h4>
          <div className="grid grid-cols-1 lg:grid-cols-2 p-6 pt-2 gap-4 mb-4"></div>
          <h4 className="Tech-Title p-6 pb-2">Banco de Dados</h4>
          <div className="grid grid-cols-1 lg:grid-cols-2 p-6 pt-2 gap-4 mb-4"></div>
        </div>
      </div>
    </PageLayout>
  );
}
