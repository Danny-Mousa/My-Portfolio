export default function CardsSkeleton() {
  return (
    <>
      <div className="h-7 md:h-8 w-24 bg-foreground/8 rounded animate-pulse mb-6" />
      <div className="relative overflow-hidden pb-4">
        <div className="flex gap-4 md:gap-6">
          {Array.from({ length: 8 }).map((_, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-32 h-20 md:w-40 md:h-24 bg-secondary rounded-xl md:rounded-2xl border border-border flex items-center justify-center"
            >
              <div className="w-full h-full bg-foreground/8 rounded-xl animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
