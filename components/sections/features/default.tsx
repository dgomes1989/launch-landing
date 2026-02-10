import { Zap, Shield, Rocket } from "lucide-react";
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
  title = "Features that matter",
  description = "Everything you need to build modern web applications",
  features = [
    {
      icon: <Zap className="size-8 text-brand" />,
      title: "Lightning Fast",
      description:
        "Built with performance in mind. Optimized components ensure your app loads instantly.",
    },
    {
      icon: <Shield className="size-8 text-brand" />,
      title: "Secure by Default",
      description:
        "Industry-standard security practices built in. Your data and users are protected.",
    },
    {
      icon: <Rocket className="size-8 text-brand" />,
      title: "Deploy Anywhere",
      description:
        "Works seamlessly with Vercel, Netlify, AWS, and any modern hosting platform.",
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
