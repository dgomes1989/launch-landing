import { Users, Cpu, TrendingUp } from "lucide-react";
import { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { Section } from "../../ui/section";

interface FeatureProps {
  icon: ReactNode;
  title: string;
  description: string;
}

interface FeaturesProps {
  title?: string;
  description?: string;
  features?: FeatureProps[];
  className?: string;
}

export default function Features({
  title = "How we work with you",
  description = "Forward-deployed consulting that integrates seamlessly with your team",
  features = [
    {
      icon: <Users className="size-8 text-brand" />,
      title: "Forward-Deployed Engineers",
      description:
        "Our AI experts embed directly into your team, working alongside your engineers to build and deploy production-ready AI systems.",
    },
    {
      icon: <Cpu className="size-8 text-brand" />,
      title: "Custom AI Solutions",
      description:
        "From LLM integration to computer vision and predictive analytics, we build AI systems tailored to your specific business needs.",
    },
    {
      icon: <TrendingUp className="size-8 text-brand" />,
      title: "Strategic Implementation",
      description:
        "We don't just build technology—we ensure your AI initiatives drive measurable business outcomes and ROI.",
    },
  ],
  className,
}: FeaturesProps) {
  return (
    <Section className={cn("", className)}>
      <div className="max-w-container mx-auto">
        <div className="mb-12 flex flex-col items-center gap-4 text-center sm:mb-16">
          <h2 className="max-w-[640px] text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
            {title}
          </h2>
          <p className="text-muted-foreground max-w-[640px] text-lg">
            {description}
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card border-border group flex flex-col gap-4 rounded-xl border p-8 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-center justify-center rounded-lg bg-primary/5 p-3 w-fit">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
