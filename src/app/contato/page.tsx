import PageLayout from "@/components/PageLayout/Layout";

export default function Contato() {
  return (
    <PageLayout>
      <h1 className="text-3xl font-bold">Conteúdo Principal</h1>
      <p className="mt-4">
        Página responsiva com navbar no mobile e sidebar no desktop.
      </p>
      <div style={{ height: "200vh" }}></div>
    </PageLayout>
  );
}
