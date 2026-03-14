export default function ResumeSectionSkeleton() {
  return (
    <div className="space-y-8 md:space-y-12">
      {/* Header */}
      <div>
        <div className="h-8 md:h-9 w-28 bg-foreground/8 rounded animate-pulse mb-4" />
        <div className="w-10 h-1 bg-accent rounded-full mb-7" />
      </div>

      {/* Skills */}
      <div>
        <div className="flex items-center gap-2 md:gap-3 mb-6">
          {/* Icon placeholder */}
          <div className="w-7 h-7 md:w-8 md:h-8 bg-foreground/8 rounded-full animate-pulse" />
          <div className="h-7 md:h-8 w-24 bg-foreground/8 rounded animate-pulse" />
        </div>
        <div className="space-y-5 md:space-y-6 relative pb-6 last:pb-0">
          {Array.from({ length: 2 }).map((_, index) => (
            <div key={index}>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <div className="h-4 md:h-5 w-20 bg-foreground/8 rounded animate-pulse mr-2" />
                {/* Skill tags */}
                <div className="h-6 md:h-7 w-16 bg-foreground/8 rounded-full animate-pulse" />
                <div className="h-6 md:h-7 w-20 bg-foreground/8 rounded-full animate-pulse" />
                <div className="h-6 md:h-7 w-14 bg-foreground/8 rounded-full animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div>
        <div className="flex items-center gap-2 md:gap-3 mb-6">
          <div className="w-7 h-7 md:w-8 md:h-8 bg-foreground/8 rounded-full animate-pulse" />
          <div className="h-7 md:h-8 w-24 bg-foreground/8 rounded animate-pulse" />
        </div>
        <div className="space-y-4">
          {Array.from({ length: 2 }).map((_, index) => (
            <div key={index} className="relative pb-6 last:pb-0">
              <div className="h-5 md:h-6 w-48 bg-foreground/8 rounded animate-pulse mb-2" />
              <div className="h-4 w-32 bg-foreground/8 rounded animate-pulse mb-2" />
              <div className="h-4 w-28 bg-foreground/8 rounded animate-pulse mb-2" />
              <div className="space-y-1">
                <div className="h-4 bg-foreground/8 rounded animate-pulse w-full" />
                <div className="h-4 bg-foreground/8 rounded animate-pulse w-5/6" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
