import ResponsiveNav from "@/components/nav/ResponsiveNav";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <main className="min-h-screen bg-white pt-26 lg:pt-0 lg:pl-80">
      <ResponsiveNav />
      <div className="p-8 border-l border-[#E6E6E6]">{children}</div>
    </main>
  );
}
