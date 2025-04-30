import PageLayout from "@/components/PageLayout/PageLayout";

export default function Home() {
  return (
    <PageLayout>
      <h1 className="text-3xl font-bold text-[var(--text-primary)]">
        Conteúdo Principal
      </h1>
      <p className="mt-4 text-[var(--text-secondary)]">
        Página responsiva com navbar no mobile e sidebar no desktop.
      </p>
      <div style={{ height: "200vh" }}></div>
    </PageLayout>
  );
}
