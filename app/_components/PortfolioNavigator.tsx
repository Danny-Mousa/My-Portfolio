import { Dispatch, SetStateAction } from "react";

function PortfolioNavigator({
  activeSection,
  setActiveSection,
}: {
  activeSection: string;
  setActiveSection: Dispatch<SetStateAction<string>>;
}) {
  return (
    <nav className="flex gap-1 sm:gap-2 md:gap-4 p-3 sm:p-4 md:p-6 border-b border-border overflow-x-auto scrollbar-hide">
      {["about", "resume", "portfolio", "blog", "contact"].map((section) => (
        <button
          key={section}
          onClick={() => setActiveSection(section)}
          className={` cursor-pointer px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium capitalize transition-colors whitespace-nowrap flex-shrink-0 ${
            activeSection === section
              ? "text-foreground bg-accent/10"
              : "text-muted-foreground hover:text-foreground hover:bg-secondary"
          }`}
        >
          {section}
        </button>
      ))}
    </nav>
  );
}

export default PortfolioNavigator;
