import ResponsiveNav from "@/components/ResponsiveNav";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 pt-14 lg:pt-0 lg:pl-64">
      <ResponsiveNav />
      <div className="p-8">
        <h1 className="text-3xl font-bold">Conteúdo Principal</h1>
        <p className="mt-4">
          Página responsiva com navbar no mobile e sidebar no desktop.
        </p>
        <div style={{ height: "200vh" }}></div>
      </div>
    </main>
  );
}
