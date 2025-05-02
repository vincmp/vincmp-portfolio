import PageLayout from "@/components/PageLayout/PageLayout";

export default function Tech() {
  return (
    <PageLayout>
      <h1 className="text-3xl font-bold text-[var(--text-primary)]">
        Linguagens, Frameworks e Ferramentas:
      </h1>
      <p className="mt-4 text-[var(--text-secondary)]">
        Página responsiva com navbar no mobile e sidebar no desktop.
      </p>
      <div style={{ height: "200vh" }}></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>
    </PageLayout>
  );
}
