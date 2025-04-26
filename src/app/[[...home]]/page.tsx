import ResponsiveNav from "@/components/nav/ResponsiveNav";

export default function Home() {
  return (
    <main className="min-h-screen bg-white pt-20 lg:pt-0 lg:pl-80">
      <ResponsiveNav />
      <div className="p-8 border-l border-[#E6E6E6]">
        <h1 className="text-3xl font-bold">Conteúdo Principal</h1>
        <p className="mt-4">
          Página responsiva com navbar no mobile e sidebar no desktop.
        </p>
        <div style={{ height: "200vh" }}></div>
      </div>
    </main>
  );
}
