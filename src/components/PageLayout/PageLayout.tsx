"use client";
// Vercel dont understanded my inicial commit :/
import ResponsiveNav from "@/Components/PageLayout/NavigationLayout/ResponsiveNavigation";
import PageFooter from "@/Components/PageLayout/PageFooter";
import { useSidebar } from "@/Components/PageLayout/NavigationLayout/SidebarContext";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { isExpanded, isLoading } = useSidebar();

  if (isLoading) {
    return (
      <div className="flex min-h-screen bg-[var(--bg-primary)]">
        <div className="flex-1" />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen">
      <ResponsiveNav />
      <main
        className={`flex-1 bg-[var(--bg-primary)] pt-28 lg:pt-0 transition-all duration-300 ${
          isExpanded ? "lg:ml-80" : "lg:ml-20"
        }`}
      >
        <div className="border-l border-[var(--border-color)] h-full">
          <div className="p-8">{children}</div>
          <PageFooter />
        </div>
      </main>
    </div>
  );
}
