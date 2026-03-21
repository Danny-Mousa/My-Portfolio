import { accomplishmentsData } from "@/lib/portfolio-data";
import SectionTitle from "../_components/SectionTitle";
import { Link, SquareArrowOutUpRight } from "lucide-react";

function page() {
  return (
    <div className="space-y-8 md:space-y-12">
      <SectionTitle title="Honors & awards" />
      <div className="space-y-4">
        {accomplishmentsData.awards.map((item, index) => (
          <div
            key={index}
            className="relative pl-5 md:pl-6 pb-6 border-l-2 border-border last:pb-0"
          >
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent" />
            <h4 className="text-base md:text-lg font-semibold text-foreground mb-2">
              {item.title}
            </h4>
            <p className="text-xs md:text-sm text-accent mb-2">
              {item.organization}
            </p>
            <p className="text-xs md:text-sm text-accent mb-2">{item.period}</p>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
      <SectionTitle title="Licenses & certifications" />
      <div className="space-y-4">
        {accomplishmentsData.certifications.map((item, index) => (
          <div
            key={index}
            className="relative pl-5 md:pl-6 pb-6 border-l-2 border-border last:pb-0"
          >
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent" />
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline transition-colors duration-200"
            >
              <h4 className="text-base md:text-lg hover:text-accent  font-semibold text-foreground mb-2">
                {item.title}
                <Link className="text-accent inline w-4 h-4 ml-2" />
              </h4>
            </a>
            <p className="text-xs md:text-sm text-accent mb-2">
              {item.organization}
            </p>
            <p className="text-xs md:text-sm text-accent mb-2">{item.period}</p>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
      <SectionTitle title="Volunteering" />
      <div className="space-y-4">
        {accomplishmentsData.volunteering.map((item, index) => (
          <div
            key={index}
            className="relative pl-5 md:pl-6 pb-6 border-l-2 border-border last:pb-0"
          >
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent" />
            <h4 className="text-base md:text-lg font-semibold text-foreground mb-2">
              {item.title}
            </h4>
            <p className="text-xs md:text-sm text-accent mb-2">
              {item.organization}
            </p>
            <p className="text-xs md:text-sm text-accent mb-2">{item.period}</p>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;
