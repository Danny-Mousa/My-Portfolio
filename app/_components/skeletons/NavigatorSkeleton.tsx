export default function NavigatorSkeleton() {
  const linkCount = 5;

  return (
    <nav className="flex gap-1 sm:gap-2 md:gap-4 p-3 sm:p-4 md:p-6 border-b border-border overflow-x-auto scrollbar-hide">
      {Array.from({ length: linkCount }).map((_, idx) => (
        <div
          key={idx}
          className="px-3 sm:px-4 py-2 rounded-lg bg-foreground/8 animate-pulse w-16 sm:w-20 md:w-24 h-8 sm:h-9 flex-shrink-0"
        />
      ))}
    </nav>
  );
}
