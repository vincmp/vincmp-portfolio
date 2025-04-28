import ResponsiveNav from "@/components/NavbarLayout/ResponsiveNav";
import PageFooter from "./PageFooter";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <main className="min-h-screen bg-white pt-28 lg:pt-0 lg:pl-80">
      <ResponsiveNav />
      <div className="border-l border-[#E6E6E6]">
        <div className="p-8">{children}</div>
        <PageFooter />
      </div>
    </main>
  );
}
