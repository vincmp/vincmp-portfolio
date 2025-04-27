import ResponsiveNav from "@/components/NavbarLayout/ResponsiveNav";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <main className="min-h-screen bg-white pt-28 lg:pt-0 lg:pl-80">
      <ResponsiveNav />
      <div className="p-8 border-l border-[#E6E6E6]">{children}</div>
    </main>
  );
}
