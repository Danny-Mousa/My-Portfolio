export default function ContactSectionSkeleton() {
  return (
    <div className="space-y-6 md:space-y-8">
      <div>
        <div className="h-8 md:h-9 w-28 bg-foreground/8 rounded animate-pulse mb-4" />
        <div className="w-10 h-1 bg-accent rounded-full mb-6" />
      </div>

      <div className="space-y-5 md:space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          <div>
            <div className="h-4 w-20 bg-foreground/8 rounded animate-pulse mb-2" />
            <div className="w-full h-[53px] px-4 md:px-5 py-3 md:py-3.5 bg-foreground/8 rounded-xl animate-pulse" />
          </div>
          <div>
            <div className="h-4 w-24 bg-foreground/8 rounded animate-pulse mb-2" />
            <div className="w-full h-[53px] px-4 md:px-5 py-3 md:py-3.5 bg-foreground/8 rounded-xl animate-pulse" />
          </div>
        </div>

        <div>
          <div className="h-4 w-28 bg-foreground/8 rounded animate-pulse mb-2" />
          <div className="w-full px-4 md:px-5 py-3 md:py-3.5 bg-foreground/8 rounded-xl animate-pulse min-h-[144px] md:min-h-[173px]" />
        </div>

        <div className="w-full md:w-[206px] h-[52px] px-6 md:px-8 py-3 md:py-3.5 bg-foreground/8 rounded-xl animate-pulse" />
      </div>
    </div>
  );
}
