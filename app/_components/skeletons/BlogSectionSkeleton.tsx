export default function BlogSectionSkeleton() {
  //   const postCount = 3; // matches the 3-column grid

  return (
    <div className="space-y-6 md:space-y-8 h-[50vh]">
      {/* Header */}
      <div>
        <div className="h-8 md:h-9 w-24 bg-foreground/8 rounded animate-pulse mb-4" />
        <div className="w-10 h-1 bg-accent rounded-full mb-6" />
      </div>
      <div className="flex items-center justify-center h-3/4">
        <div className="flex items-center justify-center w-[50%] h-8 bg-foreground/8 rounded animate-pulse"></div>
      </div>
      {/* Blog Posts Grid */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {Array.from({ length: postCount }).map((_, idx) => (
          <article
            key={idx}
            className="group bg-secondary rounded-xl md:rounded-2xl border border-border overflow-hidden"
          >
            <div className="aspect-video bg-foreground/8 animate-pulse" />

            <div className="p-4 md:p-5 space-y-3">
              <div className="flex items-center gap-2 flex-wrap">
                <div className="w-16 h-5 bg-foreground/8 rounded-full animate-pulse" />
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 md:w-3.5 md:h-3.5 bg-foreground/8 rounded animate-pulse" />
                  <div className="w-12 h-3 bg-foreground/8 rounded animate-pulse" />
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 md:w-3.5 md:h-3.5 bg-foreground/8 rounded animate-pulse" />
                  <div className="w-10 h-3 bg-foreground/8 rounded animate-pulse" />
                </div>
              </div>

              <div className="space-y-1">
                <div className="h-5 md:h-6 bg-foreground/8 rounded animate-pulse w-3/4" />
                <div className="h-5 md:h-6 bg-foreground/8 rounded animate-pulse w-1/2" />
              </div>

              <div className="space-y-1">
                <div className="h-3 md:h-4 bg-foreground/8 rounded animate-pulse w-full" />
                <div className="h-3 md:h-4 bg-foreground/8 rounded animate-pulse w-5/6" />
                <div className="h-3 md:h-4 bg-foreground/8 rounded animate-pulse w-4/6" />
              </div>

              <div className="flex flex-wrap gap-2">
                <div className="w-12 h-5 bg-foreground/8 rounded animate-pulse" />
                <div className="w-14 h-5 bg-foreground/8 rounded animate-pulse" />
                <div className="w-10 h-5 bg-foreground/8 rounded animate-pulse" />
              </div>

              <div className="flex items-center gap-2">
                <div className="w-16 h-4 bg-foreground/8 rounded animate-pulse" />
                <div className="w-4 h-4 bg-foreground/8 rounded animate-pulse" />
              </div>
            </div>
          </article>
        ))}
      </div> */}
    </div>
  );
}
