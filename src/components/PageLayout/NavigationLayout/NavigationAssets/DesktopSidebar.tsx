"use client";

import { memo } from "react";
import DevProfile from "@/components/DeveloperProfile/DeveloperInfo";
import DevSocials from "@/components/DeveloperProfile/DeveloperSocialMedia";
import NavLinks from "@/components/PageLayout/NavigationLayout/NavigationAssets/NavigationLinks";
import ThemeChanger from "@/components/ThemeChanger/ThemeChanger";
import { useSidebar } from "@/components/PageLayout/NavigationLayout/SidebarContext";

const DesktopSidebar = memo(({ pathname }: { pathname: string }) => {
  const { isExpanded, isLoading, setIsExpanded } = useSidebar();

  const toggleSidebar = () => {
    const newState = !isExpanded;
    setIsExpanded(newState);
    localStorage.setItem("sidebarExpanded", newState.toString());
  };

  if (isLoading) return null;

  return (
    <aside
      className={`hidden lg:flex lg:flex-col lg:fixed lg:top-0 lg:left-0 lg:h-full ${
        isExpanded ? "lg:w-80" : "lg:w-20"
      } bg-[var(--bg-primary)] border-r border-[var(--border-color)] p-6 z-40 transition-all duration-300`}
    >
      <div className={`mt-6 ${isExpanded ? "" : "flex flex-col items-center"}`}>
        <div
          className={`flex ${
            isExpanded
              ? "items-center justify-between w-full"
              : "flex-col items-center gap-6"
          }`}
        >
          <DevProfile isExpanded={isExpanded} />
          <ThemeChanger />
        </div>
        <button
          onClick={toggleSidebar}
          className="absolute -right-4 top-8 bg-[var(--bg-primary)] border-2 border-[var(--border-color)] rounded-md p-1.5 hover:bg-[var(--bg-hover)]"
        >
          <svg
            className={`w-4 h-4 transform transition-transform ${
              isExpanded ? "rotate-0" : "rotate-180"
            }`}
            fill="none"
            stroke="var(--text-primary)"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <div className="border-b-2 border-[var(--border-color)] mt-12" />
      </div>
      <nav className={`flex flex-col mt-6 ${isExpanded ? "" : "items-center"}`}>
        <NavLinks pathname={pathname} isExpanded={isExpanded} />
      </nav>
      <div
        className={`mt-auto pt-6 border-t-2 border-[var(--border-color)] ${
          isExpanded ? "" : "flex justify-center"
        }`}
      >
        <div className="mt-6 mb-6">
          <DevSocials isExpanded={isExpanded} />
        </div>
      </div>
    </aside>
  );
});

DesktopSidebar.displayName = "DesktopSidebar";

export default DesktopSidebar;
