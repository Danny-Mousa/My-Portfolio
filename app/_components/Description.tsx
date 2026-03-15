import { aboutData } from "@/lib/portfolio-data";

function Description() {
  return (
    <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
      {aboutData.description.map((paragraph, index) => (
        <p key={index} className="whitespace-pre-wrap">
          {paragraph}
        </p>
      ))}
    </div>
  );
}

export default Description;
